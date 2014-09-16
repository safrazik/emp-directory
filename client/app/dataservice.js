define(['knockout', 'q', 'breeze', 'models'], function(ko, Q, breeze, models) {

  var serviceName;
  serviceName = '../server/standalone/index.php'; // using standalone server
  serviceName = '../server/symfony/web/app_dev.php/api'; // using symfony server
  serviceName = '../server/laravel/public/index.php/api'; // using laravel server

  var entityManager = new breeze.EntityManager(serviceName);

  entityManager.metadataStore.registerEntityTypeCtor('Employee', null, function(employee){
    models.Employee.apply(employee);
    employee.validationErrors = ko.observableArray();
    employee.entityAspect.validationErrorsChanged.subscribe(function(){
      employee.validationErrors(employee.entityAspect.getValidationErrors());
    });
  });

  var lookupResources = ['Jobs', 'Departments'];
  var lookupsCached = {};
  var resourceName;
  for (var i = 0; i < lookupResources.length; i++) {
    resourceName = lookupResources[i];
    lookupsCached[resourceName] = ko.observableArray();
    entityManager.executeQuery(new breeze.EntityQuery()
      .from(resourceName)).then(function(data) {
      lookupsCached[this.resourceName](data.results);
    }
    // binding a temporary context as the query execution is asynchronous 
    // (avoid block scope issue)
    .bind({resourceName: resourceName}));
  }

  function getLookups(resourceName) {
    if (!lookupsCached[resourceName]) {
      lookupsCached[resourceName] = ko.observableArray();
      var query = new breeze.EntityQuery().from(resourceName);
      entityManager.executeQuery(query).then(function(data) {
        lookupsCached[resourceName](data.results);
      });
    }
    return lookupsCached[resourceName];
  }

  var directReportsFetchedMap = {};

  // let breeze do the Human Resource Management for us. 
  // breeze will automatically assign the manager and direct reports,
  //  if they are available in the local cache. Otherwise we should fetch them from server
  function fetchManagerAndDirectReports(employee) {
    var predicatesArray = [];
    if (employee.managerId() && !employee.manager()) {
      predicatesArray.push(new breeze.Predicate('id', 'eq', employee.managerId()));
    }
    if (!directReportsFetchedMap[employee.id()]) {
      predicatesArray.push(new breeze.Predicate('manager.id', 'eq', employee.id()));
      directReportsFetchedMap[employee.id()] = true;
    }
    if (predicatesArray.length) {
      var query = new breeze.EntityQuery().from('Employees').where(breeze.Predicate.or(predicatesArray));
      entityManager.executeQuery(query);
    }
  }

  function executeQuerySmartly(query, options) {
    options = options || {};
    if (options.limit) {
      query = query.top(options.limit);
    }
    if (options.skip) {
      query = query.skip(options.skip);
    }

    if (options.localFirst) {
      var results = [];
      try {
        results = entityManager.executeQueryLocally(query);
      }
      catch (e) {
        // error may occur if metadata is not fetched yet. let's ignore it
      }
      if (results.length) {
        var deferred = Q.defer();
        deferred.resolve({results: results});
        return deferred.promise;
      }
    }
    return entityManager.executeQuery(query);
  }

  function getResourceNameForEntityType(entityType){
    return entityManager.metadataStore.getEntityType(entityType).defaultResourceName;
  }

  return {
    fetchMetadata: function(){
      return entityManager.fetchMetadata();
    },
    findAll: function(resourceName){
      var query = new breeze.EntityQuery().from(resourceName);
      return executeQuerySmartly(query, {localFirst: false});
    },
    findOne: function(entityType, id){
      var deferred = Q.defer();
      entityManager.fetchEntityByKey(entityType, id, true).then(function(result) {
        // var entityKey = result.entityKey;
        // var fromCache = result.fromCache;
        deferred.resolve(result.entity);
      }).fail(deferred.reject);
      return deferred.promise;
    },
    createOne: function(entityType, data){
      data = data || {};
      return entityManager.createEntity(entityType, data);
    },
    findEmployeeById: function(employeeId) {
      var deferred = Q.defer();
      var query = new breeze.EntityQuery().from('Employees').where('id', 'eq', employeeId);
      var results = [];
      try {
        results = entityManager.executeQueryLocally(query);
      }
      catch (e) {
        // error may occur if metadata is not fetched yet. let's ignore it
      }

      var employee;
      if (results.length) {
        employee = results[0];
        deferred.resolve(employee);
        fetchManagerAndDirectReports(employee);
      }
      else {
        query = query.expand(['manager', 'directReports']);
        entityManager.executeQuery(query).then(function(data) {
          if (data.results.length) {
            employee = data.results[0];
            deferred.resolve(employee);
          }
          else {
            deferred.reject(new Error('No employee found for id: ' + employeeId));
          }
        }).fail(function(error) {
          deferred.reject(error);
        });
      }
      return deferred.promise;
    },
    findEmployees: function(filterText, options) {
      var query = new breeze.EntityQuery().from('Employees')
//        .expand('job')
        ;
      ;
      if (filterText) {
        query = query.where(breeze.Predicate.or(
          new breeze.Predicate('firstName', 'contains', filterText),
          new breeze.Predicate('lastName', 'contains', filterText)
          ));
      }

      return executeQuerySmartly(query, options);
    },
    createEmployee: function(data) {
      data = data || {};
      return entityManager.createEntity('Employee', data);
    },
    createJob: function(data) {
      data = data || {};
      return entityManager.createEntity('Job', data);
    },
    createDepartment: function(data) {
      data = data || {};
      return entityManager.createEntity('Department', data);
    },
    deleteEntity: function(entity) {
      entity.entityAspect.setDeleted();
    },
    saveChanges: function(entities) {
      return entityManager.saveChanges(entities);
    },
    rejectChanges: function(entities){
      return entityManager.rejectChanges(entities);
    },
    getJobs: function() {
      return getLookups('Jobs');
    },
    getDepartments: function() {
      return getLookups('Departments');
    },
    subscribeChanges: function(callback) {
        entityManager.entityChanged.subscribe(callback);
    },
    // return an array of entities that have changes
    getChanges: function(entityType) {
        return entityManager.getChanges(entityType);
    }
  };
})
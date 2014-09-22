define(['plugins/router', 'durandal/app', 'knockout', 'dataservice', 'jquery'],
  function(router, app, ko, dataservice, $) {
    var filterText = ko.observable();
    var employees = ko.observableArray();
    return {
      filterText: filterText,
      router: router,
      employees: employees,
      search: function() {
        dataservice.findEmployees(filterText(), {limit: 5, localFirst: true}).then(function(data){
          employees(data.results);
        });
      },
      attached: function(view){
        $(view).on('click', function(){
          employees([]);
        });
      },
      activate: function() {
          router.map([
            {route: '', title: 'Home', icon: 'home', moduleId: 'welcome/welcome', nav: false},
            {route: 'employees', title: 'Employees', icon: 'list', hasChildRoutes: true, moduleId: 'employees/employees', nav: false},
            {route: 'crud', title: 'CRUD', icon: 'pencil', hasChildRoutes: true, moduleId: 'crud/crud', nav: true},
            {route: 'debug', title: 'Debug', icon: 'info-circle', moduleId: 'debug/debug', nav: true},
          ]).buildNavigationModel();
          return router.activate();
      }
    };
  });
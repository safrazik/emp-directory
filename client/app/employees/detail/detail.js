define(['knockout', 'q', 'dataservice'], function(ko, Q, dataservice){
  var employee = ko.observable();
  return {
    employee: employee,
    activate: function(employeeId){
      var deferred = Q.defer();
      dataservice.findEmployeeById(employeeId).then(function(emp){
        employee(emp);
        deferred.resolve();
      }).fail(function(error){
        alert(error);
        deferred.reject();
      });
//      alert(employeeId);
      // returns a promise, if employee found view is activated otherwise routing is cancelled
      return deferred.promise;
    }    
  }
});
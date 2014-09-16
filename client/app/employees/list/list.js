define(['knockout', 'dataservice'], function(ko, dataservice){
  var employees = ko.observableArray();
  dataservice.findEmployees().then(function(data){
    employees(data.results);
  });
  return {
    employees: employees,
  }
});
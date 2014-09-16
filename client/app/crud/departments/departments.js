define(['knockout', 'dataservice'], function(ko, dataservice) {

  var items = dataservice.getDepartments();
  var selectedItem = ko.observable();
  var entityTypeName = ko.observable('Department');
  var resourceName = ko.observable('Departments');
  
  var columns = ko.observableArray([
    {name: 'name', label: 'Department Name'},
    {name: 'description', label: 'Description', formType: 'textarea'},
  ]);
    
  return {
    columns: columns,
    items: items,
    selectedItem: selectedItem,
    entityTypeName: entityTypeName,
    resourceName: resourceName,
  };
})
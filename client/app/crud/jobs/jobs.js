define(['knockout', 'dataservice'], function(ko, dataservice) {

  var items = dataservice.getJobs();
  var selectedItem = ko.observable();
  var entityTypeName = ko.observable('Job');
  var resourceName = ko.observable('Jobs');
  
  var columns = ko.observableArray([
    {name: 'title', label: 'Job Title'},
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
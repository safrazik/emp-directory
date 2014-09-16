define(['plugins/router'], function(router) {
  var childRouter = router.createChildRouter().makeRelative({
    moduleId: 'crud',
    route: 'crud'
  }).map([
    {route: 'departments', title: 'Departments', moduleId: 'departments/departments', nav: true},
    {route: 'jobs', title: 'Job Titles', moduleId: 'jobs/jobs', nav: true},
    {route: ['', ':employeeId'], title: 'Employees', moduleId: 'employees/employees', nav: true},
  ]).buildNavigationModel();
  return {
    router: childRouter,
    activate: function() {
    }
  }
});
define(['plugins/router'], function(router) {
  var childRouter = router.createChildRouter().makeRelative({
    moduleId: 'employees',
    route: 'employees'
  }).map([
    {route: '', title: 'Employees', moduleId: 'list/list', nav: false},
    {route: ':employeeId', title: 'Employee Detail', moduleId: 'detail/detail', nav: false},
  ]).buildNavigationModel();
  return {
    router: childRouter,
    activate: function() {
    }
  }
});
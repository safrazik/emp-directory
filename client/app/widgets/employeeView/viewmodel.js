define(['knockout'], function(ko) {
  function EmployeeViewWidget() {
    this.employee = ko.observable();
    this.employees = ko.observableArray();
    this.isSingle = ko.observable();
    this.allEmployees = ko.computed(function() {
      if(this.isSingle()){
        return this.employee() ? [this.employee()] : [];
      }
      return this.employees();
    }, this);
    this.activate = function(settings) {
      if (settings.employees) {
        this.employees = settings.employees;
        this.isSingle(false);
      }
      else if(settings.employee) {
        this.employee = settings.employee;
        this.isSingle(true);
      }
    }
  }
  EmployeeViewWidget.pdffdrototype = {
    activate: function(settings) {
    }
  }
  return EmployeeViewWidget;
})
define(['knockout', 'dataservice', 'plugins/router', 'durandal/app', 'toastr', 'moment'], function(ko, dataservice, router, app, toastr, moment) {
  var items = ko.observableArray();
  var selectedItem = ko.observable();
  var entityTypeName = ko.observable('Employee');
  var resourceName = ko.observable('Employees');
  
  var jobs = dataservice.getJobs();
  var departments = dataservice.getDepartments();
  var employees = items;
  
  var columns = ko.observableArray([
    {name: 'photo', label: 'Photo', formType: 'image',
    displayValue: function(employee){
      return employee.profilePicThumbUrl();
    },
    formValue: function(employee){
      return employee.profilePicFileData;
    }},
    {name: 'firstName', label: 'First Name'},
    {name: 'lastName', label: 'Last Name'},
    {name: 'dateOfBirth', label: 'Birth day', formType: 'date', displayValue: function(employee){
      return moment(employee.dateOfBirth()).format('MMM D, YYYY'); // e.g: Oct 10, 1981
    }},
    {name: 'email', label: 'Email', formType: 'email'},
    {name: 'officePhone', label: 'Office Phone', formType: 'tel'},
    {name: 'cellPhone', label: 'Cell Phone', formType: 'tel'},
    {name: 'bio', label: 'Bio', formType: 'textarea', displayValue: function(employee) {
        return '';
//        return employee.bio().substr(0, 50) + '...';
    }},
    {name: 'website', label: 'Website/Blog'},
    {name: 'twitter', label: 'Twitter @'},
    {name: 'job', label: 'Job', formType: 'select',
      options: jobs,
      optionsText: 'title',
      displayValue: function(employee) {
        return employee.job() && employee.job().title();
      },
      addNewItem: function(employee) {
        app.showDialog('crud/dialogs/job-form').then(function(job) {
          if (job) {
            job = dataservice.createJob(job);
            jobs.push(job);
            if (employee.job) {
              employee.job(job);
            }
          }
        });
      }
    },
    {name: 'department', label: 'Department', formType: 'select',
      options: departments,
      optionsText: 'name',
      displayValue: function(employee) {
        return employee.department() && employee.department().name();
      },
    },
    {name: 'manager', label: 'Manager', formType: 'select',
      options: employees,
      optionsText: 'fullName',
      displayValue: function(employee) {
        return employee.manager() && employee.manager().fullName();
      }
    },
  ]);
    
  return {
    columns: columns,
    items: items,
    selectedItem: selectedItem,
    entityTypeName: entityTypeName,
    resourceName: resourceName,
    activate: function(employeeId){
      dataservice.findEmployees().then(function(data) {
        employees(data.results);
      });
      if(employeeId){
        dataservice.findEmployeeById(employeeId).then(function(employee){
          selectedItem(employee);
        });
      }
      else {
        selectedItem(null);
      }
    }
  };
})
define(['knockout', 'dataservice', 'plugins/router', 'durandal/app', 'toastr', 'moment'], function(ko, dataservice, router, app, toastr, moment) {

  var BreezeCrudWidget = function(){
    var self = this;
    self.items = ko.observableArray();
    self.columns = ko.observableArray();
    self.selectedItem = ko.observable();
    self.entityTypeName = ko.observable();
    self.resourceName = ko.observable();
    self.getColumnFormValue = function(item, column) {
      if (column.formValue) {
        return column.formValue(item);
      }
      return item[column.name];
    };
    self.getColumnDisplayValue = function(item, column) {
      if (column.displayValue) {
        return column.displayValue(item);
      }
      return item[column.name];
    };
    self.getColumnValidationMessage = function(item, column) {
      if(!item.validationErrors){
        return;
      }
      var errors = item.validationErrors();
      var validationMessage = '';
      if (errors.length) {
        var messages = [];
        for (var i = 0; i < errors.length; i++) {
          if(errors[i].property.name == column.name){
            messages.push(errors[i].errorMessage);
          }
        }
        validationMessage = messages.join(', ');
      }
      return validationMessage;
    }
    self.detailView = function(item) {
      self.selectedItem(item);
//     router.navigate('#crud/' + item.id(), {trigger: false, replace: true});
    }
    self.cancelDetailView = function() {
      self.selectedItem(null);
//      router.navigate('#crud', {trigger: false, replace: true});
    }
    self.addNewItem = function() {
      var item = dataservice.createOne(self.entityTypeName());
      self.items.push(item);
      self.selectedItem(item);
    }
    self.deleteSelectedItem = function() {
      app.showMessage('Are you sure you want to delete?', 'Delete Item', ['Delete', 'Cancel'], true,
        {primaryButtonClass: 'btn-danger autofocus', secondaryButtonClass: 'btn-default'}).then(function(result) {
        if (result == 'Delete') {
          var item = self.selectedItem();
          var i = self.items.indexOf(item);
          if (i !== -1) {
            self.items.splice(i, 1);
            self.selectedItem(null);
          }
          dataservice.deleteEntity(item);
        }
      });
    }
    self.rejectChanges = function(){
      app.showMessage('Are you sure you want to reject all changes?', 'Reject Changes', ['Reject Changes', 'Cancel']).then(function(result) {
        if(result == 'Reject Changes'){
          return dataservice.rejectChanges();
        }
      });
    }
    self.saveChanges = function() {
      dataservice.saveChanges().then(function(data) {
        toastr.success('Data saved successfully');
      }).fail(function(error) {
        var errorMessage = '';
        if (error.entityErrors) {
          var validationErrorMessages = [];
          var validationError;
          for (var i = 0; i < error.entityErrors.length; i++) {
            validationError = error.entityErrors[i];
            validationErrorMessages.push(validationError.errorMessage);
          }
          errorMessage += '<ul class="list-unstyled"><li>' + validationErrorMessages.join('</li><li>') + '</li></ul>';
        }
        if (!errorMessage) {
          errorMessage = 'Save failed';
        }
        toastr.error(errorMessage);
      });
    } 
    self.activate = function(settings){
      self.entityTypeName = settings.entityTypeName;
      self.resourceName = settings.resourceName;
      if(settings.items){
        self.items = settings.items;
      }
      else {
        dataservice.findAll(self.resourceName()).then(function(data){
          self.items(data.results);
        });
      }
      self.columns = settings.columns;
      self.selectedItem = settings.selectedItem;
    }
  }

  return BreezeCrudWidget;

});
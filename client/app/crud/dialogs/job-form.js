define(['plugins/dialog'], function(dialog){
  return {
    save: function(){
      var job = {title: this.title, description: this.description};
      return dialog.close(this, job);
    },
    cancel: function(){
      return dialog.close(this, false);
    },
    activate: function(settings){
      this.title = '';
      this.description = '';
      settings = settings || {};
    }
  }
})
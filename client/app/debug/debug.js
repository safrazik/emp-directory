define(['knockout', 'dataservice'], function(ko, dataservice){
	var changedEntities = ko.observableArray(dataservice.getChanges());
    dataservice.subscribeChanges(function (changeargs) {
        changedEntities(dataservice.getChanges());
    });
    return {
    	changedEntities: changedEntities,
    	reset: function(){
    		dataservice.rejectChanges();
    	},
    	update: function(){
    		dataservice.saveChanges().fail(function(error){
    			alert('Error occured: ' + error + '\nSee the console for more details');
    			console.log(error.stack);
    		});
    	}
    }
})
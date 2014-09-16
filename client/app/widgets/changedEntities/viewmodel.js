define(['fileBindings', 'durandal/app'], function(fileBindings, app){
	var ChangedEntitiesWidget = function(){
		this.activate = function(settings){
			this.changedEntities = settings.changedEntities;
		}
	}
	return ChangedEntitiesWidget;
})
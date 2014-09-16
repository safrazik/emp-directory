define(['fileBindings', 'durandal/app'], function(fileBindings, app){
	var ImageUploadWidget = function(){
		this.onClear = function(fileData){
			var RESULT_OK = 'Yes';
			app.showMessage('Are sure you want to clear file selection?', 'Clear Selection', [RESULT_OK, 'Cancel']).then(function(result){
				if(result == RESULT_OK && fileData.clear){ 
					fileData.clear();
				}
			})
		}
		this.activate = function(settings){
			this.fileData = settings.fileData;
		}
	}
	return ImageUploadWidget;
})
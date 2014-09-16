define(['knockout'], function(ko){
	return {
		Employee: function Employee() {
			var employee = this;
		    employee.fullName = ko.computed(function() {
		      return employee.firstName() + ' ' + employee.lastName();
		    });
		    employee.profilePicAbsoluteUrl = function(){
		    	if(!employee.profilePic()){
		    		return;
		    	}
		    	 return '../server/pics/' + employee.profilePic();
		    }
		    employee.profilePicFileData = ko.observable({
		      dataURL: ko.observable(employee.profilePicAbsoluteUrl()),
		      file: ko.observable(),
		    });
		    employee.profilePicFileData().dataURL.subscribe(function(dataURL) {
		    	employee.profilePicContent(dataURL);
	        });
		    employee.profilePicUrl = ko.computed(function() {
		    	return employee.profilePicFileData().dataURL();
		    });
		    employee.profilePicThumbUrl = employee.profilePicUrl;
		}
	};
})
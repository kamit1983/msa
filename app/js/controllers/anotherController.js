app.controller('AnotherCntrl', ['$scope', function($scope){
	$scope.addNewEmployee = function(){
		console.log("Do you have employees here", $rootScope.employees);
	}
}]);
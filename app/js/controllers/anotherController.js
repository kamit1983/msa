app.controller('AnotherCntrl', ['$scope', '$rootScope', function($scope, $rootScope){
	$scope.newEmployee = {name:"", designation:""};
	$scope.addNewEmployee = function(){
		console.log("Do you have employees here", $rootScope.employees);
		if ($scope.newEmployee.name.length > 0 && $scope.newEmployee.designation.length > 0){
			var newEmployee = angular.copy($scope.newEmployee);
			$scope.newEmployee.name="";
			$scope.newEmployee.designation = "";
			$rootScope.employees.push(newEmployee);
		}
	}
}]);

var app = angular.module('app',[]);
app.controller('HelloWorldCntrl', ['$scope', function($scope){
	$scope.testMessage = "Hello World!!!";

	$scope.employees = [
		{
			"name": "John Clark",
			"designation": "I. T. Manager"
		},
		{
			"name": "Gracy C. Angle",
			"designation": "Sales Executive"
		},
		{
			"name": "Mike Preria",
			"designation": "Marketing Head"
		}
	];
}])
var app = angular.module('app',[]);
app.controller('HelloWorldCntrl', ['$scope', function($scope){
	$scope.testMessage = "Hello World!!!";
}])
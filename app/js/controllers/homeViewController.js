app.controller('HomeViewCntrl', ['$scope', function($scope){
	$scope.tasks = [
		{
			"statement":"9.00 AM Breakfast"
		},
		{
			"statement":"10.00 AM Meeting with CTO"
		},
		{
			"statement":"12.00 PM Write proposal for CBC"
		},
		{
			"statement":"02.00 PM Lunch with Peter"
		}
	]

	$scope.completeItem = function(task){
		task.completed = true;
	}
}]);
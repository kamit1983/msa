app.controller('TasksCntrl', ['$scope', function($scope){
	$scope.newTask = "";
	$scope.tasks = [];
	$scope.addNewTask = function(){
		$scope.tasks.push({name:$scope.newTask});
	}

	$scope.task = {
		name:"Random Task"
	};
}]);
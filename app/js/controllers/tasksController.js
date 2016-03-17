app.controller('TasksCntrl', ['$scope', function($scope){
	$scope.newTask = "";
	$scope.tasks = [];
	$scope.addNewTask = function(){
		$scope.tasks.push({name:$scope.newTask});
	}
	$scope.editItem = function(task){
		task.editing = true;
	}
	$scope.saveTask = function(task){
		task.editing = false;
	}
	$scope.deleteItem = function(taskIndex){
		$scope.tasks.splice(taskIndex,1);
	}
}]);
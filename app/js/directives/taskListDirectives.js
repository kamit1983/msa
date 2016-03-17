app.directive('taskList', [function(){
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'templates/task-list-item.tpl.html',
		link : function(scope, element, attrs){
			scope.editItem = function(task){
				task.editing = true;
			}
			scope.saveTask = function(task){
				task.editing = false;
			}
			scope.deleteItem = function(taskIndex){
				scope.tasks.splice(taskIndex,1);
			}
		}
	}
}]);
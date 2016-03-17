app.config(['$stateProvider', function($stateProvider){
	$stateProvider.state('home', {
		url:'/',
		templateUrl:'templates/home.tpl.html',
		controller: 'HomeViewCntrl'
	})
	.state('employees', {
		url:'/employees',
		templateUrl:'templates/employee.tpl.html'
	})
	.state('tasks', {
		url:'/tasks',
		templateUrl:'templates/tasks.tpl.html',
		controller: 'TasksCntrl'
	});
}])
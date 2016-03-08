var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
	//$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home', {
		url:'/home',
		templateUrl:'templates/home.tpl.html',
		controller: 'HomeViewCntrl'
	})
	.state('employees', {
		url:'/employees',
		templateUrl:'templates/employee.tpl.html'
	})
	.state('users',{
		url:'/users',
		templateUrl:'templates/users.tpl.html',
		controller:'UserController'
	});
});

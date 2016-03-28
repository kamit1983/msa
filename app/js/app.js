var app = angular.module('app',['ui.router', 'ngAnimate']);
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
	})
	.state('registration', {
		url:'/registration',
		templateUrl:'templates/registration.tpl.html',
		controller: 'RegistrationCntrl'
	})
	.state('animate', {
		url:'/animate',
		templateUrl: 'templates/animate.tpl.html',
		controller: 'AnimationCtrl'
	})
	.state('inbox', {
		url:'/inbox/:userid',
		templateUrl: 'templates/inbox.tpl.html',
		controller: 'InboxCtrl'
	});
}])













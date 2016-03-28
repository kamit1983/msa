app.controller('InboxCtrl', ['$scope', '$stateParams', 'localStorageService', function($scope, $stateParams, localStorageService){
	
	$scope.userId = $stateParams.userid;
	console.log($scope.userId);
	
	$scope.showCompose =false;

	$scope.getMessages = function(){
		$scope.messages = localStorageService.getMessages($scope.userId) || [];
	}
	$scope.getMessages();

	$scope.composed = function(message){
		localStorageService.sendMessage(message);
		$scope.showCompose = false;
	}

}]);
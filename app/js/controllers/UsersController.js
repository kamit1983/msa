
app.controller('UserController', ['$scope','UserRepository','$timeout',
  function($scope,UserRepository,$timeout){
    $scope.users = [];
    $scope.selection = 1;
    $scope.switch = 'settings';
  // $scope.users = [
  //   {name:'Mohan KUmar',skill:'Java'},
  //   {name:'Sohan KUmar',skill:'Angular'},
  //   {name:'Rohan KUmar',skill:'Dot Net'},
  //   {name:'Jagmohan KUmar',skill:'Node'}
  // ];

  //$scope.users = UserRepository.getUsers();
  $scope.fetch = function(){
    UserRepository.getUsers().success(function(users){
      $timeout(function () {
        $scope.users = users;
      }, 1000);
    });
  }

}]);

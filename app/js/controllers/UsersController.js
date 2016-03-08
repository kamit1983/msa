
app.controller('UserController', ['$scope','UserRepository','$timeout',
  function($scope,UserRepository,$timeout){
    $scope.users = [];
  // $scope.users = [
  //   {name:'Mohan KUmar',skill:'Java'},
  //   {name:'Sohan KUmar',skill:'Angular'},
  //   {name:'Rohan KUmar',skill:'Dot Net'},
  //   {name:'Jagmohan KUmar',skill:'Node'}
  // ];

  //$scope.users = UserRepository.getUsers();
  UserRepository.getUsers().success(function(users){
    $timeout(function () {
      $scope.users = users;
    }, 3000);
  });
}]);

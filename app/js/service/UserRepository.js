app.factory('UserRepository',['$http','$timeout',function($http,$timeout){
  function getUsers(){
    // return [
    //   {name:'Mohan KUmar',skill:'Java'},
    //   {name:'Sohan KUmar',skill:'Angular'},
    //   {name:'Rohan KUmar',skill:'Dot Net'},
    //   {name:'Jagmohan KUmar',skill:'Node'}
    // ];

      var url = '/app/data/users.json';
      return $http.get(url);
  }

  return {
    getUsers:getUsers
  }
}]);

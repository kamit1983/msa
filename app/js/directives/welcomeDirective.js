app.directive("welcome", function() {
  return {
    restrict: "E",
    template: "<label>{{words.join()}} </label>",
    controller: function($scope) {
      $scope.words = [];

      this.sayHello = function() {
        $scope.words.push("Hello");
      };
      
      this.sayHi = function() {
        $scope.words.push("Hi");
      };
    },

    link: function(scope, element){
      element.bind("mouseenter", function() {
        console.log(scope.words);
      });
    }
  }
})
.directive("hello", function() {
  return {
    require: "welcome",
    link: function (scope, element, attrs, welcomeCtrl) {
      welcomeCtrl.sayHello();
    }
  };
 })

.directive("hi", function() {
  return {
    require: "welcome",
    link: function (scope, element, attrs, welcomeCtrl) {
      welcomeCtrl.sayHi();
    }
  };
 });
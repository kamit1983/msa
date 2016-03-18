app.directive("nameInput", function(){
	return {
		restrict: "AE",
		scope: {
			uname: "=userName",
			label: "@"
		},
		templateUrl: "templates/name-input.tpl.html"
	}
})
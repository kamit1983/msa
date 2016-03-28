app.directive("messages", function(){
	return {
		restrict: "E",
		scope: {
			msgs: "="
		},
		templateUrl: "templates/messages.tpl.html"
	}
})
app.directive("compose", function(){
	return {
		restrict: "E",
		scope: {
			onCompose: "&",
			userId: "="
		},
		templateUrl: "templates/compose.tpl.html",
		link : function(scope, elem, attrs){
			scope.sendMessage = function(){
				var message = {
					subject:scope.subject,
					body: scope.body,
					userId: scope.id
				}
				scope.onCompose({message:message});
			}
		}
	}
})
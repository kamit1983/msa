app.factory("localStorageService", [ '$window', function($window){

	var localStorage = $window.localStorage;

	var _sendMessage = function(msg){
		var userId = msg.userId;
		var msgs = localStorage.getItem(userId) || [];
		msgs.push(msg);
		var strMsgs = JSON.stringify(msgs);
		localStorage.setItem(userId, strMsgs);
	},

	_getMessages = function(userId){
		var strMsgs = localStorage.getItem(userId);
		var msgs = [];
		if (strMsgs && strMsgs.length > 0){
			msgs = JSON.parse(strMsgs)
		}
		return msgs;
	};

	return {
		sendMessage: _sendMessage,
		getMessages: _getMessages
	}	
}])
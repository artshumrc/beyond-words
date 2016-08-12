Meteor.method("register", function (content) {
		console.log("method", content);

		var validCandidate = {};

		for( var key in content ){
			content[key] = content[key].replace(/(<([^>]+)>)/ig,"");
			if(content[key].length > 1000){
				content[key] = content[key].slice(0,999);
			}
			validCandidate[key] = content[key];
		}


		Registration.insert(validCandidate)

		return 1;

	}, {
	  url: "events/register",
	  getArgsFromRequest: function (request) {
	    var content = request.body;
			console.log("argsFromRequest", content);

	    return [content];
	  }
});

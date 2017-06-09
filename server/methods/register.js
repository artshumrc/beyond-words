Meteor.method('register', (content) => {
	const validCandidate = {};

	Object.keys(content).forEach((key) => {
		let value = content[key];
		if (['nov_3', 'nov_4', 'nov_5'].indexOf(key) >= 0) {
			if (typeof value !== 'boolean') {
				value = false;
			}
		} else {
			value = value.replace(/(<([^>]+)>)/ig, '');
			if (value.length > 1000) {
				value = value.slice(0, 999);
			}
		}

		validCandidate[key] = value;
	});


	Registration.insert(validCandidate);

	return 1;
}, {
	url: 'events/register',
	getArgsFromRequest(request) {
		const content = request.body;

		return [content];
	},
});

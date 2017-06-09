
Meteor.methods({
	searchTools() {
		let scribes = [];
		let illuminators = [];
		let institutions = [];
		let places = [];

		scribes = _.uniq(Objects.find({ scribe: { $exists: true } }, {
			sort: { scribe: 1 }, fields: { scribe: true },
		}).fetch().map(x => x.scribe), true);
		illuminators = _.uniq(Objects.find({ illuminator: { $exists: true } }, {
			sort: { illuminator: 1 }, fields: { illuminator: true },
		}).fetch().map(x => x.illuminator), true);
		institutions = _.uniq(Objects.find({ institution: { $exists: true } }, {
			sort: { institution: 1 }, fields: { institution: true },
		}).fetch().map(x => x.institution), true);
		places = _.uniq(Objects.find({ place: { $exists: true } }, {
			sort: { place: 1 }, fields: { place: true },
		}).fetch().map(x => x.place), true);

		return {
			scribes,
			illuminators,
			institutions,
			places,
		};
	},

});

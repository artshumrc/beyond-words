import { Meteor } from 'meteor/meteor';
import Config from './config';

if (Meteor.isServer) {
	Meteor.startup(() => {
		if (Meteor.settings && Meteor.settings.serviceConfigurations) {
			return _.each(Meteor.settings.serviceConfigurations, (config, service) =>
				ServiceConfiguration.configurations.upsert({
					service,
				}, {
					$set: config,
				})
			);
		}
		return null;
	});
}

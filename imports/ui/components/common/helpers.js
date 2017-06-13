
import Config from '/imports/lib/config/config';


Template.registerHelper('Config', () => Config);

Template.registerHelper('NCSchemas', () => NCSchemas);

Template.registerHelper('socialMedia', () => _.map(Config.socialMedia, obj => obj));

Template.registerHelper('Utils', () => Utils);

Template.registerHelper('currentRoute', () => {
	if (Router && Router.current && Router.current()) {
		return Router.current();
	}
	return null;
});

Template.registerHelper('isRouteReady', () =>
	Router && Router.current && Router.current() && Router.current()._waitlist._notReadyCount === 0);

Template.registerHelper('joinArray', array => array.join(', '));

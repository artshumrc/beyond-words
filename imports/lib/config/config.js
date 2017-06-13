import { Meteor } from 'meteor/meteor';

const Config = {
	name: 'Beyond Words',
	title: () => 'Beyond Words',
	subtitle: () => 'Beyond Words',
	logo: () => '<b>Beyond Words</b>',
	footer: () => `Beyond Words - Copyright ${new Date().getFullYear()}`,
	emails: {
		from: `no-reply@${Meteor.absoluteUrl()}`,
		contact: `contact${Meteor.absoluteUrl()}`,
	},
	username: false,
	defaultLanguage: 'en',
	dateFormat: 'D/M/YYYY',
	privacyUrl: 'http://beyondwords2016.org/terms',
	termsUrl: 'http://beyondwords2016.org/terms',
	legal: {
		address: '',
		name: 'Beyond Words',
		url: 'http://beyondwords2016.org',
	},
	about: 'http://beyondwords2016/about',
	blog: '',
	socialMedia: {
		github: {
			url: 'http://twitter.com',
			icon: 'twitter',
		},
	},
	homeRoute: '/',
	publicRoutes: ['home'],
	dashboardRoute: '/admin',
};

export default Config;

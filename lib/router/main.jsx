import React from 'react';
import { mount } from 'react-mounter';

/*
* For the moment add subscriptions here; in future iterations, make them route
* specific as necessary
*/

FlowRouter.subscriptions = function subscriptions() {
	this.register('searchTools', Meteor.subscribe('searchTools'));
	this.register('events', Meteor.subscribe('events'));
	this.register('users', Meteor.subscribe('users'));
};


/*
* Routes for application
*/

FlowRouter.route('/catalog', {
	action(params, queryParams) {
		mount(CatalogLayout, { params, queryParams });
	},
});

FlowRouter.route('/objects', {
	name: 'ObjectList',
	action() {
		mount(MasterLayout, {
			content: <CatalogLayout />,
		});
	},
});
FlowRouter.route('/objects/:slug', {
	name: 'ObjectDetail',
	action(params) {
		mount(MasterLayout, {
			content: <ObjectDetailPage slug={params.slug} />,
		});
	},
});

FlowRouter.route('/ipad', {
	action() {
		mount(IPadLayout, {
			content: <IPadView />,
		});
	},
});

/*
* Single page view
* 404 check is in the actual template
*/
FlowRouter.route('/:slug', {
	action(params) {
		// console.log(params);
		const reservedRoutes = ['admin', 'sign-in', 'sign-up'];
		// console.log(reservedRoutes.indexOf(params.slug));
		if (reservedRoutes.indexOf(params.slug) === -1) {
			mount(MasterLayout, {
				content: <SinglePage slug={params.slug} />,
			});
		}
	},
});

FlowRouter.route('/', {
	action() {
		mount(ComingSoonHomeLayout);
	},

});

/*
 *  Route for iPad build
 *
 */

/*
FlowRouter.route('/', {
	action: function(params, queryParams){
		mount(IPadLayout, {
			content: <IPadSingleVideoView />
		});
	}
});

*/

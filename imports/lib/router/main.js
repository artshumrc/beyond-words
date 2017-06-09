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
	action() {
		mount(CatalogLayout, {selectedObjectSlug: location.hash.replace('#', '')});
	},
});

FlowRouter.route('/catalog/:slug', {
	action(params) {
		mount(CatalogLayout, {selectedObjectSlug: params.slug});
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

/*
FlowRouter.route('/', {
	action() {
		mount(ComingSoonHomeLayout);
	},

});
*/

/*
 *  Route for iPad build
 *
 */

FlowRouter.route('/', {
	action: (params, queryParams) => {
		mount(IPadLayout, {
			content: <IPadViewTyp139 />
		});
	}
});



/*
 * Perform functions necessary on route load
 *
 */
function onRouteLoad() {
	let headroom;

	// If Meteor is on the client and a window exists
	if (Meteor.isClient && typeof window !== 'undefined') {
		// Initialize headroom
		setTimeout(() => {
			const elem = document.querySelector('header');
			if (elem) {
				headroom = new Headroom(elem);
				headroom.init();
			}
		}, 300);

		// Append .background-image-holder <img>'s as CSS backgrounds
		setTimeout(() => {
			$('.background-image-holder').each(function appendImg() {
				const imgSrc = $(this).children('img').attr('src');
				$(this).css('background', `url("${imgSrc}")`);
				$(this).children('img').hide();
				$(this).css('background-position', 'initial');
				$(this).addClass('fadeIn');
			});

			// Fade in background images
			setTimeout(() => {
				$('.background-image-holder').each(function fadeImg() {
					$(this).removeClass('blur');
				});
			}, 500);
		}, 500);

		/*
		 * If isn't mobile, init skrollr
		 */
		if (!Utils.isMobile) {
			options = {
				forceHeight: false,
				smoothScrolling: false,
			};

			skrollr.init(options).refresh();
		}
	}
}

// Add onRouteLoad to FlowRouter.triggers.enter callbacks
FlowRouter.triggers.enter([onRouteLoad]);

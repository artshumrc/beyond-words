import React from 'react';
import { mount } from 'react-mounter';

import Utils from '/imports/lib/utils';
import CatalogLayout from '/imports/ui/layouts/CatalogLayout';
import ComingSoonHomeLayout from '/imports/ui/layouts/ComingSoonHomeLayout';
import HomeLayout from '/imports/ui/layouts/HomeLayout';
import MainLayout from '/imports/ui/layouts/MainLayout';
import IPadLayout from '/imports/ui/layouts/IPadLayout';
import MasterLayout from '/imports/ui/layouts/MasterLayout';
import IPadViewTyp139 from '/imports/ui/components/ipads/IPadViewTyp139';
import MiradorViewer from '/imports/ui/components/mirador/MiradorViewer';
import Page from '/imports/ui/components/pages/Page';
import Listen from '/imports/ui/components/pages/Listen';
import Watch from '/imports/ui/components/pages/Watch';
import ObjectDetailPage from '/imports/ui/components/objects/ObjectDetailPage';

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
		mount(CatalogLayout, {
		});
	},
});
FlowRouter.route('/objects/:slug', {
	name: 'ObjectDetail',
	action(params) {
		mount(CatalogLayout, {
			objectSlug: params.slug
		});
	},
});

/*
FlowRouter.route('/ipad', {
	action() {
		mount(IPadLayout, {
			content: <IPadView />,
		});
	},
});
*/

FlowRouter.route('/listen', {
	action() {
		mount(MasterLayout, {
			content: <Listen />,
		});
	},
});

FlowRouter.route('/watch', {
	action() {
		mount(MasterLayout, {
			content: <Watch />,
		});
	},
});

FlowRouter.route('/manifests/:id', {
	name: 'manifest',
	action: (params) => {
		mount(MainLayout, {
			content: (
				<MiradorViewer
					id={params.id}
				/>
			)
		});
	},
});

FlowRouter.route('/manifests/test', {
	name: 'miradorTest',
	action: (params) => {
		mount(MainLayout, {
			content: (
				<MiradorViewer
					// manifestUri="https://iiif.lib.harvard.edu/manifests/drs:47617540"
					manifestUri="https://s3-us-west-2.amazonaws.com/archimedes-data003/iiif/manifests/asdfjkl/manifest.json"
				/>
			)
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
				content: <Page slug={params.slug} />,
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
		mount(HomeLayout);
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

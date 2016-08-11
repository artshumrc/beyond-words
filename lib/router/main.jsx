import React from 'react';
import {mount} from 'react-mounter';

/*
 * For the moment add subscriptions here; in future iterations, make them route
 * specific as necessary
 */

 FlowRouter.subscriptions = function(){
   this.register('objects', Meteor.subscribe('objects'));
   this.register('tweetCollection', Meteor.subscribe('tweetCollection'));
   this.register('events', Meteor.subscribe('events'));
   this.register('users', Meteor.subscribe('users'));
 };


/*
 * Routes for application
 */

FlowRouter.route('/catalog', {
    action: function(params, queryParams) {
        mount(CatalogLayout, {params: params, queryParams: queryParams});
    }
});

FlowRouter.route('/objects', {
    name: 'ObjectList',
    action: function(params, queryParams){
        // console.log(queryParams);
        var query = queryParams.query || null;
        mount(MasterLayout, {
                content: <CatalogLayout />
    });
    }
});
FlowRouter.route('/objects/:slug', {
    name: 'ObjectDetail',
    action: function(params, queryParams){
        mount(MasterLayout, {
            content: <ObjectDetail slug={params.slug}/>
        });
    }
});

/*
 * Single page view
 * Add check w/query for 404 in the future?
 * 404 check is in the actual template
 */
FlowRouter.route('/:slug', {
    action: function(params){
        // console.log(params);
        var reservedRoutes = ['admin'];
        // console.log(reservedRoutes.indexOf(params.slug));
        if(reservedRoutes.indexOf(params.slug) === -1){
            mount(MasterLayout,{
                content: <SinglePage slug={params.slug}/>
            });
        }
    }
});

FlowRouter.route('/', {
    action: function(params) {
        // ReactLayout.render(ComingSoonHomeLayout);
        mount(ComingSoonHomeLayout);
    }

});


/*
FlowRouter.route('/objects/:slug', {
    action: function(params, queryParams) {
        ReactLayout.render(MainLayout, {params: params, queryParams: queryParams});
    }
});


*/

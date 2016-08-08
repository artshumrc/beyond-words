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


/*
 * Single page view
 * Add check w/query for 404 in the future?
 */
FlowRouter.route('/page/:slug', {
    action: function(param){
        // console.log(param);
        mount(MasterLayout,{
            content: <SinglePage slug={param.slug}/>
        });
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

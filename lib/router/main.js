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

FlowRouter.route('/:slug', {
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

FlowRouter.route('/about', {
    action: function(params) {
        ReactLayout.render(MasterLayout, {content:<AboutPage />});
    }
});


FlowRouter.route('/terms', {
    action: function(params) {
        ReactLayout.render(MasterLayout, {content:<TermsPage />});
    }
});

*/

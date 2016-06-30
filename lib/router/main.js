/*
 * For the moment add subscriptions here; in future iterations, make them route
 * specific as necessary
 */

 FlowRouter.subscriptions = function(){
   this.register('objects', Meteor.subscribe('objects'));
   this.register('users', Meteor.subscribe('users'));
 };


/*
 * Routes for application
 */


FlowRouter.route('/objects/:slug', {
    action: function(params, queryParams) {
        ReactLayout.render(MainLayout, {params: params, queryParams: queryParams});
    }
});

FlowRouter.route('/', {
    action: function(params) {
        ReactLayout.render(HomeLayout);
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

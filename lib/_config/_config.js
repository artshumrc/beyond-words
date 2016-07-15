this.Config = {
  name: 'Beyond Words',
  title: function() {
    return "Beyond Words";
  },
  subtitle: function() {
    return "Beyond Words";
  },
  logo: function() {
    return '<b>' + this.name + '</b>';
  },
  footer: function() {
    return this.name + ' - Copyright ' + new Date().getFullYear();
  },
  emails: {
    from: 'no-reply@' + Meteor.absoluteUrl(),
    contact: 'contact' + Meteor.absoluteUrl()
  },
  username: false,
  defaultLanguage: 'en',
  dateFormat: 'D/M/YYYY',
  privacyUrl: 'http://beyondwords2016.org/terms',
  termsUrl: 'http://beyondwords2016.org/terms',
  legal: {
    address: '',
    name: 'Beyond Words',
    url: 'http://beyondwords2016.org'
  },
  about: 'http://beyondwords2016/about',
  blog: '',
  socialMedia: {
    github: {
      url: 'http://twitter.com',
      icon: 'twitter'
    }
  },
  homeRoute: '/',
  publicRoutes: ['home'],
  dashboardRoute: '/admin'
};

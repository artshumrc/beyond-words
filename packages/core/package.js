Package.describe({
	name: 'archimedigital:core',
	version: '0.1.1',
	summary: 'Core funcitonality/libraries across Meteor projects.',
	git: '',
	documentation: 'README.md'

});

Package.onUse(function(api) {

	var both = ['client','server'];

	api.versionsFrom('1.1.0.3');

	api.addFiles([
				'lib/client/smooth-scroll.min.js',
				///'lib/client/parallax.js',
				'lib/client/headroom.min.js',
				'lib/client/jsdifflib/difflib.js',
				'lib/client/jsdifflib/diffview.js',
				'lib/client/jsdifflib/diffview.css',
				'lib/client/jquery-scrollLock.js',
				//'lib/client/dropzone.js',
				//'lib/client/basic.css',
			], 'client');


});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('archimedigital:core');
	api.addFiles('core-tests.js');
});

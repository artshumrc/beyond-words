this.AdminConfig = {
	name: Config.name,
	collections: {
		Objects: {
			color: 'blue',
			icon: 'book',
			tableColumns: [
				{ label: 'Catalog Number', name: 'catalog_n' },
			],
		},
		SymposiumSessions: {
			label: 'Symposium Sessions',
			color: 'blue',
			icon: 'calendar',
			tableColumns: [
				{ label: 'Title', name: 'title' },
				{ label: 'Date', name: 'date' },
			],
		},
		MediaItems: {
			label: 'News Items',
			color: 'blue',
			icon: 'calendar',
			tableColumns: [
				{ label: 'Title', name: 'title' },
				{ label: 'Source', name: 'source' },
			],
		},
		Events: {
			color: 'blue',
			icon: 'calendar',
			tableColumns: [
				{ label: 'Title', name: 'title' },
			],
		},
		Pages: {
			color: 'blue',
			icon: 'file',
			tableColumns: [
				{ label: 'Title', name: 'title' },
				{ label: 'Slug', name: 'slug' },
			],
		},
		Registration: {
			color: 'blue',
			icon: 'file',
			tableColumns: [
				{ label: 'First Name', name: 'first_name' },
				{ label: 'Last Name', name: 'last_name' },
				{ label: 'Affiliation', name: 'affiliation' },
			],
		},
	},
	dashboard: {
		homeUrl: '/admin',
	},
	autoForm: {
		omitFields: ['createdAt', 'updatedAt'],
	},
};

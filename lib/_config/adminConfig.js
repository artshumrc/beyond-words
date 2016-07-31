this.AdminConfig = {
  name: Config.name,
  collections: {
    Books: {
      color: 'blue',
      icon: 'book',
      tableColumns: [
        {label: 'Title', name: 'title'}
      ]
    },
    Events: {
      color: 'blue',
      icon: 'calendar',
      tableColumns: [
        {label: 'Title', name: 'title'}
      ]
    },
    Pages: {
      color: 'blue',
      icon: 'file',
      tableColumns: [
        {label: 'Title', name: 'title'},
        {label: 'Slug', name: 'slug'}
      ]
    },
  },
  dashboard: {
    homeUrl: '/admin'
  },
  autoForm: {
    omitFields: ['createdAt', 'updatedAt']
  }
};

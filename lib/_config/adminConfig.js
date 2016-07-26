this.AdminConfig = {
  name: Config.name,
  collections: {
    Books: {
      color: 'blue',
      icon: 'pencil',
      tableColumns: [
        {
          label: 'Title',
          name: 'title'
        }
      ]
    },
    Events: {
      color: 'blue',
      icon: 'pencil',
      tableColumns: [
        {
          label: 'Title',
          name: 'title'
        }
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

// List of objects
ObjectsList = React.createClass({

  // This mixin makes the getMeteorData method object
  mixins: [ReactMeteorData],

  propTypes: {
  },

  // Loads items from the objects collection and puts them on this.data.objects
  getMeteorData() {
    let query = {};

    return {
      objects: Objects.find(query, {sort: {title: 1}}).fetch(),
      currentUser: Meteor.user()
    };
  },

  renderobjects() {

    return this.data.objects.map((object) => {
      return <ObjectTeaser
              key={object._id}
              object={object} />;

    });

  },

  render() {

     return (
       <div className="objects-wrap">
         {this.data.objects.map((object) => {
            return <ObjectTeaser
              key={object._id}
              object={object} />;
          })}
       </div>


      );
    }


});

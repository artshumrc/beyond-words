
iPadView = React.createClass({

  mixins: [ReactMeteorData],

  propTypes: {
  },

  getMeteorData() {
    let query = {};

    return {
      objects: Objects.find(query, {sort: {title: 1}}).fetch(),
      currentUser: Meteor.user()
    };
  },

  renderObjects() {

    return this.data.objects.map((object) => {
      return <ObjectTeaser
              key={object._id}
              object={object} />;

    });

  },

  render() {

    return (
      <div className="page page-ipad">

    		<section className="page-head fullscreen image-bg bg-dark">

    			<div className="background-image-holder less-blur blur">
    				<img className="background-image" alt='image' src='/images/library-428034.jpg'/>
          </div>

          <div className="background-screen cyan">
          </div>

    			<div className="container v-align-transform">
    				<div className="row">
    					<div className="col-sm-10 col-sm-offset-1 text-center">
    					  <h1 className="mb40 mb-xs-16 large">
                  Search
                </h1>
              </div>
            </div>

          </div>

        </section>

    		<section className="page-content">
          {this.renderObjects}

        </section>


      </div>
    );
  }
});

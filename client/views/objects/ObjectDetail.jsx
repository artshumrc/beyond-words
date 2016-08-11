// Single object detail view
ObjectDetail = React.createClass({

    mixins: [ReactMeteorData],
    getMeteorData(){
        var object = {},
            images = [],
            thumbnails = [];
        var objectSubscription = Meteor.subscribe('object', this.props.slug);
        if (objectSubscription.ready()) {
            object = Objects.find({slug: this.props.slug}).fetch()[0];
        }
        var imageSubscription = Meteor.subscribe('objectImages', this.props.slug);
        if (imageSubscription.ready()) {
            images = Images.find({}).fetch();
            thumbnails = Thumbnails.find({}).fetch();
        }
        return {
            object: object,
            images: images,
            thumbnails: thumbnails
        };
    },

    // propTypes: {
    //   object : React.PropTypes.object.isRequired
    // },

    render() {
        let object = this.data.object;
        // console.log(this);
        var imageId = false;
        if (object.images && object.images.length) {
            //get a random image
            imageId = object.images[Math.floor(Math.random() * object.images.length)];
        }
        var headerImageUrl = imageId? Images.findOne(imageId).url:'/images/bronze-characters.jpg';

        return (
            <div>
                <section className="page-head image-bg bg-dark">

                    <div className="background-image-holder less-blur blur">
                        <img src={headerImageUrl} alt="image"/>
                    </div>
                    <div className="background-screen">
                    </div>

                    <div className="container v-align-transform header-container">
                        <div className="row">

                            <div className="col-sm-12 left">

                                <a href="/">
                                    <h2 className="card-title object-title">{object.title}</h2>
                                </a>


                            </div>
                            <div className="col-sm-12 right text-right">

                                <a href="#" className="comments-action md-button md-ink-ripple">
                                    <i className="mdi mdi-comment-outline"></i>227
                                    <div className="md-ripple-container"></div>
                                </a>

                                <a href="#" className="favorite-action md-button md-ink-ripple">
                                    <i className="mdi mdi-star-outline"></i>32
                                    <div className="md-ripple-container"></div>
                                </a>

                                <a href="#" className="export-action md-button md-ink-ripple">
                                    Export
                                    <i className="mdi mdi-export"></i>
                                    <div className="md-ripple-container"></div>
                                </a>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="object-details">

                    <div className="container ">
                        <div className="row">
                            <p>object description lorem ipsum Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                                eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
                                enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
                                ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                                fugiat quo voluptas nulla pariatur?
                            </p>


                        </div>

                    </div>

                </section>


            </div>
        );
    }
});

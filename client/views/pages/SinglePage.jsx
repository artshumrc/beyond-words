SinglePage = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        var slug = FlowRouter.getParam('slug');
        var page = [];
        var handle = Meteor.subscribe('pages', slug);
        if (handle.ready()) {
            // console.log(tweets);
            //TweetCollection = new Mongo.Collection("tweetCollection");
            page = Pages.find({slug: slug}).fetch();
        }
        return {
            page: page,
            ready: handle.ready()
        };
    },
    render() {
        var page = this.data.page;
        console.log(page);
        var slug = FlowRouter.getParam('slug');
        var pageClass = 'page page-' + slug;
        // var page = Pages.findOne({slug: slug});

        return (
            // todo: return 404 if !page.length
            <div className={pageClass}>

                <section className="page-head fullscreen image-bg bg-dark">

                    <div className="background-image-holder less-blur blur">
                        <img className="background-image" alt='image' src='/images/amphorae-many.jpg'/>
                    </div>

                    <div className="background-screen cyan">
                    </div>

                    <div className="container v-align-transform">
                        <div className="row">
                            <div className="col-sm-10 col-sm-offset-1 text-center">
                                <h1 className="mb40 mb-xs-16 large">
                                    About the CLTK Archive
                                </h1>
                            </div>
                        </div>

                    </div>

                </section>

                <section className="page-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ante vel diam dignissim
                        lobortis vitae non arcu. Nulla at dignissim mauris. Nam tempor posuere volutpat. Praesent
                        posuere, neque quis facilisis dictum, nunc ante sodales sem, vitae tempus est odio id augue.
                        Donec ac felis velit. Suspendisse in auctor magna. Donec finibus aliquam lacus eget faucibus.
                        Aliquam tincidunt nibh id nibh placerat mollis. Nam vestibulum libero id eros semper, eget
                        feugiat odio ultricies. Sed sodales maximus nisl vel placerat. Aenean vel elit elementum,
                        eleifend turpis vitae, ornare tellus. Integer mollis ligula quam, ut consequat turpis pharetra
                        id. Duis nisi odio, ullamcorper non nisl sit amet, pellentesque euismod risus. Aenean neque
                        risus, faucibus nec dolor vitae, iaculis eleifend est. Nunc euismod nunc et ante iaculis
                        tristique. Praesent iaculis augue efficitur, tempus nisi vel, varius tortor.

                    </p>
                    <p>
                        Praesent sed orci elit. Duis imperdiet nisi odio, at tempus lorem semper id. Donec dui arcu,
                        aliquam et dui non, feugiat mollis dui. Integer imperdiet a magna vel lacinia. Vestibulum in
                        sollicitudin mauris. Proin auctor, magna et pretium ornare, justo turpis consectetur est, et
                        gravida nisl nibh et nibh. Praesent tristique lorem ut tellus dapibus, in dignissim tellus
                        consectetur. Quisque euismod ipsum a consequat pretium. Donec id malesuada nisi. Cras tristique
                        sodales congue.

                    </p>
                    <p>
                        Maecenas eu lacus laoreet felis tincidunt varius. Nunc a orci vel felis imperdiet tempus quis ac
                        purus. Donec sodales quam nec tellus cursus, et condimentum enim suscipit. Mauris pharetra
                        feugiat malesuada. Donec tempus tellus fermentum, tempor urna vel, vestibulum lorem. Phasellus a
                        auctor libero, nec viverra velit. Ut faucibus id turpis sed accumsan. Pellentesque ante nibh,
                        lobortis sed faucibus quis, cursus non tortor.

                    </p>


                </section>


            </div>
        );
    }
});

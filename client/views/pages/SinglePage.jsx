SinglePage = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        // console.log(this);
        var slug = this.props.slug;//FlowRouter.getParam('slug');
        var page = {};
        var images = [];
        var thumbnails = [];
        var handle = Meteor.subscribe('pages', slug);
        var loading = true;
        if (handle.ready()) {
            // console.log(tweets);
            //TweetCollection = new Mongo.Collection("tweetCollection");
            page = Pages.find({slug: slug}).fetch()[0];
            var imageSub = Meteor.subscribe('pageImages', slug);
            if (imageSub.ready()) {
                if (page.headerImage && Array.isArray(page.headerImage)) {
                    images = Images.find({_id: {$in: page.headerImage}}).fetch();
                    thumbnails = Thumbnails.find({originalId: {$in: page.headerImage}}).fetch();
                }
            }
            loading = false;
        }
        return {
            page: page,
            ready: handle.ready(),
            images: images,
            thumbnails: thumbnails,
            loading: loading
        };
    },
    backgroundImages(){
        setTimeout(function () {
            $('.background-image-holder').each(function () {
                var imgSrc = $(this).children('img').attr('src');
                $(this).css('background', 'url("' + imgSrc + '")');
                $(this).children('img').hide();
                $(this).css('background-position', 'initial');
                $(this).addClass('fadeIn');
            });

            // Fade in background images
            setTimeout(function () {
                $('.background-image-holder').each(function () {
                    $(this).removeClass('blur');
                });
            }, 500);
        }, 100);
    },
    render(){
        var page = this.data.page;
        var slug = this.props.slug;//FlowRouter.getParam('slug');
        var pageClass = 'page page-' + slug;
        var userCanEdit = true;
        var headerImageSource = this.data.images[0] ? this.data.images[0].url : null;
        if (headerImageSource) {
            console.log(headerImageSource);
            this.backgroundImages();
        }
        // var page = Pages.findOne({slug: slug});
        console.log(this.data.loading);
        if (this.data.loading) {
            return (
                <Loading />
            )
        } else if(!this.data.loading && !this.data.page){
            return(
                <PageNotFound />
            )
        } else {
            return (
                // todo: return 404 if !page.length
                <div className={pageClass}>

                    <section className="page-head fullscreen image-bg bg-dark">
                        <div className="background-image-holder less-blur blur">
                            {/*<img className="background-image" alt='image' src={headerImageSource}/>*/}
                            <img className="background-image" alt='image' src="/images/manuscript_header.jpg"/>
                        </div>

                        <div className="background-screen primary">
                        </div>

                        <div className="container v-align-transform">
                            <div className="row">
                                <div className="col-sm-10 col-sm-offset-1 text-center">
                                    <h1 className="mb40 mb-xs-16 large">
                                        {page.title}
                                    </h1>
                                    <h2>
                                        {page.subTitle}
                                    </h2>
                                </div>
                            </div>

                        </div>

                    </section>

                    <section className="page-content container">
                        <div dangerouslySetInnerHTML={{__html: page.content}}/>
                    </section>


                </div>
            );
        }
    }
});

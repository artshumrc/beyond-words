HomeContent = React.createClass({

    componentDidMount() {

        /*
         * Init wow animations on homepage
         */
        var w;
        w = new WOW().init();

    },

    scrollToAbout(e){
        $("html, body").animate({scrollTop: $('#about').height() - 100}, 300);

        e.preventDefault();
    },


    render(){
        return (
            <div>
                <HomeIntro2/>
                <HomeOverview/>
                <HomeTwitter/>
                <HomeEvents/>
                <HomeCatalog/>
            </div>

        );
    }
});

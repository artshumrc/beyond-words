Home_Content = React.createClass({

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
                <Home_Intro/>
                <Home_Overview/>
                <Home_Twitter/>
                <Home_Events/>
                <Home_Catalog/>
            </div>

        );
    }
});

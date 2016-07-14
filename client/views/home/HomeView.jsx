HomeView = React.createClass({

    componentDidMount() {

        /*
         * Init wow animations on homepage
         */
        var w;
        w = new WOW().init();

    },

    render(){
        return (
            <div>
                <HomeSplashView/>

                <section id="schedule">
                    <div className="container text-center">
                        <div className="row">
                            <h2 className="section-title">Schedule</h2>
                            <hr className="section-header-line"/>
                            <h4 className="uppercase">Quid faciat laetas segetes quo sidere terram vertere Mycenas
                                ulmisque adiungere vites conveniat</h4>

                        </div>
                    </div>

                    <div className="container text-center">
                        <div className="row">
                            <a href="#" className="btn btn-lg md-button md-ink-ripple view-more paper-shadow"
                               aria-label="View more">
                                Quid faciat laetas
                            </a>
                        </div>
                    </div>
                </section>

                <section id="about" className="bg-gray">
                    <div className="container text-center">
                        <div className="row">
                            <h2 className="section-title">About</h2>
                            <hr className="section-header-line"/>
                            <h4 className="uppercase">Quid faciat laetas segetes quo sidere terram vertere Mycenas
                                ulmisque adiungere vites conveniat</h4>

                        </div>
                    </div>

                </section>

            </div>

        );
    }
});

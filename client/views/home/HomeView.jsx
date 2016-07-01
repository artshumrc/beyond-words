

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
          <section id="intro" className="cover fullscreen image-bg bg-dark ">

              <div className="background-image-holder less-blur blur">
                <img src="/images/column.jpg" alt="image" />
              </div>
              <div className="background-screen ">
              </div>

              <div className="container v-align-transform header-container">
                  <div className="row">

                      <div className="header-center text-center">

                          <h1>Quid faciat laetas segetes quo sidere terram</h1>

                          <h6 className="uppercase mb16">Vertere mycenas ulmisque adiungere vites conveniat quae curum <br/>boum qui cultus habendo sit pecori apibus quanta</h6>

                          <a className="btn btn-large md-button learn-more-button md-ink-ripple paper-shadow" href="#about" aria-label="Learn More">
                            <span>Learn More</span>
                            <div className="md-ripple-container"></div>

                          </a>


                      </div>


                  </div>

              </div>

          </section>

          <section id="schedule"  >
            <div className="container text-center">
              <div className="row">
                <h2 className="section-title">Schedule</h2>
                <hr className="section-header-line" />
                <h4 className="uppercase" >Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat</h4>

              </div>
            </div>

            <div className="container text-center">
              <div className="row">
                <a href="#" className="btn btn-lg md-button md-ink-ripple view-more paper-shadow" aria-label="View more">
                  Quid faciat laetas
                </a>
              </div>
            </div>
          </section>

          <section id="about" className="bg-gray" >
            <div className="container text-center">
              <div className="row">
                <h2 className="section-title">About</h2>
                <hr className="section-header-line" />
                <h4 className="uppercase" >Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat</h4>

              </div>
            </div>

          </section>

    </div>

    );
  }
});

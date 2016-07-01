

ComingSoonHomeView = React.createClass({

  componentDidMount() {

    /*
     * Init wow animations on homepage
     */
    var w;
    w = new WOW().init();

  },

  scrollToAbout(e){
    $("html, body").animate({ scrollTop: $('#about').height() - 100 }, 300);

    e.preventDefault();
  },


  render(){
      return (
        <div>
          <section id="intro" className="cover fullscreen image-bg bg-dark ">

              <div className="background-image-holder blur">
                <img src="/images/banner.jpg" alt="image" />
              </div>
              <div className="background-screen bw">
              </div>

              <div className="container v-align-transform header-container">
                  <div className="row">

                      <div className="header-center text-center">

                          <img className="header-logo-image" src="/images/beyond-words-logo-light.png"/>
                          <hr className="section-header-line" />

                          <h6 className="uppercase mb40">More information about the exhibition will be updated here soon.</h6>

                          <a
                            className="btn btn-large md-button learn-more-button md-ink-ripple paper-shadow md-primary" href="#about" aria-label="Learn More"
                            onClick={this.scrollToAbout}
                            onTouchTap={this.scrollToAbout}
                            >
                            <span>Participating Institutions</span>
                            <div className="md-ripple-container"></div>

                          </a>


                      </div>


                  </div>

              </div>

          </section>

          <section id="about" className="bg-blue" >
            <div className="container text-center">
              <div className="row">
                <div className="participating-institution">
                  <a href="//hcl.harvard.edu" target="_blank">
                    <h3>Manuscripts from Church & Cloister</h3>
                  </a>
                  <p>
                    <a href="//hcl.harvard.edu" target="_blank">
                      Houghton Library, Harvard University
                    </a>
                  </p>
                  <h6 className="uppercase">
                    September 12 - December 10
                  </h6>
                </div>

                <hr className="section-header-line" />
                <div className="participating-institution">
                  <a href="//www.bc.edu/sites/artmuseum/" target="_blank">

                    <h3>Manuscripts for Pleasure & Piety</h3>
                  </a>
                  <p>
                    <a href="//www.bc.edu/sites/artmuseum/" target="_blank">
                      McMullen Museum of Art, Boston College
                    </a>
                  </p>
                  <h6 className="uppercase">
                    September 12 - December 11
                  </h6>
                </div>

                <hr className="section-header-line" />
                <div className="participating-institution">
                  <a href="//www.gardnermuseum.org/home" target="_blank">
                    <h3>Italian Renaissance Books</h3>
                  </a>
                  <p>
                    <a href="//www.gardnermuseum.org/home" target="_blank">
                      Isabella Stewart Gardner Museum
                    </a>
                  </p>
                  <h6 className="uppercase">
                    September 22 - January 16
                  </h6>
                </div>

              </div>

            </div>

          </section>

    </div>

    );
  }
});

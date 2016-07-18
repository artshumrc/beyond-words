HomeCover = React.createClass({
    componentDidMount(){
        // Image Sliders

        $('.flexslider').flexslider({
            animation: "slide",
            directionNav: false,
            controlsContainer: '.slider-controls',
            manualControls: '.slider-controls .bw-exhibit'
        });
    },
    render(){
        var flexNext = function () {
            $('.flexslider').flexslider('next');
            return false;
        };
        var flexPrev = function () {
            $('.flexslider').flexslider('prev');
            return false;
        };
        return (
            <div>
                <section id="intro" className="image-bg bg-dark cover fullscreen">

                  <div className="background-image-holder blur flexslider">
                      <ul className="slides">
                          <li
                            className="beyond-words-cover-slide">
                              <div className="image-bg-slide"
                                   style={{backgroundImage: "url('/images/banner.jpg')"}}></div>
                               <div className="background-screen bw"></div>
                               <div className="bw-exhibit">
                                 <img className="cover-logo" src="/images/beyond-words-logo-light.png" />
                                  <hr></hr>
                                  <a className="btn btn-large md-button learn-more-button md-ink-ripple paper-shadow md-primary" href="#overview" aria-label="Learn More">
                                    <span>Learn More</span>
                                    <div className="md-ripple-container"></div>

                                  </a>

                              </div>
                          </li>
                          <li>
                              <div className="image-bg-slide"
                                   style={{backgroundImage: "url('/images/houghton_banner.jpg')"}}></div>
                               <div className="background-screen bw"></div>
                               <div className="bw-exhibit">
                                  <h3>
                                    <a href="#mss-from-church-and-cloister">Manuscripts from Church and Cloister</a>
                                  </h3>
                                  <hr></hr>
                                  <h4 className="thin">
                                    <a href="//hcl.harvard.edu/libraries/houghton/" className="thin" target="_blank">
                                      Houghton Library, Harvard University
                                    </a>
                                  </h4>
                                  <h5>September 12 - December 10</h5>

                                  <a className="btn btn-large md-button learn-more-button md-ink-ripple paper-shadow md-primary" href="#mss-from-church-and-cloister" aria-label="Learn More">
                                    <span>Learn More</span>
                                    <div className="md-ripple-container"></div>

                                  </a>

                              </div>
                          </li>
                          <li>
                              <div className="image-bg-slide"
                                   style={{backgroundImage: "url('/images/BC-Banner.jpg')"}}></div>
                               <div className="background-screen bw"></div>
                              <div className="bw-exhibit">
                                <h3>
                                  <a href="#mss-for-pleasure-and-piety">Manuscripts for Pleasure and Piety</a>
                                </h3>
                                <hr></hr>
                                <h4 className="thin">
                                  <a href="//www.bc.edu/sites/artmuseum/" className="thin" target="_blank">
                                    McMullen Museum of Art, Boston College
                                  </a>
                                </h4>
                                <h5>September 12 - December 11</h5>

                                <a className="btn btn-large md-button learn-more-button md-ink-ripple paper-shadow md-primary" href="#mss-for-pleasure-and-piety" aria-label="Learn More">
                                  <span>Learn More</span>
                                  <div className="md-ripple-container"></div>

                                </a>

                              </div>
                          </li>
                          <li>
                            <div className="image-bg-slide"
                               style={{backgroundImage: "url('/images/ISGM-banner.jpg')"}}></div>
                            <div className="background-screen bw"></div>
                            <div className="bw-exhibit">
                              <h3>
                                <a href="#italian-renaissance-books">Italian Renaissance Books</a>
                              </h3>
                              <hr></hr>
                              <h4 className="thin">
                                <a href="//www.gardnermuseum.org/collection/exhibitions" target="_blank">
                                  Isabella Stewart Gardner Museum
                                </a>
                              </h4>
                              <h5>
                                September 22 - January 16
                              </h5>

                              <a className="btn btn-large md-button learn-more-button md-ink-ripple paper-shadow md-primary" href="#italian-renaissance-books" aria-label="Learn More">
                                <span>Learn More</span>
                                <div className="md-ripple-container"></div>

                              </a>

                            </div>
                        </li>
                      </ul>
                  </div>


                  <div className="custom-navigation">
                      <a href="#" onClick={flexPrev} className="flex-prev"><i
                          className="mdi mdi-chevron-left"></i></a>
                      <a href="#" onClick={flexNext} className="flex-next"><i
                          className="mdi mdi-chevron-right"></i></a>
                  </div>
                </section>
            </div>
        )
    }
})

Home_Intro2 = React.createClass({
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
                            <li>
                                <div className="image-bg-slide"
                                     style={{backgroundImage: "url('/images/ISGM-banner.jpg')"}}></div>
                            </li>
                            <li>
                                <div className="image-bg-slide"
                                     style={{backgroundImage: "url('/images/banner.jpg')"}}></div>
                            </li>
                            <li>
                                <div className="image-bg-slide"
                                     style={{backgroundImage: "url('/images/BC-Banner.jpg')"}}></div>
                            </li>
                        </ul>
                    </div>

                    <div className="background-screen bw">
                    </div>


                    <div className="custom-navigation">
                        <a href="#" onClick={flexPrev} className="flex-prev"><i
                            className="glyphicon glyphicon-chevron-left"></i></a>
                        <a href="#" onClick={flexNext} className="flex-next"><i
                            className="glyphicon glyphicon-chevron-right"></i></a>
                    </div>
                    <div className="container header-container fullscreen flex-bottom slider-controls">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="bw-exhibit">
                                    <h3><a href="#">Manuscripts from Church and Cloister</a></h3>
                                    <h4 className="thin">September 12 - December 10</h4>
                                    <h5>Houghton Library, Harvard University
                                        <br/>(Cambridge, MA)</h5>
                                    <a href="http://hcl.harvard.edu/" className="thin" target="_blank">
                                        http://hcl.harvard.edu/<i className="glyphicon glyphicon-link"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="bw-exhibit">
                                    <h3><a href="#">Manuscripts for Pleasure and Piety</a></h3>
                                    <h4 className="thin">September 12 - December 11</h4>
                                    <h5>McMullen Museum of
                                        Art, Boston College
                                        <br/> (Chestnut Hill, MA)</h5>
                                    <a href="http://www.bc.edu/sites/artmuseum/" className="thin" target="_blank">
                                        http://www.bc.edu/sites/artmuseum/<i className="glyphicon glyphicon-link"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="bw-exhibit">
                                    <h3><a href="#">Italian Renaissance Books</a></h3>
                                    <h4 className="thin">September 22 - January 16</h4>
                                    <h5>Isabella Stewart Gardner Museum
                                        <br/>(Boston, MA)</h5>
                                    <a href="http://www.gardnermuseum.org/home" className="thin" target="_blank">
                                        http://www.gardnermuseum.org/home<i className="glyphicon glyphicon-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
})
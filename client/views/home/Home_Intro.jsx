Home_Intro = React.createClass({
    render(){
        return (
            <div>
                <section id="intro" className="image-bg bg-dark ">

                    <div className="background-image-holder blur">
                        <img src="/images/BookBG.jpg" alt="image"/>
                    </div>
                    <div className="background-screen bw">
                    </div>

                    <div className="container header-container">
                        <div className="row">
                            <div className="col-sm-7">
                                <div className="bw-exhibit">
                                    <h3><a href="#">Manuscripts from Church and Cloister</a></h3>
                                    <h4 className="thin">September 12 - December 10</h4>
                                    <h5><a href="http://hcl.harvard.edu/" className="thin">Houghton Library, Harvard University<br/> (Cambridge, MA)</a></h5>
                                </div>
                                <div className="bw-exhibit">
                                    <h3><a href="#">Manuscripts for Pleasure and Piety</a></h3>
                                    <h4 className="thin">September 12 - December 11</h4>
                                    <h5><a href="http://www.bc.edu/sites/artmuseum/" className="thin">McMullen Museum of Art, Boston College<br/> (Chestnut Hill, MA)</a></h5>
                                </div>
                                <div className="bw-exhibit">
                                    <h3><a href="#">Italian Renaissance Books</a></h3>
                                    <h4 className="thin">September 22 - January 16</h4>
                                    <h5><a href="http://www.gardnermuseum.org/home" className="thin">Isabella Stewart Gardner Museum<br/>(Boston, MA)</a></h5>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <img src="/images/BannerSQ.jpg" className="bw-intro-image"
                                     alt="Beyond Words - Woman holding book"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="bw-curatorial-team">
                                    <h3>Curatorial Team</h3>
                                    <p>Jeffrey Hamburger, Kuno Francke Professor of German Art & Culture, Harvard
                                        University</p>
                                    <p>William P. Stoneman, Curator of Early Books and Manuscripts, Houghton Library,
                                        Harvard
                                        University</p>
                                    <p>Anne-Marie Eze, Associate Curator, Isabella Stewart Gardner Museum</p>
                                    <p>Lisa Fagin Davis, Executive Director, Medieval Academy of America</p>
                                    <p>Nancy Netzer, Director, McMullen Museum of Art, Boston College</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
})
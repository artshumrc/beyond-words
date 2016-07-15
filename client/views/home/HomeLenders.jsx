import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

HomeLenders = React.createClass({
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },
    render()
    {
        return (
            <div>
                <section id="lenders">
                  <div className="container">
                       <div className="row">
                         <h2>Lenders</h2>

                          <a href="//www.armenianmuseum.org" target="_blank">
                            Armenian Museum and Library of America
                          </a>
                          <a href="//www.bostonathenaeum.org" target="_blank">
                            Boston Athenaeum
                          </a>
                          <a href="//libguides.bc.edu/Burns" target="_blank">
                            John J. Burns Library, Boston College
                          </a>
                          <a href="//www.bc.edu/sites/artmuseum/" target="_blank">
                            McMullen Museum of Art, Boston College
                          </a>
                          <a href="//www.bu.edu/sthlibrary/" target="_blank">
                            School of Theology Library, Boston University
                          </a>
                          <a href="//www.mfa.org" target="_blank">
                            Museum of Fine Arts, Boston
                          </a>
                          <a href="//www.bpl.org/research/rb/index.htm" target="_blank">
                            Rare Books and Manuscripts Department, Boston Public Library
                          </a>
                          <a href="//lts.brandeis.edu/research/archives-speccoll/" target="_blank">
                            University Archives & Special Collections, Brandeis University
                          </a>
                          <a href="//hls.harvard.edu/library/historical-special-collections/" target="_blank">
                            Historical & Special Collections, Harvard University Law School
                          </a>
                          <a href="//www.countway.harvard.edu" target="_blank">
                            Countway Library, Harvard University Medical School
                          </a>
                          <a href="//www.harvardartmuseums.org" target="_blank">
                            Harvard University/Fogg Art Museum
                          </a>
                          <a href="//hcl.harvard.edu/libraries/houghton/" target="_blank">
                            Houghton Library, Harvard University
                          </a>
                          <a href="//library.hds.harvard.edu" target="_blank">
                            Andover-Harvard Theological Library, Harvard Univ. Divinity School
                          </a>
                          <a href="//www.library.hbs.edu" target="_blank">
                            Baker Library, Harvard University Business School
                          </a>
                          <a href="//www.gardnermuseum.org/home" target="_blank">
                            Isabella Stewart Gardner Museum
                          </a>
                          <a href="//libraries.mit.edu/archives/" target="_blank">
                            Archives & Special Collections, Massachusetts Institute of Technology
                          </a>
                          <a href="//library.northeastern.edu/archives-special-collections" target="_blank">
                            Snell Library, Northeastern University
                          </a>
                          <a href="//researchguides.library.tufts.edu/specialcollections" target="_blank">
                            Tisch Library Special Collections, Tufts University
                          </a>
                          <a href="//www.wellesley.edu/lts/collections/speccoll" target="_blank">
                            Archives & Special Collections, Wellesley College
                          </a>

                       </div>
                   </div>
                </section>
            </div>
        )
    }
})
;

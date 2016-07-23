import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

HomeOverview = React.createClass({
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
                <section id="overview">
                  <div className="container wow fadeIn" >
                       <div className="row">
                           <div className="col-sm-8 col-sm-offset-2">
                             <img src="/images/DropCapB.png" alt="B" className="pull-left drop-cap"/>
                             <p>
                                 EYOND WORDS: ILLUMINATED MANUSCRIPTS IN BOSTON COLLECTIONS is the first
                                 exhibition to showcase highlights of illuminated manuscripts in the Boston
                                 area. An ambitious collaborative project, Beyond Words is notable for the
                                 size of its curatorial team, the number of lending institutions, and a
                                 multi-venue display. The exhibition presents more than 260 outstanding
                                 manuscripts and printed books from nineteen Boston-area collections, dating
                                 from the ninth to the seventeenth centuries. The exhibit is supplemented by
                                 an extensive catalog, a three-day symposium, and public programming.
                                 Explore the website for additional information on Beyond Words.
                             </p>
                           </div>

                       </div>

                       <div className="row curatorial-team-row">
                           <div className="col-sm-8 col-sm-offset-2 text-center">

                             <br/>
                             <br/>
                             <h3>Beyond Words curatorial team</h3>

                            <p><em>
                               Jeffrey Hamburger, Harvard University
                            </em></p>
                            <p><em>
                              William P. Stoneman, Houghton Library, Harvard University
                            </em></p>
                            <p><em>
                                Anne-Marie Eze, Isabella Stewart Gardner Museum
                            </em></p>
                            <p><em>
                                Lisa Fagin Davis, Medieval Academy of America
                            </em></p>
                            <p><em>
                                Nancy Netzer, McMullen Museum of Art, Boston College
                            </em></p>

                           </div>

                       </div>
                   </div>
                </section>
            </div>
        )
    }
})
;

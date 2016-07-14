import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

Home_Overview = React.createClass({
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
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <Card>
                                    <CardText>
                                        <img src="/images/DropCapB.png" alt="B" className="pull-left drop-cap"/>
                                        <p>
                                            EYOND WORDS: ILLUMINATED MANUSCRIPTS IN BOSTON COLLECTIONS is the first
                                            exhibition to showcase highlights of illuminated manuscripts in the Boston
                                            area. An ambitious collaborative project, Beyond Words is notable for the
                                            size of its curatorial team, the number of lending institutions, and a
                                            multi-venue display. The exhibition presents more than 260 outstanding
                                            manuscripts and printed books from nineteen Boston-area collections, dating
                                            from the ninth to the seventeenth centuries. The exhibit is supplemented by
                                            an extensive catalogue, a three-day symposium, and public programming.
                                            Explore the website for additional information on Beyond Words.
                                        </p>
                                    </CardText>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
})
;
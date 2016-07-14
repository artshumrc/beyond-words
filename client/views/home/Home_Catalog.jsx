import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

Home_Catalog = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    },
    render(){
        return (
            <div>
                <section id="catalog">
                    <div className="container">
                        <h2 className="text-center">Catalog</h2>
                        <div className="row flex-center">
                            <div className="col-sm-3">
                                <img src="/images/catalog.png" alt="Beyond Words Catalog"/>
                                <p>Distributed for McMullen Museum of Art, Boston College</p>
                                <p>650 pages | 325 color plates | 9 x 11 | © 2016</p>
                                <p>ISBN: 9781892850263</p>
                                {/*todo: why doesn't raised button work here?*/}
                                <FlatButton label="Purchase from Publisher" href="http://www.press.uchicago.edu/ucp/books/book/distributed/B/bo25077855.html"/>
                            </div>
                            <div className="col-sm-offset-1 col-sm-8">
                                <p>The catalogue Beyond Words features illuminated manuscripts from nineteen Boston-area
                                    institutions, this catalog provides a sweeping overview of the history of the book
                                    in the Middle Ages and Renaissance, as well as a guide to its production,
                                    illumination, functions, and readership. Entries by eighty-five international
                                    experts document, discuss, and reproduce more than two hundred and sixty manuscripts
                                    and early printed books, many of them little known before now. Beyond Words also
                                    explores the history of collecting such books in Boston, an uncharted chapter in the
                                    history of American taste.</p>
                                <p>Of broad appeal to scholars and amateur enthusiasts alike, this catalog documents one
                                    of the most ambitious exhibitions of medieval and Renaissance manuscripts ever to
                                    take place in North America.</p>
                                <p>Major support for the publication of the catalogue was provided by Daniel and Joanna
                                    S. Rose with additional support from the Rose Marrow Fund.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});
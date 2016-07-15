import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

HomeNarrative = React.createClass({
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
                <section id="narrative" className="">
                    <div className="narrative-exhibit wow fadeIn">
                      <h4>Collecting in Boston</h4>
                      <p>
                        In addition to focusing on the Middle Ages and Renaissance, Beyond Words also presents an opportunity to examine the history of collecting in Boston. Among the first medieval manuscripts to reach American shores can be found in Boston collections and elsewhere in New England. Famous American art-lovers such as Isabella Stewart Gardner, Charles Sumner, Charles Eliot Norton, Denman Waldo Ross and Bernard Berenson played significant roles in shaping local book collections, as did foreigners such as Sir Sydney Cockerell. To chart these collectors’ activities is to map an important chapter in the history of American taste and cultural ambition. In this context, the detailed analysis of provenance history serves more than antiquarian interest; it contributes to a larger history in the accumulation of cultural capital and of libraries, museums and universities in the United States. The history of manuscript collecting in the United States is important in terms of establishing the provenance of distinguished works of art and literature. It also, however, has wider significance in terms of documenting broader patterns and shifts of taste during a formative period that saw many of the city’s leading cultural institutions take shape.

                      </p>
                      <p>
                        Given Boston’s importance in the nation’s history and culture, the history of manuscript collecting in the city provides in microcosm a mirror of the much larger history of taste for things medieval in what, at the time, remained a largely Protestant nation. The material hidden in Boston-area collections adds a new and in some ways surprising chapter to this story.

                      </p>
                      <br></br>
                      <br></br>
                      <br></br>
                    </div>

                    <div className="narrative-exhibit wow fadeIn">
                      <h4 id="mss-from-church-and-cloister">Manuscripts from Church & Cloister (Houghton Library, Harvard University)</h4>
                      <h5>
                        <em>
                          September 12–December 10, 2016
                        </em>
                      </h5>
                      <p>
                        In the Houghton Library’s portion of the exhibit, the emphasis is  on the centrality of books to monastic life. Male and female monasticism revolved around religion, but at its heart was a cult of the book: not just the bible, all books. Monastic scriptoria guaranteed the survival and transmission of classical literature and learning. Reverence felt for texts and their authors is manifest in the beauty of the books that were crafted in monasteries and convents. Manuscripts on display at the Houghton Library highlight the scriptorium as both a space for the production of manuscripts and the human collective that produced them.
                      </p>
                      <p>
                        Major support for the Houghton Library portion of the exhibition has been provided by the National Endowment for the Humanities, the Edison & Newman Exhibition & Program Fund, the John & Ann Clarkeson Library Fund and the Bayard Livingston & Kate Gray Kilgour Fund.
                      </p>
                      <br></br>
                      <br></br>
                      <br></br>

                    </div>

                    <div className="narrative-exhibit wow fadeIn">
                      <h4 id="mss-for-pleasure-and-piety">Manuscripts for Pleasure & Piety (McMullen Museum, Boston College)</h4>
                      <h5>
                        <em>
                        September 12–December 11, 2016
                        </em>
                      </h5>
                      <p>
                        At the McMullen Museum, the visitor’s attention shifts to lay readership and the place of books in medieval society. The High Middle Ages witnessed an affirmation of the visual and, with it, empirical experience. There was an explosion of illumination. Various types of images, whether in prayer or professional books, attest to the newfound importance of visual demonstration in matters of faith and science alike.
                      </p>
                      <p>
                        Major support for the McMullen portion of the exhibition has been provided by the National Endowment for the Humanities, Leslie and Peter Ciampi, and the Patrons of the McMullen Museum. The accompanying catalog has been underwritten by Daniel and Joanna S. Rose with additional support from the Rose Marrow Fund.
                      </p>
                      <br></br>
                      <br></br>
                      <br></br>

                    </div>
                    <div className="narrative-exhibit wow fadeIn">

                      <h4 id="italian-renaissance-books">Italian Renaissance Books: Isabella Stewart Gardner Museum</h4>
                      <h5>
                        <em>
                        September 22, 2016–January 16, 2017
                        </em>
                      </h5>
                      <p>
                        The Gardner Museum explores the birth of the modern book in fifteenth-century Italy, which was the genesis of the radical shift from manuscript to print to digital culture that evolved over the last 500 years. Against the backdrop of the present Digital Age and current debates over the relevance of the book, the show invites visitors to contemplate one era of revolution in the time of another. The humanist book is revealed as an inexhaustible source of inspiration for artists and the foremost nexus of intellectual and visual culture in the Italian Renaissance.
                      </p>
                      <p>
                        At the Isabella Stewart Gardner Museum, exhibition support is provided by the Gladys Krieble Delmas Foundation, the Robert Lehman Foundation, the Andrew W. Mellon Foundation and the National Endowment for the Humanities.  This exhibition also is supported in part by the Massachusetts Cultural Council, which receives support from the State of Massachusetts and the National Endowment for the Humanities, as well as by the Boston Cultural Council, a local agency which is funded by the Massachusetts Cultural Council,  and administrated by the Mayor's Office of Arts and Culture. Media Sponsor:  The Boston Globe.  Any views, findings, conclusions, or recommendations expressed in this exhibition do not necessarily represent those of the National Endowment for the Humanities.
                      </p>
                  </div>
                </section>
            </div>
        )
    }
})
;

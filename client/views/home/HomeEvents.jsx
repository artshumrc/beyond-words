import {Tabs, Tab} from 'material-ui/Tabs';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import moment from 'moment-timezone';


HomeEvents = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData(){
        return {events: Events.find({}, {sort:{date:1}}).fetch()};
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    },
    linkToEventOrScroll(e) {
      var $target = $(e.target);

      if(!$target.hasClass("event-link")){
        $target = $target.parents(".event-link");
      }

      if($target.prop("href").indexOf(window.location.host) >= 0){

        var scroll_elem_id = "#";

        scroll_elem_id += $target.prop("href").split("#")[1]

        $("html, body").animate({ scrollTop: $(scroll_elem_id).offset().top - 100 }, 300);

        e.preventDefault();

      }


    },
    render(){

      var that = this;

      var styles = {
        contentContainerStyle : {
          background: "#fafafa",
          padding: "90px 60px"

        },
        inkBarStyle : {
          background: "#C5CAE9"

        },
        tabItemContainerStyle : {
          background: "#eee"

        },
        tab : {
          color:"#222",
          fontFamily:"Hind"
        }
      }

        return (
            <div>
                <section id="events">
                    <div className="container">
                        <h2 className="events-title text-center">Events</h2>
                        <h5 className="thin text-center">
                          <em>
                            Support for Beyond Words public programming has been provided by the Samuel H. Kress Foundation.
                          </em>
                        </h5>
                        <ul className="events-list">
                            {this.data.events.map(function (event, i) {
                                return <li
                                  key={i}
                                  className="event-item wow fadeIn"
                                  >
                                    <div className="event-calendar-date">
                                        <h6 className="event-month">{moment.utc(event.date).format('MMMM')}</h6>
                                        <h3 className="event-day thin">{moment.utc(event.date).format('D')}</h3>
                                        <h6 className="event-weekday">{moment.utc(event.date).format('dddd')}</h6>
                                    </div>
                                    <div className="event-info">
                                      <a
                                        className="event-link"
                                        href={event.link}
                                        target="_blank"
                                        onClick={that.linkToEventOrScroll}
                                        >
                                        <h3 className="event-title">{event.title}</h3>
                                      </a>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </section>
                <section id="symposium">
                  <h3 className="symposium-title">Symposium: 3-5 November 2016</h3>
                  <p>
                    Major support for the Beyond Words symposium has been provided by
                    The Medieval Studies Committee of Harvard University and the Boston College Institute for Liberal Arts, with additional support from Christie's and the International Center of Medieval Art.
                  </p>

                  <Tabs
                    className="program-tabs"
                    contentContainerStyle={styles.contentContainerStyle}
                    inkBarStyle={styles.inkBarStyle}
                    tabItemContainerStyle={styles.tabItemContainerStyle}
                    >

                    <Tab
                      label="3 Nov, McMullen"
                      style={styles.tab}
                      >
                      <h4 className="symposium-day">
                        Thursday, 3 November, McMullen Museum, Boston College
                      </h4>
                      <br></br>
                      <h5>
                      Jessica Berenbeim (Magdalen College, University of Oxford), "Historical Distance and Livy's Artistic Afterlife"
                      </h5>
                      <p>
                         This paper will look at the visual reception of Livy's Roman History, with special attention to Houghton Library MS Richardson 32 and its relatives, as a point of departure for thinking about late-medieval historiography and problems of historical distance.
                       </p>

                       <h5>
                        Alixe Bovey (Courtauld Institute of Art, London), “Kings as Kin: Picturing the English Monarchy in Houghton Library MS Typ 11 and related Genealogical Roll Chronicles”
                      </h5>
                      <p>
                        The vogue for illustrated genealogies of  English monarchs in the decades around 1300 can be understood as part of a rising appetite for vernacular history amongst the gentry and aristocracy, who seem to have appreciated the combination of diagrammatic account of the royal lineage enlivened by pithy, moralistic texts describing each reign. Using Houghton Library MS Typ 11 as a central example, this paper will argue that additionally these genealogies are part of a wider fascination with kinship and consanguinity, which manifested itself in contemporary visual culture in a variety of contexts.
                      </p>

                      <h5>
                        Sonja Drimmer (University of Massachusetts, Amherst), "The Shapes of History in Late Medieval England"
                      </h5>
                      <p>
                        Does history have a shape? This paper will examine two manuscripts, Houghton Library MSS Typ 11 and Richardson 35, which relate the history of England in the format of a roll and a codex, respectively.  Focusing on these formats and other features that predicate the use of these objects, this paper discusses the ways in which each embodies a different epistemology and aspires to shape not only the perception of history, but its production as well.
                      </p>

                      <h5>
                        Nicholas Herman (Schoenberg Institute for Manuscript Studies, University of Pennsylvania), “‘Richement et sumptueusement historié’: Bourdichon’s Isabella Stewart Gardner Hours in Its Artistic Context”
                      </h5>
                      <p>
                        Jean Bourdichon (1457–1521) was among the most accomplished court artists of his time and was directly employed by four successive French kings. However, most of his work, including the sumptuous illuminations in a book of hours preserved at the Isabella Stewart Gardner Museum, MS 6.T.1, remains undocumented and unsigned. This paper will connect the highly accomplished Boston Hours with the artist’s other commissions of the 1510s, and place the refined miniatures within a broader artistic context that melded indigenous traditions with novelties from beyond the Alps.
                      </p>
                      <h5>
                        Scot McKendrick (British Library, London), “Vicarious Entertainment for the Mature Aristocrat and Bibliophile Louis of Gruuthuse (Houghton Library MSS Typ 129 and 130)”
                      </h5>
                      <p>
                        During the late Middle Ages aristocratic readers were fascinated with the noble art of hunting and chivalric ideals. Two manuscripts in the Houghton Library illustrate the significant investment that nobles made into their books on such subjects; they also exemplify the talented response of contemporary scribes and illuminators. The present paper explores the specific context in which they were made, the motivations of the patron and the means by which the makers of the books fulfilled his aspirations.
                      </p>
                      <h5>
                         Christine Seidel (Staatliche Museen zu Berlin, Stiftung Preußischer Kulturbesitz, Berlin), “Picturing and Collecting Classical Texts in 15th century France”
                      </h5>
                      <p>
                        This paper will examine the Houghton Library Virgil (MS Richardson 38) in terms of layout, illustration and origin and relate it to broader questions concerning the ownership and appearance of classical texts copied in France between c. 1440 and 1500, as well as their visual transformation in the course of the 15th century.
                      </p>
                    </Tab>

                    <Tab
                      label="4 Nov, ISGM"
                      style={styles.tab}
                      >
                      <h4 className="symposium-day">Friday, 4 November, Isabella Stewart Gardner Museum</h4>
                      <br></br>
                      <h5>

                        Federica Toniolo (Università degli Studi di Padova), “Court Patronage in Renaissance Italy: Illuminated Manuscripts as Diplomatic Gifts”
                      </h5>
                      <p>
                        This paper focusses on Renaissance Italian illuminated manuscripts made as luxury goods to be shown, or given as gifts by authors or princes.  In the first case authors dedicated their works to powerful rulers to gain their protection; in the second case princes used illuminated manuscripts to strengthen their alliances. The choice of the texts and their illustrations was strictly related with the cultural context of the court and the tastes of the prince. This paper consider as a case study Ferrara in the XV century analyzing the manuscripts Houghton Library MSS  Typ 226 and Typ 227 in the wider context of the monumental arts.
                      </p>
                      <h5>
                        Francesca Manzari ("Sapienza" Università di Roma), “The Patronage and Artists of the Calderini Pontifical (Houghton Library MS Typ 1): The Revival of Manuscript Illumination in Rome during the Schism and the Flowering of Illuminators in Florence during the Council”

                      </h5>
                      <p>
                        The creation of the Calderini Pontifical's spectacular illustrative programme has only recently been connected with a long-forgotten phase of illumination produced in Rome during the Great Western Schism. This paper will examine the artists working in the manuscript's different campaigns of decoration and it will provide a context for its patronage and original destination. The Pontifical's complex provenance history will be discussed in the perspective of the practices in collecting Italian illumination documented over the centuries.
                      </p>
                      <h5>
                        Christine Sciacca (J. Paul Getty Museum, Los Angeles), “A Visionary Artist and a Benedictine Worldview: The San Sisto Choir Books”
                      </h5>
                      <p>
                        In the late fifteenth century, the Benedictine abbey of San Sisto in Piacenza commissioned an elaborate new set of fourteen illuminated choir books, now dispersed among public and private collections in the United States and Europe (including Boston Public Library, MSS pf Med 97 and 120). The Benedictine patrons of the manuscripts are depicted numerous times throughout the volumes; this discussion explores how and where they appear and their significance for the books’ use. In addition, a special focus of this paper will be the striking illustrations by one of the artists responsible for the books’ illuminations, Francesco da Castello, and his treatment of the iconography that held particular meaning for the San Sisto monks.
                      </p>
                      <h5>
                        Lilian Armstrong (Wellesley College, Wellesley), “Venetian Choirbooks in the Early Quattrocento: Two Graduals for a Benedictine Convent”
                      </h5>
                      <p>
                        The Durant Gradual at Wellesley College contains heretofore unpublished historiated initials for the Temporale chants; dated around 1430, they can be attributed to a miniaturist known as the Donato Master. Another gradual in the British Library has recently been identified as its counterpart, a Sanctorale illuminated by the same miniaturist, and sharing its provenance.  The two graduals and related liturgical manuscripts enable further evaluation of choirbooks produced in Venice in the early Quattrocento.
                      </p>
                      <h5>
                        Helena Szépe (University of South Florida, Tampa),  “The Purposes of Illumination in Venetian Legal Statutes and Documents”
                      </h5>
                      <p>
                        The privilege of being a patrician in the Venetian Republic required the duty of participation in government, and service to the state when elected as an official. Prominent patrician families, therefore, built up substantial reference collections of relevant legal statutes and records of commissions of office. This paper examines the roles of painting in such documents to frame reception of the texts, and to memorialize the recipients, drawing from manuscripts in Boston-area collections, including the following in the exhibition: Commission to Vincenzo Gritti as lieutenant of Udine, 1546 (Gardner 2.a.2.1); Commission to Girolamo Morosini as Captain of Brescia, 1547 (Gardner, 2.c.2.2); Statuta veneta, c. 1346 (Houghton Library MS Typ.140); Commission to Gasparo Molin as procurator de citra, 1526, (Houghton Library MS Typ 543); Commission to Lorenzo Bembo as captain of Paphos, 1558 (Houghton Library MS Typ 330); and Commission leaf to Daniele Dolfin as Podesta and captain of Treviso, 1596, (Wellesley College Davis Museum).
                      </p>
                      <h5>
                        Ada Labriola (Independent Scholar, Florence), "The Florentine Presence at the Gonzaga Court in Mantua on the Eve of the Renaissance: Houghton Library MS Typ 329"
                      </h5>
                      <p>
                        Niccolò da Ferrara's Polistorio was made for Francesco Gonzaga, signore of Mantua, at the end of the 14th Century. In this paper Polistorio's illuminations, traditionally referred to a North-Italian artist, will be recognized as the product of a Florentine workshop active in Mantua. They will be attributed to Don Simone Camaldolese, one of the most important illuminators in 14th Century Tuscany. The manuscript will be discussed in the context of the cultural relations between Florence and Mantua on the Eve of the Renaissance.
                      </p>
                    </Tab>

                    <Tab
                      label="5 Nov, Houghton"
                      style={styles.tab}
                      >
                      <h4 className="symposium-day">Saturday, 5 November, Houghton Library, Harvard University</h4>
                      <br></br>
                      <h5>
                        Brigitte Bedos-Rezak (New York University), “Writing Culture and Society in Medieval Yorkshire: The Cistercian Charters of Sawley Abbey at Houghton Library”
                      </h5>
                      <p>
                        Houghton Library MS Lat 421 consists of some fifteen sealed charters (mid-13th  to 14th century) that document economic and legal interactions between the Cistercian abbey of Sawley (founded in 1147-8) and its local benefactors. Most of these charters were produced as indentures (chirographs) and an initial comparison with charters entered in the abbey’s cartulary (mid-14th, British Museum MS Harley 112) raises the question of the location of the deeds prior to the abbey’s dissolution (1536). Were these the halves kept in the archives of the abbey or were they the portions distributed to the other party in the transaction? Though a struggling institution, Sawley abbey boasted a library, which contained the earliest mappa mundi produced in England (in the late 12th to early 13th century, possibly at Sawley, but more likely at Durham, now at Corpus Christi College, Cambridge, MS. 66). One of Sawley’s abbots (between 1223-1234), Stephen of Sawley (or of Easton) composed devotional treatises addressed to the Virgin Mary. While situating the Houghton documents within the broader scribal and archival activities of Sawley, this paper will also examine the place of writing in the abbey’s activities, and specifically the ways in which writing was strategically deployed to maintain its networks of patrons, and to promote its culture, welfare, status, and identity.
                      </p>
                      <h5>
                        Peter Kidd (Freelance Researcher, London), "Leaves and Cuttings from the Collection of Jack Ball, Arms Dealer and Fraudster"
                      </h5>
                      <p>
                        Five illuminated leaves, now at Houghton Library and the Boston Public Library (MSS Typ 704.1(12-13) and bp 205-207, respectively), have recently been recognized as coming from an early 20th-century English collection, formed by a shady character who was successively a chauffeur, Captain in the Royal Air Force, bankrupt, forger of Irish antiquities, international arms dealer, and adulterer. This paper will consider his now-dispersed collection of leaves and cuttings, and begin the process of tracing their present whereabouts.
                      </p>
                      <h5>
                        Erik Kwakkel (Centre for the Arts in Society, Leiden University), "Variations on a Theme: Paleographical Diversity in the Twelfth Century"
                      </h5>
                      <p>
                        Focusing on twelfth-century book script this paper examines to what extent scribes varied the execution of letterforms, and why they did. Explored will be the influence of time and geographical space, the scriptorium in which an individual was trained, and the monastic order the scribe was part of.  The discussion will include Houghton Library MSS Typ 204 and 703 to show regional variety, and Boston Public Library f.Med.75 and f.Med.15 to show the transition from Late Caroline to Early Gothic.
                      </p>
                      <h5>
                        Kate Rudy (University of St. Andrews, Fife), "Convents in Competition: Boston Public Library q.Med. 86 in the Context of Delft Manuscript Production"
                      </h5>
                      <p>
                        In the fifteenth century Delft had at least 12 female convents, several of which made manuscripts. The Augustine canonesses of St Agnes wrote and richly illuminated manuscripts, most famously the Fagel Missal (Dublin, TCD), executed in 1459 and 1460. In 1454 or 1457 a convent of Franciscan tertiaries moved in across the street and began writing and illuminating vernacular manuscripts with great speed and efficiency, and presumably at a lower price than their Latin-writing neighbors. They offered manuscripts with various degrees of finish, which could be completed by adding professionally made miniatures on single leaves. This paper will place Boston Public Library q.Med. 86 in its context of production, based on a comparative analysis of its calendar, script, and decoration. In so doing, the competitive practices that shaped manuscript production in Delft are also considered, practices that streamlined production while at the same time affording greater individuation of the finished book.
                      </p>
                      <h5>
                        Patricia Stirnemann (Institut de Recherche et d’Histoire des Textes, Centre National de la Recherche Scientifique, Paris), “Gilbert de la Porrée and Chartres”
                      </h5>
                      <p>
                        This paper will start by examining Houghton Library MS Typ 277 and explore the transmission of the works of Gilbert de la Porrée and the role of Chartres.
                      </p>
                      <h5>
                        Anne D. Hedeman (University of Kansas, Lawrence), “Rereading Boccaccio in Etienne Chevalier ‘s Decameron (Houghton Library MS Richardson 31)”
                      </h5>
                      <p>
                        This paper will analyze the blend of traditional and innovative illuminations in Etienne Chevalier’s Decameron within the frameworks of Decameron illustration, the  artistic production of the Dunois Master, and books owned by Etienne Chevalier.

                      </p>
                    </Tab>
                  </Tabs>
                  <a className="btn btn-large md-button registration-button md-ink-ripple paper-shadow" href="#" aria-label="Learn More">
                    <span>Registration (Coming Soon)</span>
                    <div className="md-ripple-container"></div>

                  </a>
                </section>
            </div>
        )
    }

});

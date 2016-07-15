import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


Footer = React.createClass({

    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    },


    render(){

        let date = new Date();
        let year = date.getFullYear();

        let styles = {
            circleButton: {
                width: "auto",
                height: "auto",
            },
            circleButtonIcon: {
                color: "#ffffff",

            }
        };
        return (
            <div>
                <div className="pre-footer">

                </div>
                <footer className="bg-dark">
                    <div className="container">
                        <div className="row ">
                            <div className="col-sm-12 text-center">
                                <img className="logo footer-logo" src="/images/beyond-words-logo-light.png"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <div className="footer-nav">
                                    <FlatButton
                                        linkButton={true}
                                        label="HOME"
                                        href="/"
                                    />
                                    <FlatButton
                                        linkButton={true}
                                        label="ABOUT"
                                        href="#about"
                                    />
                                    <FlatButton
                                        style={styles.flatButton}
                                        linkButton={true}
                                        label="HOUGHTON"
                                        target="_blank"
                                        href="//hcl.harvard.edu/libraries/houghton"
                                    />
                                    <FlatButton
                                        style={styles.flatButton}
                                        linkButton={true}
                                        label="MCMULLEN"
                                        target="_blank"
                                        href="//www.bc.edu/sites/artmuseum/"
                                    />
                                    <FlatButton
                                        style={styles.flatButton}
                                        linkButton={true}
                                        label="GARDNER"
                                        target="_blank"
                                        href="//www.gardnermuseum.org/collection/exhibitions"
                                    />
                                  <IconButton
                                            style={styles.circleButton}
                                            iconStyle={styles.circleButtonIcon}
                                            linkButton={true}
                                            target="_blank"
                                            href="http://twitter.com/@BeyondWords2016"
                                            iconClassName="mdi mdi-twitter"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <span className="copyright-information fade-1-4">Copyright of the Beyond Words Exhibition, {year}.</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    }
});

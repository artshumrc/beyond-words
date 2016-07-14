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
        var twitterIcon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <g id="icomoon-ignore"> </g> <path fill="#ffffff" d="M512,113.2c-18.8,8.4-39.1,14-60.3,16.5c21.7-13,38.3-33.6,46.2-58.1c-20.301,12-42.801,20.8-66.7,25.5C412,76.7,384.7,64,354.5,64c-58,0-105,47-105,105c0,8.2,0.9,16.2,2.7,23.9c-87.3-4.4-164.7-46.2-216.5-109.8c-9,15.5-14.2,33.6-14.2,52.8c0,36.4,18.5,68.6,46.7,87.4c-17.2-0.5-33.4-5.3-47.6-13.1c0,0.4,0,0.9,0,1.3c0,50.9,36.2,93.4,84.3,103c-8.8,2.4-18.1,3.7-27.7,3.7c-6.8,0-13.3-0.7-19.8-1.9c13.4,41.7,52.2,72.101,98.1,73c-36,28.2-81.2,45-130.5,45c-8.5,0-16.8-0.5-25.1-1.5C46.5,462.7,101.7,480,161,480c193.2,0,298.9-160.1,298.9-298.9c0-4.6-0.101-9.1-0.301-13.6C480.1,152.8,497.9,134.3,512,113.2z"/> </svg>';
        return (
            <div>
                <footer className="bg-dark">
                    <div className="container">
                        <div className="row flex-center">
                            <div className="col-sm-4">
                                <a href="http://neh.gov"><img className="logo"
                                                              src="/images/neh_logo_horizontal_reverse.png"/></a>
                            </div>
                            <div className="col-sm-4">
                                <img className="logo" src="/images/logo-white.png"/>
                            </div>
                            <div className="col-sm-4">
                                <h5>
                                    <div className="twitter-icon" dangerouslySetInnerHTML={{__html: twitterIcon}}/>
                                    Follow us on Twitter
                                </h5>
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
                                        href="//www.gardnermuseum.org/home"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <ul className="list-inline social-list mb0">
                                    <li>
                                        <IconButton
                                            style={styles.circleButton}
                                            iconStyle={styles.circleButtonIcon}
                                            linkButton={true}
                                            href="http://facebook.com/"
                                            iconClassName="mdi mdi-facebook"
                                        />
                                    </li>
                                    <li>
                                        <IconButton
                                            style={styles.circleButton}
                                            iconStyle={styles.circleButtonIcon}
                                            linkButton={true}
                                            href="http://twitter.com/"
                                            iconClassName="mdi mdi-twitter"
                                        />
                                    </li>
                                    <li>
                                        <IconButton
                                            style={styles.circleButton}
                                            iconStyle={styles.circleButtonIcon}
                                            linkButton={true}
                                            href="http://plus.google.com/"
                                            iconClassName="mdi mdi-google-plus"
                                        />
                                    </li>
                                </ul>
                                <span
                                    className="copyright-information fade-1-4">Copyright of the Beyond Words Exhibition, {year}.</span>

                            </div>
                        </div>
                </footer>
            </div>
    )
    }
    Footer.childContextTypes = {
        muiTheme: React.PropTypes.object.isRequired,
    };

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


Footer = React.createClass({

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  },


  render(){

		let date = new Date();
		let year = date.getFullYear();

    let styles = {
      circleButton : {
        width: "auto",
        height: "auto",
      },
      circleButtonIcon : {
        color: "#ffffff",

      }
    }

    return (
			<footer className="bg-dark">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-8 col-md-offset-2 col-sm-9 col-sm-offset-1 text-center">
		          <h3 className="logo">Beyond Words</h3>
		          <div className="footer-nav">
                <FlatButton
                  linkButton={true}
                  label="HOME"
                  href="/"
                  />
                <FlatButton
                  linkButton={true}
                  label="ABOUT"
                  href="/about"
                  />
                <FlatButton
                  linkButton={true}
                  label="HOUGHTON LIBRARY"
                  href="//hcl.harvard.edu/"
                  target="_blank"

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
		          <span className="copyright-information fade-1-4">Copyright the Beyond Words, {year}.  All of the media presented on this site are available through the Creative Commons Attribution 4.0 International, Free Culture License.</span>

		        </div>
					</div>
		    </div>
		  </footer>
		);
	}
});

Footer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

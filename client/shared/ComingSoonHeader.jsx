
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

ComingSoonHeader = React.createClass({

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  },

  getInitialState(){
    return {
      leftMenuOpen : false
    };
  },

  toggleLeftMenu(){
    this.setState({
      leftMenuOpen : !this.state.leftMenuOpen
    });
  },

  closeLeftMenu(){
    this.setState({
      leftMenuOpen : false
    });
  },

  scrollToAbout(e){
    $("html, body").animate({ scrollTop: $('#about').height() - 100 }, 300);

    e.preventDefault();
  },

  render(){

    let styles = {
      flatButton : {
        width: "auto",
        minWidth: "none",
        height: "55px",
        padding: "10px 5px"
      },
      flatIconButton : {
        padding: "10px 20px",
        width: "auto",
        minWidth: "none",
        height: "55px",

      }

    };


    return (
    <div>
      <LeftMenu
        open={this.state.leftMenuOpen}
        closeLeftMenu={this.closeLeftMenu}
        />
      <header className="header-nav paper-shadow">
    		<div className="navigation-primary">
    			<div className="container close-navbar">

    				<div className="navbar-header">
              <FlatButton
                className="left-drawer-toggle"
                style={styles.flatIconButton}
                icon={<FontIcon className="mdi mdi-menu" />}
                onClick={this.toggleLeftMenu}
              />

              <FlatButton
                className="logo"
                linkButton={true}
                style={styles.flatButton}
                href="/"
                icon={<img className="logo-image" src="/images/logo-gold.png" />}
                />

    				</div>

    				<div className="navbar-collapse collapse module-group right">

                <div className="module left">

        					<ul className="nav navbar-nav navbar-right">
        						<li>
                      <FlatButton
                        style={styles.flatButton}
                        linkButton={true}
                        label="ABOUT"
                        href="#about"
                        onClick={this.scrollToAbout}
                        onTouchTap={this.scrollToAbout}
                        />
                    </li>
                  </ul>
                </div>
                <div className="module widget-handle left">
        					<ul className="nav navbar-nav navbar-right">
        						<li>
                      <FlatButton
                        style={styles.flatButton}
                        linkButton={true}
                        label="HOUGHTON"
                        target="_blank"
                        href="//hcl.harvard.edu/libraries/houghton/"
                        />
                    </li>
        						<li>
                      <FlatButton
                        style={styles.flatButton}
                        linkButton={true}
                        label="MCMULLEN"
                        target="_blank"
                        href="//www.bc.edu/sites/artmuseum/"
                        />
                    </li>
        						<li>
                      <FlatButton
                        style={styles.flatButton}
                        linkButton={true}
                        target="_blank"
                        label="GARDNER"
                        href="//www.gardnermuseum.org/home"
                        />
                    </li>
        					</ul>

                </div>

                {/*<div className="module social-module widget-handle left">
                  <ul className="menu icon-menu">
                    <li>
                      <FlatButton
                        style={styles.flatIconButton}
                        linkButton={true}
                        href="https://twitter.com/BeyondWords"
                        icon={<FontIcon className="mdi mdi-twitter" />}
                        target="_blank"
                      />
                    </li>
                  </ul>
                </div>*/}

              </div>{/*<!-- .module-group.right -->*/}
      			</div>{/*<!-- .container.close-navbar -->*/}
      		</div>{/*<!-- .navigation-primary-->*/}
      	</header>
      </div>
    )
  }
});

ComingSoonHeader.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

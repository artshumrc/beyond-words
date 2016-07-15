
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

Header = React.createClass({

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

  scrollToEvents(e){
    $("html, body").animate({ scrollTop: $('#events').offset().top - 100 }, 300);

    e.preventDefault();
  },
  scrollToSymposium(e){
    $("html, body").animate({ scrollTop: $('#symposium').offset().top - 100 }, 300);

    e.preventDefault();
  },
  scrollToCatalog(e){
    $("html, body").animate({ scrollTop: $('#catalog').offset().top - 100 }, 300);

    e.preventDefault();
  },

  render(){

    let styles = {
      flatButton : {
        width: "auto",
        minWidth: "none",
        height: "55px",
        padding: "10px 5px",
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
                className="logo logo-light"
                linkButton={true}
                style={styles.flatButton}
                href="/"
                icon={<img className="logo-image" src="/images/logo-white.png" />}
                />
              <FlatButton
                className="logo logo-dark"
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
                        label="EVENTS"
                        href="#events"
                        onClick={this.scrollToEvents}
                        onTouchTap={this.scrollToEvents}
                        />
                    </li>
        						<li>
                      <FlatButton
                        style={styles.flatButton}
                        linkButton={true}
                        label="SYMPOSIUM"
                        href="#symposium"
                        onClick={this.scrollToSymposium}
                        onTouchTap={this.scrollToSymposium}
                        />
                    </li>
        						<li>
                      <FlatButton
                        style={styles.flatButton}
                        linkButton={true}
                        label="CATALOG"
                        href="#catalog"
                        onClick={this.scrollToCatalog}
                        onTouchTap={this.scrollToCatalog}
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
                        href="//www.gardnermuseum.org/collection/exhibitions"
                        />
                    </li>
        					</ul>

                </div>

                <div className="module social-module widget-handle left">
                  <ul className="menu icon-menu">
                    <li>
                      <FlatButton
                        style={styles.flatIconButton}
                        linkButton={true}
                        href="https://twitter.com/@BeyondWords2016"
                        icon={<FontIcon className="mdi mdi-twitter" />}
                        target="_blank"
                      />
                    </li>
                  </ul>
                </div>

              </div>{/*<!-- .module-group.right -->*/}
      			</div>{/*<!-- .container.close-navbar -->*/}
      		</div>{/*<!-- .navigation-primary-->*/}
      	</header>
      </div>
    )
  }
});

Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

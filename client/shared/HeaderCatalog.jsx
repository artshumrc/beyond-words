
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

HeaderCatalog = React.createClass({

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  },
	childContextTypes: {
	    muiTheme: React.PropTypes.object.isRequired,
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
  scrollToPlanYourTrip(e){
    $("html, body").animate({ scrollTop: $('#plan-your-trip').offset().top - 100 }, 300);

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
                style={styles.flatButton}
                href="/"
                icon={<img className="logo-image" src="/images/logo-white.png" />}
                />
              <FlatButton
                className="logo logo-dark"
                style={styles.flatButton}
                href="/"
                icon={<img className="logo-image" src="/images/logo-gold.png" />}
                />

    				</div>

    				<div className="navbar-collapse collapse module-group right">

                <div className="module left">
									<ObjectsSearchTools
											toggleSearchTerm={this.props.toggleSearchTerm}
											handleChangeDate={this.props.handleChangeDate}
											handleChangeTextsearch={this.props.handleChangeTextsearch}
										/>

								</div>

              </div>{/*<!-- .module-group.right -->*/}
      			</div>{/*<!-- .container.close-navbar -->*/}
      		</div>{/*<!-- .navigation-primary-->*/}
      	</header>
      </div>
    )
  }
});

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

LeftMenu = React.createClass({


  propTypes: {
    open: React.PropTypes.bool.isRequired,
    closeLeftMenu: React.PropTypes.func.isRequired,
  },

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  },

  scrollToAbout(e){
    $("html, body").animate({ scrollTop: $('#about').height() - 100 }, 300);

    this.props.closeLeftMenu();
    e.preventDefault();
  },

  render(){
      var is_logged_in = Meteor.userId() ? Meteor.userId() : false;
      return <Drawer
          open={this.props.open}
          docked={false}
          onRequestChange={open => this.setState({open})}
          className="leftnav"
          >
            <div className="leftnav-upper">

            </div>
            {is_logged_in ?
              <div>
              <MenuItem
                href="/admin"
                primaryText="Admin"
                onTouchTap={this.props.closeLeftMenu}
                onClick={this.props.closeLeftMenu}
                />
              <Divider />
              </div>
              : ""
              }
            {/*<MenuItem
              href="/sign-up"
              primaryText="Create an Account"
              onTouchTap={this.props.closeLeftMenu}
              onClick={this.props.closeLeftMenu}
              />
            <MenuItem
              href="/sign-in"
              primaryText="Sign In"
              onTouchTap={this.props.closeLeftMenu}
              onClick={this.props.closeLeftMenu}
              />
            <Divider />*/}
            <MenuItem
              href="//hcl.harvard.edu"
              primaryText="Houghton"
              onTouchTap={this.props.closeLeftMenu}
              onClick={this.props.closeLeftMenu}
              />
            <MenuItem
              href="//www.bc.edu/sites/artmuseum/"
              primaryText="McMullan"
              onTouchTap={this.props.closeLeftMenu}
              onClick={this.props.closeLeftMenu}
              />
            <MenuItem
              href="//www.gardnermuseum.org/home"
              primaryText="Gardner"
              onTouchTap={this.props.closeLeftMenu}
              onClick={this.props.closeLeftMenu}
              />
            <Divider />
            <MenuItem
              href="#about"
              primaryText="About"
              onClick={this.scrollToAbout}
              onTouchTap={this.scrollToAbout}
              />
            {is_logged_in ?
              <div>
                <Divider />
                <MenuItem
                  primaryText="Sign out"
                  onTouchTap={this.props.closeLeftMenu}
                  onClick={this.props.closeLeftMenu}
                  />
              </div>
              : ""
              }
        </Drawer>

  }
});

LeftMenu.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

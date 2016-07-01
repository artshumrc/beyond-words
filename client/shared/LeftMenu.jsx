import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

LeftMenu = React.createClass({

  getInitialState(){
    return {
      open : false
    }
  },

  handleToggle(){
    this.setState({
      open : !this.state.open
    });
  },

  handleClose(){
    this.setState({
      open : false
    });
  },

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  },

  render(){
      var is_logged_in = Meteor.userId() ? Meteor.userId() : false;
      return <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({open})}
          className="leftnav"
          >
            <div className="leftnav-upper">

            </div>
            {/*<MenuItem
              href="/sign-up"
              primaryText="Create an Account"
              onTouchTap={this.handleClose}
              onClick={this.handleClose}
              />
            <MenuItem
              href="/sign-in"
              primaryText="Sign In"
              onTouchTap={this.handleClose}
              onClick={this.handleClose}
              />
            <Divider />*/}
            {is_logged_in ?
              <div>
              <MenuItem
                href="/admin"
                primaryText="Admin"
                onTouchTap={this.handleClose}
                onClick={this.handleClose}
                />
              <Divider />
              </div>
              : ""
              }
            <MenuItem
              href="/about"
              primaryText="about"
              onTouchTap={this.handleClose}
              onClick={this.handleClose}
              />
            {/*<Divider />
            <MenuItem
              primaryText="Sign out"
              onTouchTap={this.handleClose}
              onClick={this.handleClose}
              />*/}
        </Drawer>

  }
});

LeftMenu.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

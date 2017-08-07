import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import muiTheme from '/imports/lib/muiTheme';

class LeftMenu extends React.Component {
	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
	}

	render() {
		const isLoggedIn = Meteor.userId() ? Meteor.userId() : false;
		return (
			<div>
				<Drawer
					open={this.props.open}
					docked={false}
					onRequestChange={this.props.closeLeftMenu}
					className="leftnav"
				>
					<div className="leftnav-upper" />
					{isLoggedIn ?
						<div>
							<MenuItem
								href="http://admin.beyondwords2016.org/"
								target="_blank" rel="noopener noreferrer"
								primaryText="Admin"
								onTouchTap={this.props.closeLeftMenu}
								onClick={this.props.closeLeftMenu}
							/>
							<Divider />
						</div>
						:
						''
					}
					{/* <MenuItem
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
						href="/catalog"
						primaryText="ONLINE CATALOG"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>
					<MenuItem
						href="/#catalog"
						primaryText="PRINT CATALOG"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>
					<MenuItem
						href="/catalogIndex"
						primaryText="CATALOG INDEX"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>

					<MenuItem
						href="#news"
						primaryText="NEWS"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>

					<MenuItem
						href="/listen"
						primaryText="LISTEN"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>

					<MenuItem
						href="/watch"
						primaryText="WATCH"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>

					<Divider />

					<MenuItem
						href="/#plan-your-trip"
						primaryText="PLANNING"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>

					<MenuItem
						href="/#events"
						primaryText="EVENTS"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>

					<MenuItem
						href="/#symposium"
						primaryText="SYMPOSIUM"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>

					<Divider />

					<MenuItem
						href="//hcl.harvard.edu/libraries/houghton/"
						primaryText="Houghton"
						target="_blank" rel="noopener noreferrer"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>
					<MenuItem
						href="//www.bc.edu/sites/artmuseum/exhibitions/beyond-words/"
						primaryText="McMullen"
						target="_blank" rel="noopener noreferrer"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>
					<MenuItem
						href="//www.gardnermuseum.org/collection/exhibitions"
						primaryText="Gardner"
						target="_blank" rel="noopener noreferrer"
						onTouchTap={this.props.closeLeftMenu}
						onClick={this.props.closeLeftMenu}
					/>
				</Drawer>
			</div>
		);
	}
}

LeftMenu.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};

LeftMenu.propTypes = {
	open: PropTypes.bool.isRequired,
	closeLeftMenu: PropTypes.func.isRequired,
};

export default LeftMenu;

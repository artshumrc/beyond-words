
import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import muiTheme from '/imports/lib/muiTheme';
import MediaItemList from '/imports/ui/components/home/MediaItemList';

class HomeMedia extends React.Component {

	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
	}

	render() {
		// console.log(this.data.ready, this.data.tweets);
		return (
			<section id="news" className="bg-gray">
				<div className="container">
					<h2 className="text-center bw-tweet-handle">In the News</h2>
					<div className="row">
						<MediaItemList />
					</div>
				</div>
			</section>
		);
	}
}

HomeMedia.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};


export default HomeMedia;

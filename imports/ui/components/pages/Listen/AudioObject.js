import React from 'react';
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

const AudioObject = props => {
	const { title, url, height, description } = props;

	return (
		<div className="audio-object">
			<h2>{title}</h2>
			<hr />
			<ReactPlayer
				url={url}
				width="100%"
				height={height}
				controls
			/>
			<p className="description">
				{description}
			</p>
		</div>
	);
}

AudioObject.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	url: PropTypes.string.isRequired,
	height: PropTypes.string,
}

export default AudioObject

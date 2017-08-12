import React from 'react';
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

const AudioObject = props => {
	const { title, url, image, image2, caption } = props;

	return (
		<div className="audio-object">
			<h2>{title}</h2>
			<hr />
			<img src={image} />
			{image2 && <img src={image2} />}
			{caption &&
				<span className="image-caption">
					{caption}
				</span>
			}
			<ReactPlayer
				url={url}
				width="100%"
				height="60px"
				controls
			/>
			{props.children}
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

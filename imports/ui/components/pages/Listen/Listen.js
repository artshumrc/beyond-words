import React from 'react';
import PropTypes from 'prop-types';
import AudioObject from './AudioObject';

import Loading from '/imports/ui/components/common/Loading';

class Listen extends React.Component {

	backgroundImages() {
		setTimeout(() => {
			$('.background-image-holder').each(function appendImg() {
				const imgSrc = $(this).children('img').attr('src');
				$(this).css('background', `url("${imgSrc}")`);
				$(this).children('img').hide();
				$(this).css('background-position', 'initial');
				$(this).addClass('fadeIn');
			});

						// Fade in background images
			setTimeout(() => {
				$('.background-image-holder').each(function fadeImg() {
					$(this).removeClass('blur');
				});
			}, 500);
		}, 100);
	}

	render() {
		const { slug, images } = this.props;
		const pageClass = `page page-${slug}`;
		const headerImageSource = images ? images[0].url : null;
		if (headerImageSource) {
			this.backgroundImages();
		}
		// var page = Pages.findOne({slug: slug});
		if (this.props.loading) {
			return (
				<Loading />
			);
		}

		return (
			// todo: return 404 if !page.length
			<div className={pageClass}>

				<section className="page-head fullscreen image-bg bg-dark">
					<div className="background-image-holder less-blur blur">
						{/* <img className="background-image" alt='image' src={headerImageSource}/>*/}
						<img
							className="background-image"
							role="presentation"
							src="/images/manuscript_header.jpg"
						/>
					</div>

					<div className="background-screen primary" />

					<div className="container v-align-transform">
						<div className="row">
							<div className="col-sm-10 col-sm-offset-1 text-center">
								<h1 className="mb40 mb-xs-16 large">
									Listen to Beyond Words
								</h1>
								<h2>
									Learn more through the exhibition audioguide
								</h2>
							</div>
						</div>
					</div>
				</section>

				<section className="page-content container">
					<div className="listen-page-content">
						<AudioObject
							title="Catalog Numbers 1, 2, 3"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW1.2.3..mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 20"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW20.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 37"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW37.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 43"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW43.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 48"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW48.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 49"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW49.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 63"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW63.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 74"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW74.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 77"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW77.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 87"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW87.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 107"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW107.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 112"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW112.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 116"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW116.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 117"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW117.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 121"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW121.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 142"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW142.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 165"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW165.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 182"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW182.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 184"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW184.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Numbers 188 and 189"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW188.189.mp3"
							height="60px"
							description=""
						/>
						<AudioObject
							title="Catalog Number 190"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/BW190.mp3"
							height="60px"
							description=""
						/>
					</div>
				</section>
			</div>
		);
	}
}

export default Listen;

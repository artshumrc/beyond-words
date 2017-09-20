import React from 'react';
import PropTypes from 'prop-types';
import VideoObject from './VideoObject';
import Loading from '/imports/ui/components/common/Loading';

class Watch extends React.Component {

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
									Watch the Beyond Words Videos
								</h1>
								<h2>
									Learn about making medieval manuscripts with curators from the exhibition
								</h2>
							</div>
						</div>
					</div>
				</section>

				<section className="page-content container">
					<div className="listen-page-content">
						<VideoObject
							title="Parchment"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/Parchment_1080.mp4"
							height="420px"
						/>
						<VideoObject
							title="Script"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/Script_1080.mp4"
							height="420px"
						/>
						<VideoObject
							title="Illumination"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/Illumination_1080.mp4"
							height="420px"
						/>
						<VideoObject
							title="Binding"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/Binding_1080.mp4"
							height="420px"
						/>
						<VideoObject
							title="Jeffrey Hamburger on a Manuscript of the Commentary on the Pauline Epistles"
							url="https://storage.googleapis.com/archimedes-data/beyondwords/HamburgerEpistles_1080.mp4"
							height="420px"
						/>
					</div>
				</section>
			</div>
		);
	}
}

export default Watch;

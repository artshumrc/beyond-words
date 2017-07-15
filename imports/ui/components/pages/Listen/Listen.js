import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

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
		const slug = this.props.slug;// FlowRouter.getParam('slug');
		const pageClass = `page page-${slug}`;
		const headerImageSource = this.props.images[0] ? this.props.images[0].url : null;
		if (headerImageSource) {
			// console.log(headerImageSource);
			this.backgroundImages();
		}
		// var page = Pages.findOne({slug: slug});
		// console.log(this.props.loading);
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
				</section>
			</div>
		);
	}
}

export default Listen;

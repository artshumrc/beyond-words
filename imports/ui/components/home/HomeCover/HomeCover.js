import React from 'react';
import PropTypes from 'prop-types';

class HomeCover extends React.Component {
	componentDidMount() {
		// Image Sliders
		$('.flexslider').flexslider({
			animation: 'slide',
			directionNav: false,
			controlsContainer: '.slider-controls',
			manualControls: '.slider-controls .bw-exhibit',
		});
	}

	render() {
		function flexNext() {
			$('.flexslider').flexslider('next');
			return false;
		}

		const flexPrev = () => {
			$('.flexslider').flexslider('prev');
			return false;
		};

		return (
			<div>
				<section id="intro" className="image-bg bg-dark cover fullscreen">

					<div className="background-image-holder blur flexslider">
						<ul className="slides">
							<li
								className="beyond-words-cover-slide"
							>
								<div
									className="image-bg-slide"
									style={{ backgroundImage: "url('/images/banner.jpg')" }}
								/>
								<div className="background-screen bw" />
								<div className="bw-exhibit">
									<img
										alt="catalog logo"
										className="cover-logo"
										src="/images/beyond-words-logo-light.png"
									/>
									<hr />
									<a
										className="btn btn-large md-button learn-more-button
										md-ink-ripple paper-shadow md-primary"
										href="#overview"
										aria-label="Learn More"
									>
										<span>Learn More</span>
										<div className="md-ripple-container" />
									</a>

								</div>
							</li>
							<li>
								<div
									className="image-bg-slide"
									style={{ backgroundImage: "url('/images/houghton_banner.jpg')" }}
								/>
								<div className="background-screen bw" />
								<div className="bw-exhibit">
									<h3>
										<a href="#mss-from-church-and-cloister">Manuscripts from Church and Cloister</a>
									</h3>
									<hr />
									<h4 className="thin">
										<a
											href="//hcl.harvard.edu/libraries/houghton/"
											className="thin"
											target="_blank"
											rel="noopener noreferrer"
										>
											Houghton Library, Harvard University
										</a>
									</h4>
									<h5>September 12 - December 10</h5>

									<a
										className="btn btn-large md-button learn-more-button
										md-ink-ripple paper-shadow md-primary"
										href="#mss-from-church-and-cloister"
										aria-label="Learn More"
									>
										<span>Learn More</span>
										<div className="md-ripple-container" />
									</a>

								</div>
							</li>
							<li>
								<div
									className="image-bg-slide"
									style={{ backgroundImage: "url('/images/BC-Banner.jpg')" }}
								/>
								<div className="background-screen bw" />
								<div className="bw-exhibit">
									<h3>
										<a href="#mss-for-pleasure-and-piety">Manuscripts for Pleasure and Piety</a>
									</h3>
									<hr />
									<h4 className="thin">
										<a
											href="//www.bc.edu/sites/artmuseum/"
											className="thin" target="_blank"
											rel="noopener noreferrer"
										>
											McMullen Museum of Art, Boston College
										</a>
									</h4>
									<h5>September 12 - December 11</h5>

									<a
										className="btn btn-large md-button learn-more-button
										md-ink-ripple paper-shadow md-primary"
										href="#mss-for-pleasure-and-piety"
										aria-label="Learn More"
									>
										<span>Learn More</span>
										<div className="md-ripple-container" />

									</a>

								</div>
							</li>
							<li>
								<div
									className="image-bg-slide"
									style={{ backgroundImage: "url('/images/ISGM-banner.jpg')" }}
								/>
								<div className="background-screen bw" />
								<div className="bw-exhibit">
									<h3>
										<a href="#italian-renaissance-books">Italian Renaissance Books</a>
									</h3>
									<hr />
									<h4 className="thin">
										<a
											href="//www.gardnermuseum.org/collection/exhibitions"
											target="_blank"
											rel="noopener noreferrer"
										>
											Isabella Stewart Gardner Museum
										</a>
									</h4>
									<h5>
										September 22 - January 16
									</h5>

									<a
										className="btn btn-large md-button learn-more-button
										md-ink-ripple paper-shadow md-primary"
										href="#italian-renaissance-books"
										aria-label="Learn More"
									>
										<span>Learn More</span>
										<div className="md-ripple-container" />

									</a>

								</div>
							</li>
						</ul>
					</div>


					<div className="custom-navigation">
						<a href="#pre" onClick={flexPrev} className="flex-prev">
							<i className="mdi mdi-chevron-left" />
						</a>
						<a href="#next" onClick={flexNext} className="flex-next">
							<i className="mdi mdi-chevron-right" />
						</a>
					</div>

					<div className="scroll-down-helper">
						<p>
							<em>Scroll down for more information.</em>
						</p>
						<i className="mdi mdi-chevron-down" />
					</div>

				</section>
			</div>
		);
	}
}

export default HomeCover;

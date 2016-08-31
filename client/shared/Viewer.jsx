import 'openseadragon';
import Slider from 'react-slick';

Viewer = React.createClass({

	propTypes: {
	},

	mixins: [ReactMeteorData],

	componentDidMount() {
		/* eslint new-cap: "off" */
		this.left_viewer = OpenSeadragon({
			id: 'image-panel-left',
			prefixUrl: '/openseadragon/images/',
			// TODO: Change this once dzi files are available
			tileSources: {
				type: 'image',
				url: this.data.slides[0],
			},
		});
		this.right_viewer = OpenSeadragon({
			id: 'image-panel-right',
			prefixUrl: '/openseadragon/images/',
			// TODO: Change this once dzi files are available
			tileSources: {
				type: 'image',
				url: this.data.slides[1],
			},
		});
		const self = this;
		this.left_viewer.addHandler('canvas-double-click', () => {
			console.log('left fullscreen');
			const ifFullScreen = self.left_viewer.isFullPage();
			self.left_viewer.setFullScreen(!ifFullScreen);
		});
		this.right_viewer.addHandler('canvas-double-click', () => {
			console.log('right fullscreen');
			const ifFullScreen = self.right_viewer.isFullPage();
			self.right_viewer.setFullScreen(!ifFullScreen);
		});
	},

	getMeteorData() {
		return {
			// Sample images to show in viewer
			slides: [
				'/images/Januarius_0001.tif',
				'/images/Januarius_0002.tif',
				'/images/Januarius_0003.tif',
				'/images/Januarius_0004.tif',
				'/images/Januarius_0005.tif',
				'/images/Januarius_0006.tif',
				'/images/Januarius_0007.tif',
				'/images/Januarius_0008.tif',
				'/images/Januarius_0009.tif',
				'/images/Januarius_0010.tif',
				'/images/Januarius_0011.tif',
				'/images/Januarius_0012.tif',
				'/images/Januarius_0013.tif',
				'/images/Januarius_0014.tif',
				'/images/Januarius_0015.tif',
				'/images/Januarius_0016.tif',
			],
		};
	},

	nextSlide(currentSlide) {
		console.log('after change', currentSlide);
		// check if currentSlide is valid
		if (currentSlide < 0 || currentSlide >= this.data.slides.length) {
			console.log('Invalid slide');
			return;
		}
		if (currentSlide % 2 === 0) {
		// left slide selected
			this.left_viewer.open({ type: 'image', url: this.data.slides[currentSlide] });
			if (currentSlide === this.data.slides.length - 1) {
				this.right_viewer.open({ type: 'image', url: null });
			} else {
				this.right_viewer.open({ type: 'image', url: this.data.slides[currentSlide + 1] });
			}
		} else {
			// right slide selected
			this.right_viewer.open({ type: 'image', url: this.data.slides[currentSlide] });
			this.left_viewer.open({ type: 'image', url: this.data.slides[currentSlide - 1] });
		}
	},

	render() {
		const self = this;
		const settings = {
			focusOnSelect: true,
			centerMode: true,
			dots: true,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 50,
			afterChange(currentSlide) {
				self.nextSlide(currentSlide);
			},
		};
		const styles = {
			imagePanel: {
				height: 340,
				backgroundColor: 'black',
			},
			slider: {
				height: 100,
				float: 'none',
				padding: '0 40px',
				backgroundColor: 'black',
			},
			viewer: {
				paddingTop: 55,
			},
			thumbnail: {
				border: '1px solid #333',
				padding: '0 5px',
				margin: '10px',
			},
		};
		return (
			<div className="container">
				<div id="viewer" className="row" style={styles.viewer}>

					<div id="image-panel-left" className="col-xs-6 image-panel" style={styles.imagePanel} />

					<div id="image-panel-right" className="col-xs-6 image-panel" style={styles.imagePanel} />
				</div>
				<div className="row">
					<div id="slider"className="col-xs-12 center-block" style={styles.slider}>
						<Slider {...settings}>
						{this.data.slides.map((slide, i) => (
							<div key={i} style={styles.thumbnail}>
								<img alt="slide" className="center-block" height="80" src={slide} />
							</div>
						))}
						</Slider>
					</div>
				</div>
			</div>
		);
	},
});

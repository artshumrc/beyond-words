import 'openseadragon';
import Slider from 'react-slick';
Viewer = React.createClass({

  mixins: [ReactMeteorData],

  left_viewer: null,

  right_viewer: null,

  propTypes: {
  },

  getMeteorData() {
    let query = {};

    return {
      slides: [
        '/images/demo_1.jpg',
        '/images/demo_2.jpg',
        '/images/demo_3.jpg',
        '/images/demo_4.jpg',
        '/images/demo_5.jpg',
        '/images/demo_6.jpg',
      ] 
    };
  },

  componentDidMount() {
    this.left_viewer = OpenSeadragon({
      id: "image-panel-left",
      prefixUrl: "/openseadragon/images/",
      tileSources:  {
        type: 'image',
        url:  this.data.slides[0],
      },
    });
    this.right_viewer = OpenSeadragon({
      id: "image-panel-right",
      prefixUrl: "/openseadragon/images/",
      tileSources:  {
        type: 'image',
        url:  this.data.slides[1],
      },
    });
    let self = this;
    this.left_viewer.addHandler("canvas-double-click", function (data) {
        console.log("left fullscreen");
        let ifFullScreen = self.left_viewer.isFullPage();
        self.left_viewer.setFullScreen(!ifFullScreen);
    });
    this.right_viewer.addHandler("canvas-double-click", function (data) {
        console.log("right fullscreen");
        let ifFullScreen = self.right_viewer.isFullPage();
        self.right_viewer.setFullScreen(!ifFullScreen);
    });
  },

  nextSlide(currentSlide) {
    console.log('after change', currentSlide);
    if(currentSlide == this.data.slides.length-1) {
      this.left_viewer.open({type: 'image', url:  this.data.slides[currentSlide]});
      this.right_viewer.open({type: 'image', url:  null});
    }
    else if(currentSlide >= 0) {
      this.left_viewer.open({type: 'image', url:  this.data.slides[currentSlide]});
      this.right_viewer.open({type: 'image', url:  this.data.slides[currentSlide+1]});
    }
    else {
      console.log("Invalid slide");
    }
    
  },

  render() {
    let self  = this;
    const settings = {
      focusOnSelect: true,
      centerMode: true,
      dots: true,
      infinite: false,
      slidesToShow: 10,
      slidesToScroll: 2,
      speed: 50,
      afterChange: function (currentSlide) {
        self.nextSlide(currentSlide);
      },
    };
    const styles = {
      imagePanel: {
        height: 340,
        backgroundColor: "black",
      },
      slider: {
        height: 100,
        float: "none",
        padding: "0 40px",
        backgroundColor: "black",
      },
      viewer: {
        paddingTop: 55,
      },
      thumbnail: {
        border: "1px solid #333",
        padding: "0 5px",
        margin: "0 5px",
      },
    };
    return (
      <div className="container">
        <div id="viewer" className="row" style={styles.viewer}>

      		<div id="image-panel-left" className="col-xs-6 image-panel" style={styles.imagePanel}>

      		
          </div>

          <div id="image-panel-right" className="col-xs-6 image-panel" style={styles.imagePanel}>

          </div>
        </div>
        <div className="row">
          <div id="slider"className="col-xs-12 center-block" style={styles.slider}>
            <Slider {...settings}>
              {this.data.slides.map( (silde, i) => {
                return  <div key={i} style={styles.thumbnail}><img className="center-block" height="100" src={silde} /></div>
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
});

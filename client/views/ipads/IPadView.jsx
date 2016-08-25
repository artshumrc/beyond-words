import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FontIcon from 'material-ui/FontIcon';
import {grey500, white, black} from 'material-ui/styles/colors';

IPadView = React.createClass({

  mixins: [ReactMeteorData],

  propTypes: {
  },
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  },
  getInitialState() {
    return {
      view: "grid",
			videoOpen: false,
			infoModalOpen: false 
    }
  },
  getMeteorData() {
    let query = {};
    var object = {},
        images = [],
        thumbnails = [];
    var objectSubscription = Meteor.subscribe('objects', {});
    if (objectSubscription.ready()) {
        object = Objects.findOne({});//.fetch()[0];
    }

    return {
			object: object,
      ipad: IPads.find(query, {sort: {title: 1}}).fetch(),
      currentUser: Meteor.user()
    };
  },
  handleViewChange(event, value) {
    this.setState({
      view: value,
    });
  },

  renderObjects() {

    return this.data.objects.map((object) => {
      return <ObjectTeaser
              key={object._id}
              object={object} />;

    });

  },
	handleClose() {
		this.setState({
			videoOpen: false,
		});
	},
	showVideo() {
		this.setState({
			videoOpen: true,
		});
	},
	handleCloseInfoModal() {
		this.setState({
			infoModalOpen: false,
		});
	},
	showInfoModal() {
		this.setState({
			infoModalOpen: true,
		});
	},

  render() {
    const styles = {
      toolBar: {
        height: "auto",
        background: "#091624",
        padding: "1%",
      },
      radioButtonGroup: {
        display:"flex",
      },
      radioButton: {
        width: "auto",
      },
      icon: {
        lineHeight: 0,
      },
    	noPadding: {
    		padding: 0,
    	},
    	closeButton: {
    		position: "absolute",
    		zIndex: 1000,
    		background: "rgba(0, 0, 0, 0.5)",
				color: "#fffff"

    	}
    };

		var iframe = "";

		var slides = [
        '/openseadragon/images/Januarius_0002_small.jpg',
        '/openseadragon/images/Januarius_0003_small.jpg',
        '/openseadragon/images/Januarius_0004_small.jpg',
        '/openseadragon/images/Januarius_0005_small.jpg',
        '/openseadragon/images/Januarius_0006_small.jpg',
        '/openseadragon/images/Januarius_0007_small.jpg',
        '/openseadragon/images/Januarius_0008_small.jpg',
        '/openseadragon/images/Januarius_0009_small.jpg',
        '/openseadragon/images/Januarius_0010_small.jpg',
        '/openseadragon/images/Januarius_0011_small.jpg',
        '/openseadragon/images/Januarius_0012_small.jpg',
        '/openseadragon/images/Januarius_0013_small.jpg',
        '/openseadragon/images/Januarius_0014_small.jpg',
		];

		var title = "BPL Med. 84 Psalter"

		var object = this.data.object;

    return (
      <div className="page page-ipad">
				{iframe.length ?
					<iframe src={iframe} width="100%" height="100%" ></iframe>
					:
	    		<section className="page-content ipad-content">
	          <Toolbar
							className="ipad-toolbar"
							style={styles.toolBar}
							>
	            <ToolbarGroup
								className="toolbar-group toolbar-group-info"
								>
	              <FontIcon onClick={this.showInfoModal} style={styles.icon} className="mdi mdi-information" color={grey500} hoverColor={white} />
	              <FontIcon onClick={this.showVideo} style={styles.icon} className="mdi mdi-video" color={grey500} hoverColor={white} />
	            </ToolbarGroup>
							<h3>{title}</h3>
	            <ToolbarGroup
								className="toolbar-group toolbar-group-view-mode"
								>
	              <RadioButtonGroup style={styles.radioButtonGroup} name="view" defaultSelected="grid" onChange={this.handleViewChange}>
	                <RadioButton
	                  value="grid"
	                  checkedIcon={<FontIcon style={styles.icon} className="mdi mdi-view-grid" color={white} />}
	                  uncheckedIcon={<FontIcon style={styles.icon} className="mdi mdi-view-grid" color={grey500} />}
	                  style={styles.radioButton}
	                />
	                <RadioButton
	                  value="single"
	                  checkedIcon={<FontIcon style={styles.icon} className="mdi mdi-image" color={white} />}
	                  uncheckedIcon={<FontIcon style={styles.icon} className="mdi mdi-image" color={grey500} />}
	                  style={styles.radioButton}
	                />
	                <RadioButton
	                  value="spread"
	                  checkedIcon={<FontIcon style={styles.icon} className="mdi mdi-book-open-variant" color={white} />}
	                  uncheckedIcon={<FontIcon style={styles.icon} className="mdi mdi-book-open-variant" color={grey500} />}
	                  style={styles.radioButton}
	                />
	              </RadioButtonGroup>
	            </ToolbarGroup>
	          </Toolbar>
	          {(() => {
	            switch(this.state.view) {
	              case "grid":
	                return <IPadGridView slides={slides}/>;
	                break;
	              case "single":
	                return <IPadSingleView slides={slides}/>;
	                break;
	              case "spread":
	                return <IPadSpreadView slides={slides}/>;
	                break;
	              default:
	                return <p> There some problem displaying this view </p>
	            }
	          })()}

					<Dialog
								className="fullscreen-video"
			          open={this.state.videoOpen}
			          onRequestClose={this.handleClose}
			          bodyStyle={styles.noPadding}
			        >
			        	<IconButton
									className="close-fullscreen"
			        		tooltip="Close" style={styles.closeButton}
			        		onClick={this.handleClose}>
					    	<ContentClear />
					    </IconButton>
							<div className="viewer-video">
								<video controls>
									  <source src="/videos/making_manuscripts_binding01.mp4" type="video/mp4">
										</source>
									</video>
							</div>

			        </Dialog>
							<div className={"info-modal " + (this.state.infoModalOpen ? " lowered" : "")}>
			        	<IconButton
									className="close-fullscreen"
			        		tooltip="Close" style={styles.closeButton}
			        		onClick={this.handleCloseInfoModal}>
						    	<ContentClear />
						    </IconButton>
                <section className="object-details">
									<div className="object-details-inner">

										<div className="object-detail-text-wrap">

											<div className="object-detail-header">
			                  <h2 className="card-title object-title">{object.author_title}</h2>
											</div>

											<div className="object-detail-meta">
													<label>Catalog No.</label>
													<span>{object.catalog_n}</span>
											</div>
											{object.date ?
											<div className="object-detail-meta">
													<label>Date</label>
													<span>{object.date}</span>
											</div>
											:""}
											{object.shelfmark ?
											<div className="object-detail-meta">
													<label>Shelfmark</label>
													<span>{object.shelfmark}</span>
											</div>
											:""}
											{object.former_shelfmark ?
											<div className="object-detail-meta">
													<label>Former Shelfmark</label>
													<span>{object.former_shelfmark}</span>
											</div>
											:""}
											{object.scribe ?
											<div className="object-detail-meta">
													<label>Scribe</label>
													<span>{object.scribe}</span>
											</div>
											:""}
											{object.printer ?
											<div className="object-detail-meta">
													<label>Printer</label>
													<span>{object.printer}</span>
											</div>
											:""}
											{object.institution ?
											<div className="object-detail-meta">
													<label>Institution</label>
													<span>{object.institution}</span>
											</div>
											:""}
											{object.illumintator ?
											<div className="object-detail-meta">
													<label>Illuminator</label>
													<span>{object.illuminator}</span>
											</div>
											:""}
											{object.collection ?
											<div className="object-detail-meta">
													<label>Collection</label>
													<span>{object.collection}</span>
											</div>
											:""}
											{object.place ?
											<div className="object-detail-meta">
													<label>Place</label>
													<span>{object.place}</span>
											</div>
											:""}
											{object.externalLink ?
											<div className="object-detail-meta">
													<label>External Link</label>
													<span>
														<a href={object.externalUrl} target="_blank">
														{object.externalUrl}
													</a>

														</span>
											</div>

											:""}
											{object.illumintator ?
											<div className="object-detail-meta">
													<label>Description</label>
													<span>{object.description}</span>
											</div>

											:""}

										</div>



                  </div>

                </section>

							</div>

	        </section>

				}

      </div>
    );
  }
});

IPadView.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

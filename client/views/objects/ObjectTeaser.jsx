import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Object Teaser
ObjectTeaser = React.createClass({

	propTypes: {
		object: React.PropTypes.object.isRequired,
		selectObject: React.PropTypes.func,
	},

	mixins: [ReactMeteorData],

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	getMeteorData() {
		let attachment = null;

		const imageSubscription = Meteor.subscribe('attachments', this.props.object.slug);
		if (imageSubscription.ready() && typeof this.props.object.image !== 'undefined') {
			attachment = Attachments.findOne({ _id: this.props.object.image });
			//thumbnails = Thumbnails.find({}).fetch();
		}

		return {
			attachment,
		};
	},


	render() {
		const object = this.props.object;
		const objectUrl = `/objects/${object.slug}`;
		let authorTitle = '';
		let description = '';

		if ('author_title' in object && typeof object.author_title !== 'undefined') {
			authorTitle = object.author_title;
		}

		if ('description' in object && typeof object.description !== 'undefined') {
			description = object.description;
		}

		let image = {};
		let imageUrl = "";
		if (this.data.attachment) {
			image = this.data.attachment;
			imageUrl = image.url();
		}


		return (
			<div className="object-teaser col-md-4 col-sm-6">
				<div className="object-teaser-wrap">
					{this.props.selectObject ?
						<a
							href={`#${object.slug}`}
							onClick={this.props.selectObject.bind(null, object)}
						>
							<div className="object-thumbnail-wrap">
								<div className="object-catalog-n">
									<span>
										{object.catalog_n}.
									</span>
								</div>
								{(imageUrl.length) ?
									<img alt="object thumbnail" className="object-detail-thumbnail" src={imageUrl} />
									:
									<img
										alt="default thumbnail"
										className="object-detail-thumbnail"
										src="/images/default_image.jpg"
									/>
								}
							</div>
						</a>
						:
						<a
							href={objectUrl}
						>
							<div className="object-thumbnail-wrap">
								<div className="object-catalog-n">
									<span>
										{object.catalog_n}.
									</span>
								</div>
								{('url' in image && image.url.length) ?
									<img alt="object thumbnail" className="object-detail-thumbnail" src={image.url} />
									:
									<img
										alt="default thumbnail"
										className="object-detail-thumbnail"
										src="/images/default_image.jpg"
									/>
								}
							</div>
						</a>
					}
					<div className="object-text-wrap">
						{this.props.selectObject ?
							<a
								href="#"
								onClick={this.props.selectObject.bind(null, object)}
							>
								<h3>{Utils.trunc(authorTitle, 60)}</h3>
							</a>
							:
							<a href={objectUrl}>
								<h3>{Utils.trunc(authorTitle, 60)}</h3>
							</a>
						}
						<span className="object-teaser-subtitle">{object.date}</span>
						<p>
							{Utils.trunc(description, 120)}
						</p>

						<div className="meta-items">
							{object.place ?
								<div className="object-teaser-meta">
									<label>Place</label>
									<p>
										{object.place}
									</p>
								</div>
								:
								''
							}
							{object.institution ?
								<div className="object-teaser-meta">
									<label>Institution{(object.institution_2 || object.institution_3) ? 's' : ''}</label>
									<p>
										{object.institution}{object.institution_2 ? (', ' + object.institution_2) : ''}{object.institution_3 ? (', ' + object.institution_3) : ''}
									</p>
								</div>
								:
								''
							}
							{object.collection ?
								<div className="object-teaser-meta">
									<label>Collection</label>
									<p>
										{object.collection}
									</p>
								</div>
								:
								''
							}
							{object.shelfmark ?
								<div className="object-teaser-meta">
									<label>Shelfmark</label>
									<p>
										{object.shelfmark}
									</p>
								</div>
								:
								''
							}
							{object.illuminator ?
								<div className="object-teaser-meta">
									<label>Illuminator</label>
									<p>
										{object.illuminator}
									</p>
								</div>
								:
								''
							}
							{object.scribe ?
								<div className="object-teaser-meta">
									<label>Scribe</label>
									<p>
										{object.scribe}
									</p>
								</div>
								:
								''
							}
							{object.printer ?
								<div className="object-teaser-meta">
									<label>Printer</label>
									<p>
										{object.printer}
									</p>
								</div>
								:
								''
							}
						</div>

					</div>
				</div>
			</div>
		);
	},

});

ObjectTeaser.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

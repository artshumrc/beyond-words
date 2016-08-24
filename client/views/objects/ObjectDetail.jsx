// Single object detail view
ObjectDetail = React.createClass({

    propTypes: {
			object: React.PropTypes.object.isRequired,
			closeSelectedObject: React.PropTypes.func
		},

    render() {
        let object = this.props.object;
				let image = {};
				if("images" in object && object.images && object.images.length){
					image = object.images[0];
				}

        return (
            <div className="object-details ">
							<div className="object-details-inner paper-shadow">

								<div className="object-detail-thumbnail-wrap">
									{("url" in image && image.url.length) ?
										<img className="object-detail-thumbnail paper-shadow" src={image.url} />
										:
										<img className="object-detail-thumbnail paper-shadow" src="/images/default_image.jpg" />
									}

								</div>

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
									{object.description ?
									<div className="object-detail-meta">
											<label>Description</label>
											<span>{object.description}</span>
									</div>

									:""}

								</div>



              </div>

            </div>
        );
    }
});

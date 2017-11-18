
import React from 'react';
import PropTypes from 'prop-types';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class HomeCatalog extends React.Component {
	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
	}

	render() {
		return (
			<div>
				<section id="catalog">
					<div className="container">
						<h2 className="text-center">Catalog</h2>
						<div className="row flex-center">
							<div className="col-sm-12">
								<img alt="catalog" className="catalog-image" src="/images/catalog.png" />
								<p>
									The catalog <em>Beyond Words</em> features illuminated manuscripts from nineteen Boston-area institutions. This catalog provides a sweeping overview of the history of the book in the Middle Ages and Renaissance, as well as a guide to its production, illumination, functions, and readership. Entries by eighty-five international experts document, discuss, and reproduce more than two hundred and sixty manuscripts and early printed books, many of them little known before now. <em>Beyond Words</em> also explores the history of collecting such books in Boston, an uncharted chapter in the history of American taste.
								</p>
								<p>
									Of broad appeal to scholars and amateur enthusiasts alike, this catalog documents one of the most ambitious exhibitions of medieval and Renaissance manuscripts ever to take place in North America.
								</p>
								<p>
									Major support for the publication of the catalog was provided by Daniel and Joanna S. Rose with additional support from the Rose Marrow Fund.
								</p>
								<p>
									<em>Beyond Words: Illuminated Manuscripts in Boston Collections</em>, published by the McMullen Museum of Art at Boston College, is now digitized in its entirety and viewable by the public. Please click <a href="https://archive.org/details/beyondwordsillum00hamb" target="_blank" rel="noopener noreferrer">here</a> to view. 
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

HomeCatalog.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};


export default HomeCatalog;

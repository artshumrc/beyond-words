import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

HomeCatalog = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},
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
									The catalog <em>Beyond Words</em> features illuminated manuscripts from
									nineteen Boston-area institutions, this catalog provides a sweeping overview
									of the history of the book in the Middle Ages and Renaissance, as well as a
									guide to its production, illumination, functions, and readership.
									Entries by eighty-five internationalexperts document, discuss, and
									reproduce more than two hundred and sixty manuscripts and early printed books,
									many of them little known before now. <em>Beyond Words</em> also explores the
									history of collecting such books in Boston, an uncharted chapter in the
									history of American taste.
								</p>
								<p>
									Of broad appeal to scholars and amateur enthusiasts alike, this catalog documents
									one of the most ambitious exhibitions of medieval and Renaissance manuscripts ever
									to take place in North America.
								</p>
								<p>
									Major support for the publication of the catalog was provided by Daniel and Joanna
									S. Rose with additional support from the Rose Marrow Fund.
								</p>

								<a
									className="btn btn-large md-button uchicago-press-button
									md-ink-ripple paper-shadow md-primary"
									href="//www.press.uchicago.edu/ucp/books/book/distributed/B/bo25077855.html"
									aria-label="Learn More" target="_blank" rel="noopener noreferrer"
								>
									<span>Purchase from University of Chicago Press</span>
									<div className="md-ripple-container" />

								</a>

							</div>
						</div>
					</div>
				</section>
			</div>
);
	},
});

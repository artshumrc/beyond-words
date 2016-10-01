import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Masonry from 'react-masonry-component/lib';

HomeLenders = React.createClass({

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	render() {
		const masonryOptions = {
			fitWidth : true,
			transitionDuration: 300,
		};

		return (
			<div>
				<section id="lenders">
					<div className="container">
						<div className="row">
							<h2>Lenders</h2>
							<Masonry
								options={masonryOptions}
								className="lenders-masonry"
							>

								<a
									href="//www.armenianmuseum.org"
									target="_blank"
									rel="noopener noreferrer"
								>
									Armenian Museum and Library of America
									<hr />
								</a>
								<a
									href="//www.bostonathenaeum.org"
									target="_blank"
									rel="noopener noreferrer"
								>
									Boston Athenaeum
									<hr />
								</a>
								<a
									href="//libguides.bc.edu/Burns"
									target="_blank"
									rel="noopener noreferrer"
								>
									John J. Burns Library, Boston College
									<hr />
								</a>
								<a
									href="//www.bc.edu/sites/artmuseum/"
									target="_blank"
									rel="noopener noreferrer"
								>
									McMullen Museum of Art, Boston College
									<hr />
								</a>
								<a
									href="//www.bu.edu/sthlibrary/"
									target="_blank"
									rel="noopener noreferrer"
								>
									School of Theology Library, Boston University
									<hr />
								</a>
								<a
									href="//www.mfa.org"
									target="_blank"
									rel="noopener noreferrer"
								>
									Museum of Fine Arts, Boston
									<hr />
								</a>
								<a
									href="//www.bpl.org/research/rb/index.htm"
									target="_blank"
									rel="noopener noreferrer"
								>
									Rare Books and Manuscripts Department, Boston Public Library
									<hr />
								</a>
								<a
									href="//lts.brandeis.edu/research/archives-speccoll/"
									target="_blank"
									rel="noopener noreferrer"
								>
									University Archives & Special Collections, Brandeis University
									<hr />
								</a>
								<a
									href="//hls.harvard.edu/library/historical-special-collections/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Historical & Special Collections, Harvard University Law School
									<hr />
								</a>
								<a
									href="//www.countway.harvard.edu"
									target="_blank"
									rel="noopener noreferrer"
								>
									Countway Library, Harvard University Medical School
									<hr />
								</a>
								<a
									href="//www.harvardartmuseums.org"
									target="_blank"
									rel="noopener noreferrer"
								>
									Harvard University/Fogg Art Museum
									<hr />
								</a>
								<a
									href="//hcl.harvard.edu/libraries/houghton/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Houghton Library, Harvard University
									<hr />
								</a>
								<a
									href="//library.hds.harvard.edu"
									target="_blank"
									rel="noopener noreferrer"
								>
									Andover-Harvard Theological Library, Harvard Univ. Divinity School
									<hr />
								</a>
								<a
									href="//www.library.hbs.edu"
									target="_blank"
									rel="noopener noreferrer"
								>
									Baker Library, Harvard University Business School
									<hr />
								</a>
								<a
									href="//www.gardnermuseum.org/home"
									target="_blank"
									rel="noopener noreferrer"
								>
									Isabella Stewart Gardner Museum
									<hr />
								</a>
								<a
									href="//libraries.mit.edu/archives/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Archives & Special Collections, Massachusetts Institute of Technology
									<hr />
								</a>
								<a
									href="//library.northeastern.edu/archives-special-collections"
									target="_blank"
									rel="noopener noreferrer"
								>
									Snell Library, Northeastern University
									<hr />
								</a>
								<a
									href="//researchguides.library.tufts.edu/specialcollections"
									target="_blank"
									rel="noopener noreferrer"
								>
									Tisch Library Special Collections, Tufts University
									<hr />
								</a>
								<a
									href="//www.wellesley.edu/lts/collections/speccoll"
									target="_blank"
									rel="noopener noreferrer"
								>
									Archives & Special Collections, Wellesley College
									<hr />
								</a>
							</Masonry>
						</div>
					</div>
				</section>
			</div>
		);
	},
})
;

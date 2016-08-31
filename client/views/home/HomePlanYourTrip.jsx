import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

HomePlanYourTrip = React.createClass({

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	render() {
		return (
			<div>
				<section id="plan-your-trip">
					<h2>Plan Your Trip</h2>
					<p>
						The venues are not within walking distance of one another,
						but all are accessible by the MBTA (the ”T”).
						Please check the “Directions and additional information” for each venue,
						as there may be changes to opening hours or parking availability on any given day:
					</p>
					<p>
						Houghton Library, Harvard University (Cambridge, MA)
					</p>
					<ul>
						<li>
							Red Line, exit at Harvard University stop, walk east on Massachusetts Ave.
						</li>
						<li>
							Hours: Mon, Fri., Sat: 9 AM - 5 PM; Tues., Wed., Thurs.: 9 AM - 7 PM; closed Sundays
						</li>
						<li>
							<a
								href="//hcl.harvard.edu/info/directions/index.cfm#houghton"
								target="_blank"
								rel="noopener noreferrer"
							>
								Directions and additional information
							</a>
						</li>
					</ul>
					<p>
						McMullen Museum, Boston College (Chestnut Hill, MA)
					</p>
					<ul>
						<li>
							Green B Line, exit at Boston College stop, walk east on Commonwealth Ave.
						</li>
						<li>
							Hours: Mon., Tues., Fri.: 10 AM - 5 PM;
							Wed., Thurs.: 10 AM - 8 PM, Sat. - Sun.: 12 - 5 PM.
						</li>
						<li>
							<a
								href="//www.bc.edu/sites/artmuseum/visit/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Directions and additional information
							</a>
						</li>
					</ul>
					<p>
					Isabella Stewart Gardner (Boston, MA)
					</p>
					<ul>
						<li>
							Green E Line, exit at the Museum of Fine Arts stop
						</li>
						<li>
							Hours: Mon, Wed., Fri., Sat., Sun.: 11 am–5 pm; Thurs.: 11 AM - 9 PM; Tues.: closed
						</li>
						<li>
							<a
								href="//www.gardnermuseum.org/visit"
								target="_blank"
								rel="noopener noreferrer"
							>
								Directions and additional information
							</a>
						</li>
					</ul>
				</section>
			</div>
		);
	},
})
;

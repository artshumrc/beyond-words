
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

FiltersWidget = React.createClass({

  propTypes: {
    filters: React.PropTypes.array.isRequired,
		toggleSearchTerm: React.PropTypes.func
	},

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  },

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

  render(){
		var self = this;

		return(

      	<div className="filters">
					{this.props.filters.map((filter, i) => {
						return (["lineFrom", "lineTo"].indexOf(filter.key) < 0) ?
		      		<div
								key={i}
								className={"filter filter-" + filter.key}
								 >
		      			<span className="filter-key paper-shadow">{filter.key}</span>
									{filter.values.map((val, j) => {
											if(["dateFrom", "dateTo"].indexOf(filter.key) >= 0){
						      			return <RaisedButton
													key={j}
													labelPosition="before"
													className="filter-val "
													label={val.title || val.name || val}
													>
						      			</RaisedButton>

											}else {
						      			return <RaisedButton
													key={j}
													labelPosition="before"
													className="filter-val "
													label={val.title || val.name || val}
					      				  onClick={self.props.toggleSearchTerm.bind(null, filter.key, val)}
													>

						      				<i className="mdi mdi-close"></i>
						      			</RaisedButton>

											}
									})}


		      		</div>
						: ""

					})}

      	</div>


		);
	}

});


import '../../node_modules/ion-rangeslider/js/ion.rangeSlider.js';
import '../../node_modules/ion-rangeslider/css/ion.rangeSlider.css';
import '../../node_modules/ion-rangeslider/css/ion.rangeSlider.skinFlat.css';
import {debounce} from 'throttle-debounce';


DateRangeSlider = React.createClass({

	propTypes: {
		handleChangeLineN: React.PropTypes.func.isRequired
	},

	componentDidMount(){
		$("#date-range").ionRangeSlider({
			type: "double",
			min: 1000,
			max: 1700,
			grid: true,
			prettify_enabled: true,
			prettify_separator: ",",
			prefix: "Date: ",
			values_separator: " to ",
			onChange:debounce(500, this.props.handleChangeDate)

		});

	},

	render(){
		return (
				<div id="date-range"></div>
		);
	}

});

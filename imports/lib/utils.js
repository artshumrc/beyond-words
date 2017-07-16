
import Config from '/imports/lib/config/config';

const Utils = {
	prettyDate: (date) => {
		if (date) {
			if (Config.dateFormat) {
				return moment(date).format(Config.dateFormat);
			}
			return moment(date).format('D/M/YYYY');
		}
		return null;
	},
	trunc: (str, length) => {
		const ending = '...';
		let validLength;
		if (length == null) {
			validLength = 100;
		} else {
			validLength = length;
		}

		if (str.length > validLength) {
			return str.substring(0, validLength - ending.length) + ending;
		}
		return str;
	},

	timeSince: (date) => {
		let interval;
		let seconds;
		if (date) {
			seconds = Math.floor((new Date() - date) / 1000);
			interval = Math.floor(seconds / 31536000);
			if (interval > 1) {
				return `${interval} years ago`;
			}
			interval = Math.floor(seconds / 2592000);
			if (interval > 1) {
				return `${interval} months ago`;
			}
			interval = Math.floor(seconds / 86400);
			if (interval > 1) {
				return `${interval} days ago`;
			}
			interval = Math.floor(seconds / 3600);
			if (interval > 1) {
				return `${interval} hours ago`;
			}
			interval = Math.floor(seconds / 60);
			if (interval > 1) {
				return `${interval} minutes ago`;
			}
			return 'just now';
		}
		return null;
	},
	isMobile: () =>
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	loginRequired: () => Router.go('/sign-in'),
	scroll_to_top: () => $('html,body').animate({ scrollTop: $('body').offset().top }, 500),
	scroll_to_elem: selector =>
		$('html,body').animate({ scrollTop: $(selector).offset().top }, 500),
	init_headroom: () => {
		const headroom = new Headroom(document.getElementById('header'));
		return headroom.init();
	},
	filtersToQuery(filters=[]) {
		const query = {};

		// Parse the filters to the query
		filters.forEach((filter) => {
			const date = moment(`${filter.values[0]}-01-01`, 'YYYY MM DD');
			switch (filter.key) {
			case 'textsearch':
				query.$text = { $search: filter.values[0] };
				break;

			case 'catalogNumber':
				query.catalog_n = parseInt(filter.values[0], 10);
				break;

			case 'hasViewer':
				query.$or = [{$where: '(this.miradorLink && this.miradorLink.length > 0) || (this.externalUrl && this.externalUrl.length > 0)'}, {hasImageViewer: true}];
				break;

			case 'scribes':
				query.scribe = { $in: filter.values };
				break;

			case 'illuminators':
				query.illuminator = { $in: filter.values };
				break;

			case 'institutions':
				query.institution = { $in: filter.values };
				break;

			case 'places':
				query.place = { $in: filter.values };
				break;

			case 'dateFrom':
				query.dateBegun = { $gte: new Date(date.toISOString()) };
				break;

			case 'dateTo':
				query.dateEnded = { $lte: new Date(date.toISOString()) };
				break;
			default:
				// do nothing
			}
		});

		return query;
	},
};
export default Utils;

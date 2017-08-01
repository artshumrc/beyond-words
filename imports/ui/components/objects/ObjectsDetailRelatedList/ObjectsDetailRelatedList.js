import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import Objects from '/imports/api/collections/objects';
import ObjectTeaser from '/imports/ui/components/objects/ObjectTeaser';

const ObjectsDetailRelatedList = props => (
	<div className="objects-detail-scroll">
		<div className="objects-detail-scroll-inner clear">
			{props.objects.map((_object, i) => (
				<div
					key={i}
					className="object-scroll-teaser">
					<ObjectTeaser
						object={_object}
					/>
				</div>
			))}
		</div>
	</div>
);

const objectsDetailRelatedListContainer = createContainer(() => {
	let objects = [];

	const handle = Meteor.subscribe('objects', {}, 0, 36);
	if (handle.ready()) {
		objects = Objects.find().fetch();
	}

	return {
		objects,
	};

}, ObjectsDetailRelatedList);

export default objectsDetailRelatedListContainer;

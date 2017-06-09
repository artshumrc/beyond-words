import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import slugify from 'slugify';

import Commenters from '/imports/api/collections/commenters';

function parseJSONLiteral(ast) {
	switch (ast.kind) {
	case Kind.STRING:
	case Kind.BOOLEAN:
		return ast.value;
	case Kind.INT:
	case Kind.FLOAT:
		return parseFloat(ast.value);
	case Kind.OBJECT: {
		const value = Object.create(null);
		ast.fields.forEach(field => {
			value[field.name.value] = parseJSONLiteral(field.value);
		});

		return value;
	}
	case Kind.LIST:
		return ast.values.map(parseJSONLiteral);
	default:
		return null;
	}
}

// create the resolve functions for the available GraphQL queries
const resolvers = {
	Query: {
		commenters(_, args) {

			return Commenters.find().fetch();
		},
	},

	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Date custom scalar type',
		parseValue(value) {
			return new Date(value); // value from the client
		},
		serialize(value) {
			return value.getTime(); // value sent to the client
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return parseInt(ast.value, 10); // ast value is always in string format
			}
			return null;
		},
	}),

	JSON: {
		__parseLiteral: parseJSONLiteral,
		__serialize: value => value,
		__parseValue: value => value,
	},
};

export default resolvers;

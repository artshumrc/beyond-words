import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Objects from '/imports/api/collections/objects';

const objectSchema = SchemaBridge.schema(
	Objects.schema,
	'Object',
	{ wrap: false },
);


const typeDefs = [`

scalar JSON
scalar Date

type Object {
	catalog_n: Int,
}

type Query {

	objects(_id: String, catalog_n: String, author_title: String, shelfmark: String, former_shelfmark: String, description: String, dateBegun: Date, dateEnded: Date, illuminator: String, scribe: String, printer: String, institution: String, collection: String, place: String, hasImageViewer: Boolean, notes: String): [Object]

}

schema {
  query: Query
}
`];

export default typeDefs;

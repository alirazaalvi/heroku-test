// schema.ts
import 'graphql-import-node';
import { typeDef as user } from './user/userSchema';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './user/userResolverMap';
import { GraphQLSchema } from 'graphql';
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [ user ],
  resolvers: [ resolvers ],
});
export default schema;

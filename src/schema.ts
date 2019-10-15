// schema.ts
import 'graphql-import-node';
import { typeDef as baseSchema } from './baseSchema';
import { typeDef as userSchema } from './user/userSchema';
import { typeDef as todoSchema } from './todo/todoSchema';
import { makeExecutableSchema } from 'graphql-tools';
import { resolverMap as baseResolver } from './baseSchema';
import { resolverMap as userResolver } from './user/userResolver';
import { resolverMap as todoResolver } from './todo/todoResolver';
import { GraphQLSchema } from 'graphql';
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [ baseSchema, userSchema, todoSchema ],
  resolvers: [ baseResolver, userResolver, todoResolver ],
});
export default schema;

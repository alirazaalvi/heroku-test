import { IResolvers } from 'graphql-tools';

export const typeDef = `
type Query {
  base: String
}`;

export const resolverMap: IResolvers = {
  Query: {
    base: () => '',
  }
}

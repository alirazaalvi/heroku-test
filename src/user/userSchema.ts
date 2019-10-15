export const typeDef = `
extend type Query {
  users: [User],
  getUser(email: String!): User
}

type User {
  id: Int!,
  firstName: String!,
  lastName: String!,
  email: String!,
  phoneNumber: String!,
  mobileNumber: String!,
}`;

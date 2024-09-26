export const typeDefs = `
  type Query {
    getUserBalance(userId: String!): Int
  }

  type Mutation {
    incrementCoins(userId: String!): Int
  }
`;

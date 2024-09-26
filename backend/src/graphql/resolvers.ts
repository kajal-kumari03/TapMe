export const resolvers = {
  Query: {
    getUserBalance: async (_: any, { userId }: { userId: string }) => {
      // Your business logic here
    },
  },
  Mutation: {
    incrementCoins: async (_: any, { userId }: { userId: string }) => {
      // Your business logic here
    },
  },
};

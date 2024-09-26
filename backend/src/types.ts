export interface Resolvers {
    Query: {
      getUserBalance: (_: any, args: { userId: string }) => Promise<number>;
    };
    Mutation: {
      incrementCoins: (_: any, args: { userId: string }) => Promise<number>;
    };
  }
  
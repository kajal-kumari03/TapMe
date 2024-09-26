import { createServer } from 'http'; // This should work after fixing types
import { createYoga, createSchema } from 'graphql-yoga';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
// Create GraphQL schema using typeDefs and resolvers
const schema = createSchema({
    typeDefs,
    resolvers,
});
// Create Yoga GraphQL server
const yoga = createYoga({ schema });
// Create and start the HTTP server
const server = createServer(yoga);
server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});

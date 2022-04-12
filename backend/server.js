const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } =  require('./config.js') 

// This function will create a new server Apollo Server instance
module.exports.createApolloServer = async (options = { port: 5000 }) => {
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const url = `http://localhost:${options.port}${server.graphqlPath}`

  const serverInfo = await server.listen(options);
  if (process.env.NODE_ENV !== 'test') {
    console.log(
      `🚀 Query endpoint ready at ${url}`,
    );
  }

  mongoose
  .connect(MONGODB, { useNewUrlParser: true})
  .then(() => {
      return serverInfo;
  })
};
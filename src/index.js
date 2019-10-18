const express = require('express');
const expressGQL = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const rootResolver = {
  message: () => 'Hello world!'
};

const app = express();
app.use('/graphql', expressGQL({
  schema,
  rootValue: rootResolver,
  graphiql: true
}));

app.listen(4000, console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
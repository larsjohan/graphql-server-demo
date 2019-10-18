const db = require('./api');
const express = require('express');
const expressGQL = require('express-graphql');
const { buildSchema } = require('graphql');
const api = new db.Api();

// The GraphQL schema which should be attached to the specific endpoint
let schema = buildSchema(`
    type Query {
        superHero(id: Int!): SuperHero
        superHeroes: [SuperHero]
    },
    type SuperHero {
        pageid: Int
        name: String
        urlslug: String
        id: String
        align: String
        eye: String
        hair: String
        sex: String
        gsm: String
        alive: String
        appearances: Int
        firstappearance: String
        year: Int
    }
`);

// The root resolver object (contains the mapping of actions to functions)
let rootResolverObj = {
  superHeroes: () => api.getAll(),
  superHero: args => api.getOne(args.id)
};

const app = express();
app.use('/graphql', expressGQL({
  schema,
  rootValue: rootResolverObj,
  graphiql: true
}));

app.listen(4000, console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
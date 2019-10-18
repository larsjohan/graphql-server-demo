// import db2 from "database";
const db2 = require('./database');
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
        superHeroByHairColor(color: String!): [SuperHero]
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

// query getSuperHeroByHairColor($color: String!) {
//   superHeroByHairColor(color: $color) {
//     name
//     EYE
//     HAIR
//     SEX
//   }
// }

// {
//   "color":"Brown Hair"
// }

//
// Endpoint functions
let getSuperHeroByHairColor = (args) => {
  let hairColor = args.color;
  return api.getAll().filter((hero) => hero.hair === hairColor)
};

// The root resolver object (contains the mapping of actions to functions)
let rootResolverObj = {
 Query: {
  superHeroes: () => db2.data.findAll(),
  superHero: args => db2.data.getOne(args.id)},
  SuperHero:{
   name: async (args.id) => db2.name.findByPk()
  }
};

const app = express();
app.use('/graphql', expressGQL({
  schema,
  rootValue: rootResolverObj,
  graphiql: true
}));

app.listen(4000, console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
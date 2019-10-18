const express = require('express');
const expressGQL = require('express-graphql');
const { buildSchema } = require('graphql');

let superHeroes = require('../var/data/marvel-wikia-data');

// The GraphQL schema which should be attached to the specific endpoint
let schema = buildSchema(`
    type Query {
        superHeroByHairColor(color: String!): [SuperHero]
    },
    type SuperHero: {
        page_id: Int,
        name: String,
        urlslug: String,
        ID: String,
        ALIGN: String,
        EYE: String,
        HAIR: String,
        SEX: String,
        GSM: String,
        ALIVE: String,
        APPEARANCES: Int,
        FIRST APPEARANCE: String,
        Year: Int
    }
`);

// The root resolver object (contains the mapping of actions to functions)
let rootResolverObj = {
  getSuperHeroByHairColor: (color) => superHeroes.map((hero) => hero.HAIR === color)
};

const app = express();
app.use('/graphql', expressGQL({
  schema,
  rootValue: rootResolverObj,
  graphiql: true
}));

app.listen(4000, console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
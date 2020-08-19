import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { createDatabase } from './database';
import { getRootResolver } from './resolvers';

// Schema/Type definition
const schema = buildSchema(`
  type Movie {
    id: ID!
    name: String!
    genre: String!
    year: Int!
  }

  type User {
    id: ID!
    nickname: String!
    email: String!
    myList: [Movie]
  }

  type Mutation {
    createMovie(name: String!, genre: String!, year: Int!): ID
    createUser(nickname: String!, email: String!): ID
    addMovieToUserList(movieId: ID!, userId: ID!): User
    removeMovieFromUserList(movieId: ID!, userId: ID!): User
  }

  type Query {
    movie(id: ID!): Movie
    movies: [Movie]
    user(id: ID!): User
    users: [User]
  }
`);

const database = createDatabase();

// Resolvers declaration
const rootResolver = getRootResolver(database);

// Server initialization
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({ schema, rootValue: rootResolver, graphiql: true }),
);

app.listen(4000, () =>
  console.log('Running a GraphQL API server at http://localhost:4000/graphql'),
);

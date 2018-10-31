import { ApolloServer, gql } from 'apollo-server'
import { Prisma } from './generated/prisma'
import { importSchema } from 'graphql-import';

import resolvers from './resolvers'

const importedTypeDefs = importSchema(__dirname + '/schema.graphql');
const typeDefs = gql`${importedTypeDefs}`

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
    }),
  }),
})
server.listen({ port: 4000 }).then(() => console.log('Server is running on http://localhost:4000'))

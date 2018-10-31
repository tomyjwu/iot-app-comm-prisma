import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningDetailses: <T = RunningDetails[]>(args: { where?: RunningDetailsWhereInput, orderBy?: RunningDetailsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    geoPoints: <T = GeoPoint[]>(args: { where?: GeoPointWhereInput, orderBy?: GeoPointOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningGeoSegments: <T = RunningGeoSegment[]>(args: { where?: RunningGeoSegmentWhereInput, orderBy?: RunningGeoSegmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningGeoPoints: <T = RunningGeoPoint[]>(args: { where?: RunningGeoPointWhereInput, orderBy?: RunningGeoPointOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningTimeSegments: <T = RunningTimeSegment[]>(args: { where?: RunningTimeSegmentWhereInput, orderBy?: RunningTimeSegmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningDetails: <T = RunningDetails | null>(args: { where: RunningDetailsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningGeoSegment: <T = RunningGeoSegment | null>(args: { where: RunningGeoSegmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningGeoPoint: <T = RunningGeoPoint | null>(args: { where: RunningGeoPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningDetailsesConnection: <T = RunningDetailsConnection>(args: { where?: RunningDetailsWhereInput, orderBy?: RunningDetailsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    geoPointsConnection: <T = GeoPointConnection>(args: { where?: GeoPointWhereInput, orderBy?: GeoPointOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningGeoSegmentsConnection: <T = RunningGeoSegmentConnection>(args: { where?: RunningGeoSegmentWhereInput, orderBy?: RunningGeoSegmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningGeoPointsConnection: <T = RunningGeoPointConnection>(args: { where?: RunningGeoPointWhereInput, orderBy?: RunningGeoPointOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningTimeSegmentsConnection: <T = RunningTimeSegmentConnection>(args: { where?: RunningTimeSegmentWhereInput, orderBy?: RunningTimeSegmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRunningDetails: <T = RunningDetails>(args: { data: RunningDetailsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGeoPoint: <T = GeoPoint>(args: { data: GeoPointCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRunningGeoSegment: <T = RunningGeoSegment>(args: { data: RunningGeoSegmentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRunningGeoPoint: <T = RunningGeoPoint>(args: { data: RunningGeoPointCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRunningTimeSegment: <T = RunningTimeSegment>(args: { data: RunningTimeSegmentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRunningDetails: <T = RunningDetails | null>(args: { data: RunningDetailsUpdateInput, where: RunningDetailsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRunningGeoSegment: <T = RunningGeoSegment | null>(args: { data: RunningGeoSegmentUpdateInput, where: RunningGeoSegmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRunningGeoPoint: <T = RunningGeoPoint | null>(args: { data: RunningGeoPointUpdateInput, where: RunningGeoPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRunningDetails: <T = RunningDetails | null>(args: { where: RunningDetailsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRunningGeoSegment: <T = RunningGeoSegment | null>(args: { where: RunningGeoSegmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRunningGeoPoint: <T = RunningGeoPoint | null>(args: { where: RunningGeoPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRunningDetails: <T = RunningDetails>(args: { where: RunningDetailsWhereUniqueInput, create: RunningDetailsCreateInput, update: RunningDetailsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRunningGeoSegment: <T = RunningGeoSegment>(args: { where: RunningGeoSegmentWhereUniqueInput, create: RunningGeoSegmentCreateInput, update: RunningGeoSegmentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRunningGeoPoint: <T = RunningGeoPoint>(args: { where: RunningGeoPointWhereUniqueInput, create: RunningGeoPointCreateInput, update: RunningGeoPointUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateManyMutationInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRunningDetailses: <T = BatchPayload>(args: { data: RunningDetailsUpdateManyMutationInput, where?: RunningDetailsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGeoPoints: <T = BatchPayload>(args: { data: GeoPointUpdateManyMutationInput, where?: GeoPointWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRunningGeoSegments: <T = BatchPayload>(args: { data: RunningGeoSegmentUpdateManyMutationInput, where?: RunningGeoSegmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRunningGeoPoints: <T = BatchPayload>(args: { data: RunningGeoPointUpdateManyMutationInput, where?: RunningGeoPointWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRunningTimeSegments: <T = BatchPayload>(args: { data: RunningTimeSegmentUpdateManyMutationInput, where?: RunningTimeSegmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRunningDetailses: <T = BatchPayload>(args: { where?: RunningDetailsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGeoPoints: <T = BatchPayload>(args: { where?: GeoPointWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRunningGeoSegments: <T = BatchPayload>(args: { where?: RunningGeoSegmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRunningGeoPoints: <T = BatchPayload>(args: { where?: RunningGeoPointWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRunningTimeSegments: <T = BatchPayload>(args: { where?: RunningTimeSegmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    runningDetails: <T = RunningDetailsSubscriptionPayload | null>(args: { where?: RunningDetailsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    geoPoint: <T = GeoPointSubscriptionPayload | null>(args: { where?: GeoPointSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    runningGeoSegment: <T = RunningGeoSegmentSubscriptionPayload | null>(args: { where?: RunningGeoSegmentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    runningGeoPoint: <T = RunningGeoPointSubscriptionPayload | null>(args: { where?: RunningGeoPointSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    runningTimeSegment: <T = RunningTimeSegmentSubscriptionPayload | null>(args: { where?: RunningTimeSegmentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  RunningDetails: (where?: RunningDetailsWhereInput) => Promise<boolean>
  GeoPoint: (where?: GeoPointWhereInput) => Promise<boolean>
  RunningGeoSegment: (where?: RunningGeoSegmentWhereInput) => Promise<boolean>
  RunningGeoPoint: (where?: RunningGeoPointWhereInput) => Promise<boolean>
  RunningTimeSegment: (where?: RunningTimeSegmentWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateGeoPoint {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateRunningDetails {
  count: Int!
}

type AggregateRunningGeoPoint {
  count: Int!
}

type AggregateRunningGeoSegment {
  count: Int!
}

type AggregateRunningTimeSegment {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type GeoPoint {
  longitude: String!
  latitude: String!
}

"""A connection to a list of items."""
type GeoPointConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GeoPointEdge]!
  aggregate: AggregateGeoPoint!
}

input GeoPointCreateInput {
  longitude: String!
  latitude: String!
}

"""An edge in a connection."""
type GeoPointEdge {
  """The item at the end of the edge."""
  node: GeoPoint!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GeoPointOrderByInput {
  longitude_ASC
  longitude_DESC
  latitude_ASC
  latitude_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type GeoPointPreviousValues {
  longitude: String!
  latitude: String!
}

type GeoPointSubscriptionPayload {
  mutation: MutationType!
  node: GeoPoint
  updatedFields: [String!]
  previousValues: GeoPointPreviousValues
}

input GeoPointSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GeoPointSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GeoPointSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GeoPointSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GeoPointWhereInput
}

input GeoPointUpdateManyMutationInput {
  longitude: String
  latitude: String
}

input GeoPointWhereInput {
  """Logical AND on all given filters."""
  AND: [GeoPointWhereInput!]

  """Logical OR on all given filters."""
  OR: [GeoPointWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GeoPointWhereInput!]
  longitude: String

  """All values that are not equal to given value."""
  longitude_not: String

  """All values that are contained in given list."""
  longitude_in: [String!]

  """All values that are not contained in given list."""
  longitude_not_in: [String!]

  """All values less than the given value."""
  longitude_lt: String

  """All values less than or equal the given value."""
  longitude_lte: String

  """All values greater than the given value."""
  longitude_gt: String

  """All values greater than or equal the given value."""
  longitude_gte: String

  """All values containing the given string."""
  longitude_contains: String

  """All values not containing the given string."""
  longitude_not_contains: String

  """All values starting with the given string."""
  longitude_starts_with: String

  """All values not starting with the given string."""
  longitude_not_starts_with: String

  """All values ending with the given string."""
  longitude_ends_with: String

  """All values not ending with the given string."""
  longitude_not_ends_with: String
  latitude: String

  """All values that are not equal to given value."""
  latitude_not: String

  """All values that are contained in given list."""
  latitude_in: [String!]

  """All values that are not contained in given list."""
  latitude_not_in: [String!]

  """All values less than the given value."""
  latitude_lt: String

  """All values less than or equal the given value."""
  latitude_lte: String

  """All values greater than the given value."""
  latitude_gt: String

  """All values greater than or equal the given value."""
  latitude_gte: String

  """All values containing the given string."""
  latitude_contains: String

  """All values not containing the given string."""
  latitude_not_contains: String

  """All values starting with the given string."""
  latitude_starts_with: String

  """All values not starting with the given string."""
  latitude_not_starts_with: String

  """All values ending with the given string."""
  latitude_ends_with: String

  """All values not ending with the given string."""
  latitude_not_ends_with: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createRunningDetails(data: RunningDetailsCreateInput!): RunningDetails!
  createGeoPoint(data: GeoPointCreateInput!): GeoPoint!
  createRunningGeoSegment(data: RunningGeoSegmentCreateInput!): RunningGeoSegment!
  createRunningGeoPoint(data: RunningGeoPointCreateInput!): RunningGeoPoint!
  createRunningTimeSegment(data: RunningTimeSegmentCreateInput!): RunningTimeSegment!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateRunningDetails(data: RunningDetailsUpdateInput!, where: RunningDetailsWhereUniqueInput!): RunningDetails
  updateRunningGeoSegment(data: RunningGeoSegmentUpdateInput!, where: RunningGeoSegmentWhereUniqueInput!): RunningGeoSegment
  updateRunningGeoPoint(data: RunningGeoPointUpdateInput!, where: RunningGeoPointWhereUniqueInput!): RunningGeoPoint
  deletePost(where: PostWhereUniqueInput!): Post
  deleteRunningDetails(where: RunningDetailsWhereUniqueInput!): RunningDetails
  deleteRunningGeoSegment(where: RunningGeoSegmentWhereUniqueInput!): RunningGeoSegment
  deleteRunningGeoPoint(where: RunningGeoPointWhereUniqueInput!): RunningGeoPoint
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertRunningDetails(where: RunningDetailsWhereUniqueInput!, create: RunningDetailsCreateInput!, update: RunningDetailsUpdateInput!): RunningDetails!
  upsertRunningGeoSegment(where: RunningGeoSegmentWhereUniqueInput!, create: RunningGeoSegmentCreateInput!, update: RunningGeoSegmentUpdateInput!): RunningGeoSegment!
  upsertRunningGeoPoint(where: RunningGeoPointWhereUniqueInput!, create: RunningGeoPointCreateInput!, update: RunningGeoPointUpdateInput!): RunningGeoPoint!
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  updateManyRunningDetailses(data: RunningDetailsUpdateManyMutationInput!, where: RunningDetailsWhereInput): BatchPayload!
  updateManyGeoPoints(data: GeoPointUpdateManyMutationInput!, where: GeoPointWhereInput): BatchPayload!
  updateManyRunningGeoSegments(data: RunningGeoSegmentUpdateManyMutationInput!, where: RunningGeoSegmentWhereInput): BatchPayload!
  updateManyRunningGeoPoints(data: RunningGeoPointUpdateManyMutationInput!, where: RunningGeoPointWhereInput): BatchPayload!
  updateManyRunningTimeSegments(data: RunningTimeSegmentUpdateManyMutationInput!, where: RunningTimeSegmentWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyRunningDetailses(where: RunningDetailsWhereInput): BatchPayload!
  deleteManyGeoPoints(where: GeoPointWhereInput): BatchPayload!
  deleteManyRunningGeoSegments(where: RunningGeoSegmentWhereInput): BatchPayload!
  deleteManyRunningGeoPoints(where: RunningGeoPointWhereInput): BatchPayload!
  deleteManyRunningTimeSegments(where: RunningTimeSegmentWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostUpdateManyMutationInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  runningDetailses(where: RunningDetailsWhereInput, orderBy: RunningDetailsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RunningDetails]!
  geoPoints(where: GeoPointWhereInput, orderBy: GeoPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GeoPoint]!
  runningGeoSegments(where: RunningGeoSegmentWhereInput, orderBy: RunningGeoSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RunningGeoSegment]!
  runningGeoPoints(where: RunningGeoPointWhereInput, orderBy: RunningGeoPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RunningGeoPoint]!
  runningTimeSegments(where: RunningTimeSegmentWhereInput, orderBy: RunningTimeSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RunningTimeSegment]!
  post(where: PostWhereUniqueInput!): Post
  runningDetails(where: RunningDetailsWhereUniqueInput!): RunningDetails
  runningGeoSegment(where: RunningGeoSegmentWhereUniqueInput!): RunningGeoSegment
  runningGeoPoint(where: RunningGeoPointWhereUniqueInput!): RunningGeoPoint
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  runningDetailsesConnection(where: RunningDetailsWhereInput, orderBy: RunningDetailsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RunningDetailsConnection!
  geoPointsConnection(where: GeoPointWhereInput, orderBy: GeoPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GeoPointConnection!
  runningGeoSegmentsConnection(where: RunningGeoSegmentWhereInput, orderBy: RunningGeoSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RunningGeoSegmentConnection!
  runningGeoPointsConnection(where: RunningGeoPointWhereInput, orderBy: RunningGeoPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RunningGeoPointConnection!
  runningTimeSegmentsConnection(where: RunningTimeSegmentWhereInput, orderBy: RunningTimeSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RunningTimeSegmentConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type RunningDetails {
  started: String
  runTimeSegments(where: RunningTimeSegmentWhereInput, orderBy: RunningTimeSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RunningTimeSegment!]
  pathSegment(where: RunningGeoSegmentWhereInput, orderBy: RunningGeoSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RunningGeoSegment!]
}

"""A connection to a list of items."""
type RunningDetailsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RunningDetailsEdge]!
  aggregate: AggregateRunningDetails!
}

input RunningDetailsCreateInput {
  started: String
  runTimeSegments: RunningTimeSegmentCreateManyInput
  pathSegment: RunningGeoSegmentCreateManyInput
}

"""An edge in a connection."""
type RunningDetailsEdge {
  """The item at the end of the edge."""
  node: RunningDetails!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RunningDetailsOrderByInput {
  started_ASC
  started_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RunningDetailsPreviousValues {
  started: String
}

type RunningDetailsSubscriptionPayload {
  mutation: MutationType!
  node: RunningDetails
  updatedFields: [String!]
  previousValues: RunningDetailsPreviousValues
}

input RunningDetailsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RunningDetailsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RunningDetailsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RunningDetailsSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RunningDetailsWhereInput
}

input RunningDetailsUpdateInput {
  started: String
  runTimeSegments: RunningTimeSegmentUpdateManyInput
  pathSegment: RunningGeoSegmentUpdateManyInput
}

input RunningDetailsUpdateManyMutationInput {
  started: String
}

input RunningDetailsWhereInput {
  """Logical AND on all given filters."""
  AND: [RunningDetailsWhereInput!]

  """Logical OR on all given filters."""
  OR: [RunningDetailsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RunningDetailsWhereInput!]
  started: String

  """All values that are not equal to given value."""
  started_not: String

  """All values that are contained in given list."""
  started_in: [String!]

  """All values that are not contained in given list."""
  started_not_in: [String!]

  """All values less than the given value."""
  started_lt: String

  """All values less than or equal the given value."""
  started_lte: String

  """All values greater than the given value."""
  started_gt: String

  """All values greater than or equal the given value."""
  started_gte: String

  """All values containing the given string."""
  started_contains: String

  """All values not containing the given string."""
  started_not_contains: String

  """All values starting with the given string."""
  started_starts_with: String

  """All values not starting with the given string."""
  started_not_starts_with: String

  """All values ending with the given string."""
  started_ends_with: String

  """All values not ending with the given string."""
  started_not_ends_with: String
  runTimeSegments_every: RunningTimeSegmentWhereInput
  runTimeSegments_some: RunningTimeSegmentWhereInput
  runTimeSegments_none: RunningTimeSegmentWhereInput
  pathSegment_every: RunningGeoSegmentWhereInput
  pathSegment_some: RunningGeoSegmentWhereInput
  pathSegment_none: RunningGeoSegmentWhereInput
}

input RunningDetailsWhereUniqueInput {
  started: String
}

type RunningGeoPoint implements Node {
  id: ID!
  longitude: String!
  latitude: String!
}

"""A connection to a list of items."""
type RunningGeoPointConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RunningGeoPointEdge]!
  aggregate: AggregateRunningGeoPoint!
}

input RunningGeoPointCreateInput {
  longitude: String!
  latitude: String!
}

input RunningGeoPointCreateOneInput {
  create: RunningGeoPointCreateInput
  connect: RunningGeoPointWhereUniqueInput
}

"""An edge in a connection."""
type RunningGeoPointEdge {
  """The item at the end of the edge."""
  node: RunningGeoPoint!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RunningGeoPointOrderByInput {
  id_ASC
  id_DESC
  longitude_ASC
  longitude_DESC
  latitude_ASC
  latitude_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RunningGeoPointPreviousValues {
  id: ID!
  longitude: String!
  latitude: String!
}

type RunningGeoPointSubscriptionPayload {
  mutation: MutationType!
  node: RunningGeoPoint
  updatedFields: [String!]
  previousValues: RunningGeoPointPreviousValues
}

input RunningGeoPointSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RunningGeoPointSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RunningGeoPointSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RunningGeoPointSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RunningGeoPointWhereInput
}

input RunningGeoPointUpdateDataInput {
  longitude: String
  latitude: String
}

input RunningGeoPointUpdateInput {
  longitude: String
  latitude: String
}

input RunningGeoPointUpdateManyMutationInput {
  longitude: String
  latitude: String
}

input RunningGeoPointUpdateOneInput {
  create: RunningGeoPointCreateInput
  connect: RunningGeoPointWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: RunningGeoPointUpdateDataInput
  upsert: RunningGeoPointUpsertNestedInput
}

input RunningGeoPointUpsertNestedInput {
  update: RunningGeoPointUpdateDataInput!
  create: RunningGeoPointCreateInput!
}

input RunningGeoPointWhereInput {
  """Logical AND on all given filters."""
  AND: [RunningGeoPointWhereInput!]

  """Logical OR on all given filters."""
  OR: [RunningGeoPointWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RunningGeoPointWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  longitude: String

  """All values that are not equal to given value."""
  longitude_not: String

  """All values that are contained in given list."""
  longitude_in: [String!]

  """All values that are not contained in given list."""
  longitude_not_in: [String!]

  """All values less than the given value."""
  longitude_lt: String

  """All values less than or equal the given value."""
  longitude_lte: String

  """All values greater than the given value."""
  longitude_gt: String

  """All values greater than or equal the given value."""
  longitude_gte: String

  """All values containing the given string."""
  longitude_contains: String

  """All values not containing the given string."""
  longitude_not_contains: String

  """All values starting with the given string."""
  longitude_starts_with: String

  """All values not starting with the given string."""
  longitude_not_starts_with: String

  """All values ending with the given string."""
  longitude_ends_with: String

  """All values not ending with the given string."""
  longitude_not_ends_with: String
  latitude: String

  """All values that are not equal to given value."""
  latitude_not: String

  """All values that are contained in given list."""
  latitude_in: [String!]

  """All values that are not contained in given list."""
  latitude_not_in: [String!]

  """All values less than the given value."""
  latitude_lt: String

  """All values less than or equal the given value."""
  latitude_lte: String

  """All values greater than the given value."""
  latitude_gt: String

  """All values greater than or equal the given value."""
  latitude_gte: String

  """All values containing the given string."""
  latitude_contains: String

  """All values not containing the given string."""
  latitude_not_contains: String

  """All values starting with the given string."""
  latitude_starts_with: String

  """All values not starting with the given string."""
  latitude_not_starts_with: String

  """All values ending with the given string."""
  latitude_ends_with: String

  """All values not ending with the given string."""
  latitude_not_ends_with: String
}

input RunningGeoPointWhereUniqueInput {
  id: ID
}

type RunningGeoSegment implements Node {
  id: ID!
  startPoint: RunningGeoPoint
  endPoint: RunningGeoPoint
  distance: Float
}

"""A connection to a list of items."""
type RunningGeoSegmentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RunningGeoSegmentEdge]!
  aggregate: AggregateRunningGeoSegment!
}

input RunningGeoSegmentCreateInput {
  distance: Float
  startPoint: RunningGeoPointCreateOneInput
  endPoint: RunningGeoPointCreateOneInput
}

input RunningGeoSegmentCreateManyInput {
  create: [RunningGeoSegmentCreateInput!]
  connect: [RunningGeoSegmentWhereUniqueInput!]
}

"""An edge in a connection."""
type RunningGeoSegmentEdge {
  """The item at the end of the edge."""
  node: RunningGeoSegment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RunningGeoSegmentOrderByInput {
  id_ASC
  id_DESC
  distance_ASC
  distance_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RunningGeoSegmentPreviousValues {
  id: ID!
  distance: Float
}

type RunningGeoSegmentSubscriptionPayload {
  mutation: MutationType!
  node: RunningGeoSegment
  updatedFields: [String!]
  previousValues: RunningGeoSegmentPreviousValues
}

input RunningGeoSegmentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RunningGeoSegmentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RunningGeoSegmentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RunningGeoSegmentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RunningGeoSegmentWhereInput
}

input RunningGeoSegmentUpdateDataInput {
  distance: Float
  startPoint: RunningGeoPointUpdateOneInput
  endPoint: RunningGeoPointUpdateOneInput
}

input RunningGeoSegmentUpdateInput {
  distance: Float
  startPoint: RunningGeoPointUpdateOneInput
  endPoint: RunningGeoPointUpdateOneInput
}

input RunningGeoSegmentUpdateManyInput {
  create: [RunningGeoSegmentCreateInput!]
  connect: [RunningGeoSegmentWhereUniqueInput!]
  disconnect: [RunningGeoSegmentWhereUniqueInput!]
  delete: [RunningGeoSegmentWhereUniqueInput!]
  update: [RunningGeoSegmentUpdateWithWhereUniqueNestedInput!]
  upsert: [RunningGeoSegmentUpsertWithWhereUniqueNestedInput!]
}

input RunningGeoSegmentUpdateManyMutationInput {
  distance: Float
}

input RunningGeoSegmentUpdateWithWhereUniqueNestedInput {
  where: RunningGeoSegmentWhereUniqueInput!
  data: RunningGeoSegmentUpdateDataInput!
}

input RunningGeoSegmentUpsertWithWhereUniqueNestedInput {
  where: RunningGeoSegmentWhereUniqueInput!
  update: RunningGeoSegmentUpdateDataInput!
  create: RunningGeoSegmentCreateInput!
}

input RunningGeoSegmentWhereInput {
  """Logical AND on all given filters."""
  AND: [RunningGeoSegmentWhereInput!]

  """Logical OR on all given filters."""
  OR: [RunningGeoSegmentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RunningGeoSegmentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  distance: Float

  """All values that are not equal to given value."""
  distance_not: Float

  """All values that are contained in given list."""
  distance_in: [Float!]

  """All values that are not contained in given list."""
  distance_not_in: [Float!]

  """All values less than the given value."""
  distance_lt: Float

  """All values less than or equal the given value."""
  distance_lte: Float

  """All values greater than the given value."""
  distance_gt: Float

  """All values greater than or equal the given value."""
  distance_gte: Float
  startPoint: RunningGeoPointWhereInput
  endPoint: RunningGeoPointWhereInput
}

input RunningGeoSegmentWhereUniqueInput {
  id: ID
}

type RunningTimeSegment {
  startTime: String
  endTime: String
  duration: Int
}

"""A connection to a list of items."""
type RunningTimeSegmentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RunningTimeSegmentEdge]!
  aggregate: AggregateRunningTimeSegment!
}

input RunningTimeSegmentCreateInput {
  startTime: String
  endTime: String
  duration: Int
}

input RunningTimeSegmentCreateManyInput {
  create: [RunningTimeSegmentCreateInput!]
}

"""An edge in a connection."""
type RunningTimeSegmentEdge {
  """The item at the end of the edge."""
  node: RunningTimeSegment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RunningTimeSegmentOrderByInput {
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  duration_ASC
  duration_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RunningTimeSegmentPreviousValues {
  startTime: String
  endTime: String
  duration: Int
}

type RunningTimeSegmentSubscriptionPayload {
  mutation: MutationType!
  node: RunningTimeSegment
  updatedFields: [String!]
  previousValues: RunningTimeSegmentPreviousValues
}

input RunningTimeSegmentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RunningTimeSegmentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RunningTimeSegmentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RunningTimeSegmentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RunningTimeSegmentWhereInput
}

input RunningTimeSegmentUpdateManyInput {
  create: [RunningTimeSegmentCreateInput!]
}

input RunningTimeSegmentUpdateManyMutationInput {
  startTime: String
  endTime: String
  duration: Int
}

input RunningTimeSegmentWhereInput {
  """Logical AND on all given filters."""
  AND: [RunningTimeSegmentWhereInput!]

  """Logical OR on all given filters."""
  OR: [RunningTimeSegmentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RunningTimeSegmentWhereInput!]
  startTime: String

  """All values that are not equal to given value."""
  startTime_not: String

  """All values that are contained in given list."""
  startTime_in: [String!]

  """All values that are not contained in given list."""
  startTime_not_in: [String!]

  """All values less than the given value."""
  startTime_lt: String

  """All values less than or equal the given value."""
  startTime_lte: String

  """All values greater than the given value."""
  startTime_gt: String

  """All values greater than or equal the given value."""
  startTime_gte: String

  """All values containing the given string."""
  startTime_contains: String

  """All values not containing the given string."""
  startTime_not_contains: String

  """All values starting with the given string."""
  startTime_starts_with: String

  """All values not starting with the given string."""
  startTime_not_starts_with: String

  """All values ending with the given string."""
  startTime_ends_with: String

  """All values not ending with the given string."""
  startTime_not_ends_with: String
  endTime: String

  """All values that are not equal to given value."""
  endTime_not: String

  """All values that are contained in given list."""
  endTime_in: [String!]

  """All values that are not contained in given list."""
  endTime_not_in: [String!]

  """All values less than the given value."""
  endTime_lt: String

  """All values less than or equal the given value."""
  endTime_lte: String

  """All values greater than the given value."""
  endTime_gt: String

  """All values greater than or equal the given value."""
  endTime_gte: String

  """All values containing the given string."""
  endTime_contains: String

  """All values not containing the given string."""
  endTime_not_contains: String

  """All values starting with the given string."""
  endTime_starts_with: String

  """All values not starting with the given string."""
  endTime_not_starts_with: String

  """All values ending with the given string."""
  endTime_ends_with: String

  """All values not ending with the given string."""
  endTime_not_ends_with: String
  duration: Int

  """All values that are not equal to given value."""
  duration_not: Int

  """All values that are contained in given list."""
  duration_in: [Int!]

  """All values that are not contained in given list."""
  duration_not_in: [Int!]

  """All values less than the given value."""
  duration_lt: Int

  """All values less than or equal the given value."""
  duration_lte: Int

  """All values greater than the given value."""
  duration_gt: Int

  """All values greater than or equal the given value."""
  duration_gte: Int
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  runningDetails(where: RunningDetailsSubscriptionWhereInput): RunningDetailsSubscriptionPayload
  geoPoint(where: GeoPointSubscriptionWhereInput): GeoPointSubscriptionPayload
  runningGeoSegment(where: RunningGeoSegmentSubscriptionWhereInput): RunningGeoSegmentSubscriptionPayload
  runningGeoPoint(where: RunningGeoPointSubscriptionWhereInput): RunningGeoPointSubscriptionPayload
  runningTimeSegment(where: RunningTimeSegmentSubscriptionWhereInput): RunningTimeSegmentSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type RunningDetailsOrderByInput =   'started_ASC' |
  'started_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type RunningTimeSegmentOrderByInput =   'startTime_ASC' |
  'startTime_DESC' |
  'endTime_ASC' |
  'endTime_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type RunningGeoSegmentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'distance_ASC' |
  'distance_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type GeoPointOrderByInput =   'longitude_ASC' |
  'longitude_DESC' |
  'latitude_ASC' |
  'latitude_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type RunningGeoPointOrderByInput =   'id_ASC' |
  'id_DESC' |
  'longitude_ASC' |
  'longitude_DESC' |
  'latitude_ASC' |
  'latitude_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
}

export interface RunningGeoSegmentCreateInput {
  distance?: Float
  startPoint?: RunningGeoPointCreateOneInput
  endPoint?: RunningGeoPointCreateOneInput
}

export interface RunningTimeSegmentWhereInput {
  AND?: RunningTimeSegmentWhereInput[] | RunningTimeSegmentWhereInput
  OR?: RunningTimeSegmentWhereInput[] | RunningTimeSegmentWhereInput
  NOT?: RunningTimeSegmentWhereInput[] | RunningTimeSegmentWhereInput
  startTime?: String
  startTime_not?: String
  startTime_in?: String[] | String
  startTime_not_in?: String[] | String
  startTime_lt?: String
  startTime_lte?: String
  startTime_gt?: String
  startTime_gte?: String
  startTime_contains?: String
  startTime_not_contains?: String
  startTime_starts_with?: String
  startTime_not_starts_with?: String
  startTime_ends_with?: String
  startTime_not_ends_with?: String
  endTime?: String
  endTime_not?: String
  endTime_in?: String[] | String
  endTime_not_in?: String[] | String
  endTime_lt?: String
  endTime_lte?: String
  endTime_gt?: String
  endTime_gte?: String
  endTime_contains?: String
  endTime_not_contains?: String
  endTime_starts_with?: String
  endTime_not_starts_with?: String
  endTime_ends_with?: String
  endTime_not_ends_with?: String
  duration?: Int
  duration_not?: Int
  duration_in?: Int[] | Int
  duration_not_in?: Int[] | Int
  duration_lt?: Int
  duration_lte?: Int
  duration_gt?: Int
  duration_gte?: Int
}

export interface RunningGeoPointUpdateInput {
  longitude?: String
  latitude?: String
}

export interface RunningGeoSegmentCreateManyInput {
  create?: RunningGeoSegmentCreateInput[] | RunningGeoSegmentCreateInput
  connect?: RunningGeoSegmentWhereUniqueInput[] | RunningGeoSegmentWhereUniqueInput
}

export interface RunningGeoSegmentUpdateInput {
  distance?: Float
  startPoint?: RunningGeoPointUpdateOneInput
  endPoint?: RunningGeoPointUpdateOneInput
}

export interface RunningGeoPointCreateOneInput {
  create?: RunningGeoPointCreateInput
  connect?: RunningGeoPointWhereUniqueInput
}

export interface RunningGeoSegmentUpsertWithWhereUniqueNestedInput {
  where: RunningGeoSegmentWhereUniqueInput
  update: RunningGeoSegmentUpdateDataInput
  create: RunningGeoSegmentCreateInput
}

export interface RunningTimeSegmentSubscriptionWhereInput {
  AND?: RunningTimeSegmentSubscriptionWhereInput[] | RunningTimeSegmentSubscriptionWhereInput
  OR?: RunningTimeSegmentSubscriptionWhereInput[] | RunningTimeSegmentSubscriptionWhereInput
  NOT?: RunningTimeSegmentSubscriptionWhereInput[] | RunningTimeSegmentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RunningTimeSegmentWhereInput
}

export interface RunningGeoPointUpsertNestedInput {
  update: RunningGeoPointUpdateDataInput
  create: RunningGeoPointCreateInput
}

export interface RunningGeoPointSubscriptionWhereInput {
  AND?: RunningGeoPointSubscriptionWhereInput[] | RunningGeoPointSubscriptionWhereInput
  OR?: RunningGeoPointSubscriptionWhereInput[] | RunningGeoPointSubscriptionWhereInput
  NOT?: RunningGeoPointSubscriptionWhereInput[] | RunningGeoPointSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RunningGeoPointWhereInput
}

export interface RunningGeoPointUpdateDataInput {
  longitude?: String
  latitude?: String
}

export interface GeoPointSubscriptionWhereInput {
  AND?: GeoPointSubscriptionWhereInput[] | GeoPointSubscriptionWhereInput
  OR?: GeoPointSubscriptionWhereInput[] | GeoPointSubscriptionWhereInput
  NOT?: GeoPointSubscriptionWhereInput[] | GeoPointSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: GeoPointWhereInput
}

export interface RunningGeoPointUpdateOneInput {
  create?: RunningGeoPointCreateInput
  connect?: RunningGeoPointWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: RunningGeoPointUpdateDataInput
  upsert?: RunningGeoPointUpsertNestedInput
}

export interface GeoPointWhereInput {
  AND?: GeoPointWhereInput[] | GeoPointWhereInput
  OR?: GeoPointWhereInput[] | GeoPointWhereInput
  NOT?: GeoPointWhereInput[] | GeoPointWhereInput
  longitude?: String
  longitude_not?: String
  longitude_in?: String[] | String
  longitude_not_in?: String[] | String
  longitude_lt?: String
  longitude_lte?: String
  longitude_gt?: String
  longitude_gte?: String
  longitude_contains?: String
  longitude_not_contains?: String
  longitude_starts_with?: String
  longitude_not_starts_with?: String
  longitude_ends_with?: String
  longitude_not_ends_with?: String
  latitude?: String
  latitude_not?: String
  latitude_in?: String[] | String
  latitude_not_in?: String[] | String
  latitude_lt?: String
  latitude_lte?: String
  latitude_gt?: String
  latitude_gte?: String
  latitude_contains?: String
  latitude_not_contains?: String
  latitude_starts_with?: String
  latitude_not_starts_with?: String
  latitude_ends_with?: String
  latitude_not_ends_with?: String
}

export interface RunningGeoSegmentUpdateDataInput {
  distance?: Float
  startPoint?: RunningGeoPointUpdateOneInput
  endPoint?: RunningGeoPointUpdateOneInput
}

export interface RunningTimeSegmentUpdateManyMutationInput {
  startTime?: String
  endTime?: String
  duration?: Int
}

export interface RunningGeoSegmentUpdateWithWhereUniqueNestedInput {
  where: RunningGeoSegmentWhereUniqueInput
  data: RunningGeoSegmentUpdateDataInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface RunningGeoSegmentUpdateManyInput {
  create?: RunningGeoSegmentCreateInput[] | RunningGeoSegmentCreateInput
  connect?: RunningGeoSegmentWhereUniqueInput[] | RunningGeoSegmentWhereUniqueInput
  disconnect?: RunningGeoSegmentWhereUniqueInput[] | RunningGeoSegmentWhereUniqueInput
  delete?: RunningGeoSegmentWhereUniqueInput[] | RunningGeoSegmentWhereUniqueInput
  update?: RunningGeoSegmentUpdateWithWhereUniqueNestedInput[] | RunningGeoSegmentUpdateWithWhereUniqueNestedInput
  upsert?: RunningGeoSegmentUpsertWithWhereUniqueNestedInput[] | RunningGeoSegmentUpsertWithWhereUniqueNestedInput
}

export interface RunningGeoSegmentWhereUniqueInput {
  id?: ID_Input
}

export interface RunningTimeSegmentUpdateManyInput {
  create?: RunningTimeSegmentCreateInput[] | RunningTimeSegmentCreateInput
}

export interface RunningGeoSegmentUpdateManyMutationInput {
  distance?: Float
}

export interface RunningDetailsUpdateInput {
  started?: String
  runTimeSegments?: RunningTimeSegmentUpdateManyInput
  pathSegment?: RunningGeoSegmentUpdateManyInput
}

export interface RunningDetailsUpdateManyMutationInput {
  started?: String
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface RunningDetailsWhereInput {
  AND?: RunningDetailsWhereInput[] | RunningDetailsWhereInput
  OR?: RunningDetailsWhereInput[] | RunningDetailsWhereInput
  NOT?: RunningDetailsWhereInput[] | RunningDetailsWhereInput
  started?: String
  started_not?: String
  started_in?: String[] | String
  started_not_in?: String[] | String
  started_lt?: String
  started_lte?: String
  started_gt?: String
  started_gte?: String
  started_contains?: String
  started_not_contains?: String
  started_starts_with?: String
  started_not_starts_with?: String
  started_ends_with?: String
  started_not_ends_with?: String
  runTimeSegments_every?: RunningTimeSegmentWhereInput
  runTimeSegments_some?: RunningTimeSegmentWhereInput
  runTimeSegments_none?: RunningTimeSegmentWhereInput
  pathSegment_every?: RunningGeoSegmentWhereInput
  pathSegment_some?: RunningGeoSegmentWhereInput
  pathSegment_none?: RunningGeoSegmentWhereInput
}

export interface GeoPointCreateInput {
  longitude: String
  latitude: String
}

export interface RunningGeoSegmentSubscriptionWhereInput {
  AND?: RunningGeoSegmentSubscriptionWhereInput[] | RunningGeoSegmentSubscriptionWhereInput
  OR?: RunningGeoSegmentSubscriptionWhereInput[] | RunningGeoSegmentSubscriptionWhereInput
  NOT?: RunningGeoSegmentSubscriptionWhereInput[] | RunningGeoSegmentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RunningGeoSegmentWhereInput
}

export interface RunningGeoPointCreateInput {
  longitude: String
  latitude: String
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface RunningGeoPointWhereInput {
  AND?: RunningGeoPointWhereInput[] | RunningGeoPointWhereInput
  OR?: RunningGeoPointWhereInput[] | RunningGeoPointWhereInput
  NOT?: RunningGeoPointWhereInput[] | RunningGeoPointWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  longitude?: String
  longitude_not?: String
  longitude_in?: String[] | String
  longitude_not_in?: String[] | String
  longitude_lt?: String
  longitude_lte?: String
  longitude_gt?: String
  longitude_gte?: String
  longitude_contains?: String
  longitude_not_contains?: String
  longitude_starts_with?: String
  longitude_not_starts_with?: String
  longitude_ends_with?: String
  longitude_not_ends_with?: String
  latitude?: String
  latitude_not?: String
  latitude_in?: String[] | String
  latitude_not_in?: String[] | String
  latitude_lt?: String
  latitude_lte?: String
  latitude_gt?: String
  latitude_gte?: String
  latitude_contains?: String
  latitude_not_contains?: String
  latitude_starts_with?: String
  latitude_not_starts_with?: String
  latitude_ends_with?: String
  latitude_not_ends_with?: String
}

export interface RunningDetailsWhereUniqueInput {
  started?: String
}

export interface GeoPointUpdateManyMutationInput {
  longitude?: String
  latitude?: String
}

export interface RunningTimeSegmentCreateInput {
  startTime?: String
  endTime?: String
  duration?: Int
}

export interface RunningTimeSegmentCreateManyInput {
  create?: RunningTimeSegmentCreateInput[] | RunningTimeSegmentCreateInput
}

export interface RunningDetailsCreateInput {
  started?: String
  runTimeSegments?: RunningTimeSegmentCreateManyInput
  pathSegment?: RunningGeoSegmentCreateManyInput
}

export interface RunningGeoSegmentWhereInput {
  AND?: RunningGeoSegmentWhereInput[] | RunningGeoSegmentWhereInput
  OR?: RunningGeoSegmentWhereInput[] | RunningGeoSegmentWhereInput
  NOT?: RunningGeoSegmentWhereInput[] | RunningGeoSegmentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  distance?: Float
  distance_not?: Float
  distance_in?: Float[] | Float
  distance_not_in?: Float[] | Float
  distance_lt?: Float
  distance_lte?: Float
  distance_gt?: Float
  distance_gte?: Float
  startPoint?: RunningGeoPointWhereInput
  endPoint?: RunningGeoPointWhereInput
}

export interface PostUpdateManyMutationInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface RunningGeoPointWhereUniqueInput {
  id?: ID_Input
}

export interface RunningGeoPointUpdateManyMutationInput {
  longitude?: String
  latitude?: String
}

export interface RunningDetailsSubscriptionWhereInput {
  AND?: RunningDetailsSubscriptionWhereInput[] | RunningDetailsSubscriptionWhereInput
  OR?: RunningDetailsSubscriptionWhereInput[] | RunningDetailsSubscriptionWhereInput
  NOT?: RunningDetailsSubscriptionWhereInput[] | RunningDetailsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RunningDetailsWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface RunningTimeSegmentPreviousValues {
  startTime?: String
  endTime?: String
  duration?: Int
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface RunningTimeSegment {
  startTime?: String
  endTime?: String
  duration?: Int
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface AggregateRunningTimeSegment {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface RunningTimeSegmentConnection {
  pageInfo: PageInfo
  edges: RunningTimeSegmentEdge[]
  aggregate: AggregateRunningTimeSegment
}

export interface RunningDetails {
  started?: String
  runTimeSegments?: RunningTimeSegment[]
  pathSegment?: RunningGeoSegment[]
}

/*
 * An edge in a connection.

 */
export interface RunningGeoPointEdge {
  node: RunningGeoPoint
  cursor: String
}

export interface GeoPoint {
  longitude: String
  latitude: String
}

export interface AggregateRunningGeoSegment {
  count: Int
}

export interface RunningGeoPointPreviousValues {
  id: ID_Output
  longitude: String
  latitude: String
}

/*
 * A connection to a list of items.

 */
export interface RunningGeoSegmentConnection {
  pageInfo: PageInfo
  edges: RunningGeoSegmentEdge[]
  aggregate: AggregateRunningGeoSegment
}

export interface RunningGeoPointSubscriptionPayload {
  mutation: MutationType
  node?: RunningGeoPoint
  updatedFields?: String[]
  previousValues?: RunningGeoPointPreviousValues
}

/*
 * An edge in a connection.

 */
export interface GeoPointEdge {
  node: GeoPoint
  cursor: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface AggregateRunningDetails {
  count: Int
}

export interface PostPreviousValues {
  id: ID_Output
  isPublished: Boolean
  title: String
  text: String
}

/*
 * A connection to a list of items.

 */
export interface RunningDetailsConnection {
  pageInfo: PageInfo
  edges: RunningDetailsEdge[]
  aggregate: AggregateRunningDetails
}

export interface RunningGeoPoint extends Node {
  id: ID_Output
  longitude: String
  latitude: String
}

export interface BatchPayload {
  count: Long
}

export interface RunningDetailsSubscriptionPayload {
  mutation: MutationType
  node?: RunningDetails
  updatedFields?: String[]
  previousValues?: RunningDetailsPreviousValues
}

/*
 * An edge in a connection.

 */
export interface RunningTimeSegmentEdge {
  node: RunningTimeSegment
  cursor: String
}

export interface RunningDetailsPreviousValues {
  started?: String
}

/*
 * A connection to a list of items.

 */
export interface RunningGeoPointConnection {
  pageInfo: PageInfo
  edges: RunningGeoPointEdge[]
  aggregate: AggregateRunningGeoPoint
}

export interface RunningGeoSegment extends Node {
  id: ID_Output
  startPoint?: RunningGeoPoint
  endPoint?: RunningGeoPoint
  distance?: Float
}

export interface AggregateGeoPoint {
  count: Int
}

export interface GeoPointSubscriptionPayload {
  mutation: MutationType
  node?: GeoPoint
  updatedFields?: String[]
  previousValues?: GeoPointPreviousValues
}

/*
 * An edge in a connection.

 */
export interface RunningDetailsEdge {
  node: RunningDetails
  cursor: String
}

export interface RunningTimeSegmentSubscriptionPayload {
  mutation: MutationType
  node?: RunningTimeSegment
  updatedFields?: String[]
  previousValues?: RunningTimeSegmentPreviousValues
}

export interface RunningGeoSegmentPreviousValues {
  id: ID_Output
  distance?: Float
}

export interface RunningGeoSegmentSubscriptionPayload {
  mutation: MutationType
  node?: RunningGeoSegment
  updatedFields?: String[]
  previousValues?: RunningGeoSegmentPreviousValues
}

export interface Post extends Node {
  id: ID_Output
  isPublished: Boolean
  title: String
  text: String
}

export interface GeoPointPreviousValues {
  longitude: String
  latitude: String
}

export interface AggregateRunningGeoPoint {
  count: Int
}

export interface AggregatePost {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface GeoPointConnection {
  pageInfo: PageInfo
  edges: GeoPointEdge[]
  aggregate: AggregateGeoPoint
}

/*
 * An edge in a connection.

 */
export interface RunningGeoSegmentEdge {
  node: RunningGeoSegment
  cursor: String
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean
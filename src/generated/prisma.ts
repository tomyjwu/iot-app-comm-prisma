import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningDetailses: <T = RunningDetails[]>(args: { where?: RunningDetailsWhereInput, orderBy?: RunningDetailsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeSegments: <T = TimeSegment[]>(args: { where?: TimeSegmentWhereInput, orderBy?: TimeSegmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    geoSegments: <T = GeoSegment[]>(args: { where?: GeoSegmentWhereInput, orderBy?: GeoSegmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    geoPoints: <T = GeoPoint[]>(args: { where?: GeoPointWhereInput, orderBy?: GeoPointOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningDetails: <T = RunningDetails | null>(args: { where: RunningDetailsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    geoSegment: <T = GeoSegment | null>(args: { where: GeoSegmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    geoPoint: <T = GeoPoint | null>(args: { where: GeoPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    runningDetailsesConnection: <T = RunningDetailsConnection>(args: { where?: RunningDetailsWhereInput, orderBy?: RunningDetailsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeSegmentsConnection: <T = TimeSegmentConnection>(args: { where?: TimeSegmentWhereInput, orderBy?: TimeSegmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    geoSegmentsConnection: <T = GeoSegmentConnection>(args: { where?: GeoSegmentWhereInput, orderBy?: GeoSegmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    geoPointsConnection: <T = GeoPointConnection>(args: { where?: GeoPointWhereInput, orderBy?: GeoPointOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRunningDetails: <T = RunningDetails>(args: { data: RunningDetailsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTimeSegment: <T = TimeSegment>(args: { data: TimeSegmentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGeoSegment: <T = GeoSegment>(args: { data: GeoSegmentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGeoPoint: <T = GeoPoint>(args: { data: GeoPointCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRunningDetails: <T = RunningDetails | null>(args: { data: RunningDetailsUpdateInput, where: RunningDetailsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGeoSegment: <T = GeoSegment | null>(args: { data: GeoSegmentUpdateInput, where: GeoSegmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGeoPoint: <T = GeoPoint | null>(args: { data: GeoPointUpdateInput, where: GeoPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRunningDetails: <T = RunningDetails | null>(args: { where: RunningDetailsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGeoSegment: <T = GeoSegment | null>(args: { where: GeoSegmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGeoPoint: <T = GeoPoint | null>(args: { where: GeoPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRunningDetails: <T = RunningDetails>(args: { where: RunningDetailsWhereUniqueInput, create: RunningDetailsCreateInput, update: RunningDetailsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGeoSegment: <T = GeoSegment>(args: { where: GeoSegmentWhereUniqueInput, create: GeoSegmentCreateInput, update: GeoSegmentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGeoPoint: <T = GeoPoint>(args: { where: GeoPointWhereUniqueInput, create: GeoPointCreateInput, update: GeoPointUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateManyMutationInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRunningDetailses: <T = BatchPayload>(args: { data: RunningDetailsUpdateManyMutationInput, where?: RunningDetailsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTimeSegments: <T = BatchPayload>(args: { data: TimeSegmentUpdateManyMutationInput, where?: TimeSegmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGeoSegments: <T = BatchPayload>(args: { data: GeoSegmentUpdateManyMutationInput, where?: GeoSegmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGeoPoints: <T = BatchPayload>(args: { data: GeoPointUpdateManyMutationInput, where?: GeoPointWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRunningDetailses: <T = BatchPayload>(args: { where?: RunningDetailsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTimeSegments: <T = BatchPayload>(args: { where?: TimeSegmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGeoSegments: <T = BatchPayload>(args: { where?: GeoSegmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGeoPoints: <T = BatchPayload>(args: { where?: GeoPointWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    runningDetails: <T = RunningDetailsSubscriptionPayload | null>(args: { where?: RunningDetailsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    timeSegment: <T = TimeSegmentSubscriptionPayload | null>(args: { where?: TimeSegmentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    geoSegment: <T = GeoSegmentSubscriptionPayload | null>(args: { where?: GeoSegmentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    geoPoint: <T = GeoPointSubscriptionPayload | null>(args: { where?: GeoPointSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  RunningDetails: (where?: RunningDetailsWhereInput) => Promise<boolean>
  TimeSegment: (where?: TimeSegmentWhereInput) => Promise<boolean>
  GeoSegment: (where?: GeoSegmentWhereInput) => Promise<boolean>
  GeoPoint: (where?: GeoPointWhereInput) => Promise<boolean>
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

type AggregateGeoSegment {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateRunningDetails {
  count: Int!
}

type AggregateTimeSegment {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type GeoPoint implements Node {
  id: ID!
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

input GeoPointCreateOneInput {
  create: GeoPointCreateInput
  connect: GeoPointWhereUniqueInput
}

"""An edge in a connection."""
type GeoPointEdge {
  """The item at the end of the edge."""
  node: GeoPoint!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GeoPointOrderByInput {
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

type GeoPointPreviousValues {
  id: ID!
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

input GeoPointUpdateDataInput {
  longitude: String
  latitude: String
}

input GeoPointUpdateInput {
  longitude: String
  latitude: String
}

input GeoPointUpdateManyMutationInput {
  longitude: String
  latitude: String
}

input GeoPointUpdateOneInput {
  create: GeoPointCreateInput
  connect: GeoPointWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GeoPointUpdateDataInput
  upsert: GeoPointUpsertNestedInput
}

input GeoPointUpsertNestedInput {
  update: GeoPointUpdateDataInput!
  create: GeoPointCreateInput!
}

input GeoPointWhereInput {
  """Logical AND on all given filters."""
  AND: [GeoPointWhereInput!]

  """Logical OR on all given filters."""
  OR: [GeoPointWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GeoPointWhereInput!]
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

input GeoPointWhereUniqueInput {
  id: ID
}

type GeoSegment implements Node {
  id: ID!
  startPoint: GeoPoint
  endPoint: GeoPoint
  distance: Float
}

"""A connection to a list of items."""
type GeoSegmentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GeoSegmentEdge]!
  aggregate: AggregateGeoSegment!
}

input GeoSegmentCreateInput {
  distance: Float
  startPoint: GeoPointCreateOneInput
  endPoint: GeoPointCreateOneInput
}

input GeoSegmentCreateManyInput {
  create: [GeoSegmentCreateInput!]
  connect: [GeoSegmentWhereUniqueInput!]
}

"""An edge in a connection."""
type GeoSegmentEdge {
  """The item at the end of the edge."""
  node: GeoSegment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GeoSegmentOrderByInput {
  id_ASC
  id_DESC
  distance_ASC
  distance_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type GeoSegmentPreviousValues {
  id: ID!
  distance: Float
}

type GeoSegmentSubscriptionPayload {
  mutation: MutationType!
  node: GeoSegment
  updatedFields: [String!]
  previousValues: GeoSegmentPreviousValues
}

input GeoSegmentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GeoSegmentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GeoSegmentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GeoSegmentSubscriptionWhereInput!]

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
  node: GeoSegmentWhereInput
}

input GeoSegmentUpdateDataInput {
  distance: Float
  startPoint: GeoPointUpdateOneInput
  endPoint: GeoPointUpdateOneInput
}

input GeoSegmentUpdateInput {
  distance: Float
  startPoint: GeoPointUpdateOneInput
  endPoint: GeoPointUpdateOneInput
}

input GeoSegmentUpdateManyInput {
  create: [GeoSegmentCreateInput!]
  connect: [GeoSegmentWhereUniqueInput!]
  disconnect: [GeoSegmentWhereUniqueInput!]
  delete: [GeoSegmentWhereUniqueInput!]
  update: [GeoSegmentUpdateWithWhereUniqueNestedInput!]
  upsert: [GeoSegmentUpsertWithWhereUniqueNestedInput!]
}

input GeoSegmentUpdateManyMutationInput {
  distance: Float
}

input GeoSegmentUpdateWithWhereUniqueNestedInput {
  where: GeoSegmentWhereUniqueInput!
  data: GeoSegmentUpdateDataInput!
}

input GeoSegmentUpsertWithWhereUniqueNestedInput {
  where: GeoSegmentWhereUniqueInput!
  update: GeoSegmentUpdateDataInput!
  create: GeoSegmentCreateInput!
}

input GeoSegmentWhereInput {
  """Logical AND on all given filters."""
  AND: [GeoSegmentWhereInput!]

  """Logical OR on all given filters."""
  OR: [GeoSegmentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GeoSegmentWhereInput!]
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
  startPoint: GeoPointWhereInput
  endPoint: GeoPointWhereInput
}

input GeoSegmentWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createRunningDetails(data: RunningDetailsCreateInput!): RunningDetails!
  createTimeSegment(data: TimeSegmentCreateInput!): TimeSegment!
  createGeoSegment(data: GeoSegmentCreateInput!): GeoSegment!
  createGeoPoint(data: GeoPointCreateInput!): GeoPoint!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateRunningDetails(data: RunningDetailsUpdateInput!, where: RunningDetailsWhereUniqueInput!): RunningDetails
  updateGeoSegment(data: GeoSegmentUpdateInput!, where: GeoSegmentWhereUniqueInput!): GeoSegment
  updateGeoPoint(data: GeoPointUpdateInput!, where: GeoPointWhereUniqueInput!): GeoPoint
  deletePost(where: PostWhereUniqueInput!): Post
  deleteRunningDetails(where: RunningDetailsWhereUniqueInput!): RunningDetails
  deleteGeoSegment(where: GeoSegmentWhereUniqueInput!): GeoSegment
  deleteGeoPoint(where: GeoPointWhereUniqueInput!): GeoPoint
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertRunningDetails(where: RunningDetailsWhereUniqueInput!, create: RunningDetailsCreateInput!, update: RunningDetailsUpdateInput!): RunningDetails!
  upsertGeoSegment(where: GeoSegmentWhereUniqueInput!, create: GeoSegmentCreateInput!, update: GeoSegmentUpdateInput!): GeoSegment!
  upsertGeoPoint(where: GeoPointWhereUniqueInput!, create: GeoPointCreateInput!, update: GeoPointUpdateInput!): GeoPoint!
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  updateManyRunningDetailses(data: RunningDetailsUpdateManyMutationInput!, where: RunningDetailsWhereInput): BatchPayload!
  updateManyTimeSegments(data: TimeSegmentUpdateManyMutationInput!, where: TimeSegmentWhereInput): BatchPayload!
  updateManyGeoSegments(data: GeoSegmentUpdateManyMutationInput!, where: GeoSegmentWhereInput): BatchPayload!
  updateManyGeoPoints(data: GeoPointUpdateManyMutationInput!, where: GeoPointWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyRunningDetailses(where: RunningDetailsWhereInput): BatchPayload!
  deleteManyTimeSegments(where: TimeSegmentWhereInput): BatchPayload!
  deleteManyGeoSegments(where: GeoSegmentWhereInput): BatchPayload!
  deleteManyGeoPoints(where: GeoPointWhereInput): BatchPayload!
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
  timeSegments(where: TimeSegmentWhereInput, orderBy: TimeSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TimeSegment]!
  geoSegments(where: GeoSegmentWhereInput, orderBy: GeoSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GeoSegment]!
  geoPoints(where: GeoPointWhereInput, orderBy: GeoPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GeoPoint]!
  post(where: PostWhereUniqueInput!): Post
  runningDetails(where: RunningDetailsWhereUniqueInput!): RunningDetails
  geoSegment(where: GeoSegmentWhereUniqueInput!): GeoSegment
  geoPoint(where: GeoPointWhereUniqueInput!): GeoPoint
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  runningDetailsesConnection(where: RunningDetailsWhereInput, orderBy: RunningDetailsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RunningDetailsConnection!
  timeSegmentsConnection(where: TimeSegmentWhereInput, orderBy: TimeSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TimeSegmentConnection!
  geoSegmentsConnection(where: GeoSegmentWhereInput, orderBy: GeoSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GeoSegmentConnection!
  geoPointsConnection(where: GeoPointWhereInput, orderBy: GeoPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GeoPointConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type RunningDetails {
  started: String
  runTimeSegments(where: TimeSegmentWhereInput, orderBy: TimeSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TimeSegment!]
  pathSegment(where: GeoSegmentWhereInput, orderBy: GeoSegmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GeoSegment!]
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
  runTimeSegments: TimeSegmentCreateManyInput
  pathSegment: GeoSegmentCreateManyInput
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
  runTimeSegments: TimeSegmentUpdateManyInput
  pathSegment: GeoSegmentUpdateManyInput
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
  runTimeSegments_every: TimeSegmentWhereInput
  runTimeSegments_some: TimeSegmentWhereInput
  runTimeSegments_none: TimeSegmentWhereInput
  pathSegment_every: GeoSegmentWhereInput
  pathSegment_some: GeoSegmentWhereInput
  pathSegment_none: GeoSegmentWhereInput
}

input RunningDetailsWhereUniqueInput {
  started: String
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  runningDetails(where: RunningDetailsSubscriptionWhereInput): RunningDetailsSubscriptionPayload
  timeSegment(where: TimeSegmentSubscriptionWhereInput): TimeSegmentSubscriptionPayload
  geoSegment(where: GeoSegmentSubscriptionWhereInput): GeoSegmentSubscriptionPayload
  geoPoint(where: GeoPointSubscriptionWhereInput): GeoPointSubscriptionPayload
}

type TimeSegment {
  startTime: String
  endTime: String
  duration: Int
}

"""A connection to a list of items."""
type TimeSegmentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TimeSegmentEdge]!
  aggregate: AggregateTimeSegment!
}

input TimeSegmentCreateInput {
  startTime: String
  endTime: String
  duration: Int
}

input TimeSegmentCreateManyInput {
  create: [TimeSegmentCreateInput!]
}

"""An edge in a connection."""
type TimeSegmentEdge {
  """The item at the end of the edge."""
  node: TimeSegment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TimeSegmentOrderByInput {
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

type TimeSegmentPreviousValues {
  startTime: String
  endTime: String
  duration: Int
}

type TimeSegmentSubscriptionPayload {
  mutation: MutationType!
  node: TimeSegment
  updatedFields: [String!]
  previousValues: TimeSegmentPreviousValues
}

input TimeSegmentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TimeSegmentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TimeSegmentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TimeSegmentSubscriptionWhereInput!]

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
  node: TimeSegmentWhereInput
}

input TimeSegmentUpdateManyInput {
  create: [TimeSegmentCreateInput!]
}

input TimeSegmentUpdateManyMutationInput {
  startTime: String
  endTime: String
  duration: Int
}

input TimeSegmentWhereInput {
  """Logical AND on all given filters."""
  AND: [TimeSegmentWhereInput!]

  """Logical OR on all given filters."""
  OR: [TimeSegmentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TimeSegmentWhereInput!]
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

export type TimeSegmentOrderByInput =   'startTime_ASC' |
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

export type GeoSegmentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'distance_ASC' |
  'distance_DESC' |
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

export type GeoPointOrderByInput =   'id_ASC' |
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

export interface RunningDetailsCreateInput {
  started?: String
  runTimeSegments?: TimeSegmentCreateManyInput
  pathSegment?: GeoSegmentCreateManyInput
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

export interface GeoSegmentCreateInput {
  distance?: Float
  startPoint?: GeoPointCreateOneInput
  endPoint?: GeoPointCreateOneInput
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
  runTimeSegments_every?: TimeSegmentWhereInput
  runTimeSegments_some?: TimeSegmentWhereInput
  runTimeSegments_none?: TimeSegmentWhereInput
  pathSegment_every?: GeoSegmentWhereInput
  pathSegment_some?: GeoSegmentWhereInput
  pathSegment_none?: GeoSegmentWhereInput
}

export interface GeoPointCreateOneInput {
  create?: GeoPointCreateInput
  connect?: GeoPointWhereUniqueInput
}

export interface GeoSegmentWhereInput {
  AND?: GeoSegmentWhereInput[] | GeoSegmentWhereInput
  OR?: GeoSegmentWhereInput[] | GeoSegmentWhereInput
  NOT?: GeoSegmentWhereInput[] | GeoSegmentWhereInput
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
  startPoint?: GeoPointWhereInput
  endPoint?: GeoPointWhereInput
}

export interface GeoPointCreateInput {
  longitude: String
  latitude: String
}

export interface GeoPointWhereInput {
  AND?: GeoPointWhereInput[] | GeoPointWhereInput
  OR?: GeoPointWhereInput[] | GeoPointWhereInput
  NOT?: GeoPointWhereInput[] | GeoPointWhereInput
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

export interface GeoSegmentUpdateInput {
  distance?: Float
  startPoint?: GeoPointUpdateOneInput
  endPoint?: GeoPointUpdateOneInput
}

export interface TimeSegmentWhereInput {
  AND?: TimeSegmentWhereInput[] | TimeSegmentWhereInput
  OR?: TimeSegmentWhereInput[] | TimeSegmentWhereInput
  NOT?: TimeSegmentWhereInput[] | TimeSegmentWhereInput
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

export interface GeoSegmentUpsertWithWhereUniqueNestedInput {
  where: GeoSegmentWhereUniqueInput
  update: GeoSegmentUpdateDataInput
  create: GeoSegmentCreateInput
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface GeoPointUpsertNestedInput {
  update: GeoPointUpdateDataInput
  create: GeoPointCreateInput
}

export interface GeoSegmentSubscriptionWhereInput {
  AND?: GeoSegmentSubscriptionWhereInput[] | GeoSegmentSubscriptionWhereInput
  OR?: GeoSegmentSubscriptionWhereInput[] | GeoSegmentSubscriptionWhereInput
  NOT?: GeoSegmentSubscriptionWhereInput[] | GeoSegmentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: GeoSegmentWhereInput
}

export interface GeoPointUpdateDataInput {
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

export interface GeoPointUpdateOneInput {
  create?: GeoPointCreateInput
  connect?: GeoPointWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: GeoPointUpdateDataInput
  upsert?: GeoPointUpsertNestedInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface GeoSegmentUpdateDataInput {
  distance?: Float
  startPoint?: GeoPointUpdateOneInput
  endPoint?: GeoPointUpdateOneInput
}

export interface GeoSegmentWhereUniqueInput {
  id?: ID_Input
}

export interface GeoSegmentUpdateWithWhereUniqueNestedInput {
  where: GeoSegmentWhereUniqueInput
  data: GeoSegmentUpdateDataInput
}

export interface GeoPointUpdateManyMutationInput {
  longitude?: String
  latitude?: String
}

export interface GeoSegmentUpdateManyInput {
  create?: GeoSegmentCreateInput[] | GeoSegmentCreateInput
  connect?: GeoSegmentWhereUniqueInput[] | GeoSegmentWhereUniqueInput
  disconnect?: GeoSegmentWhereUniqueInput[] | GeoSegmentWhereUniqueInput
  delete?: GeoSegmentWhereUniqueInput[] | GeoSegmentWhereUniqueInput
  update?: GeoSegmentUpdateWithWhereUniqueNestedInput[] | GeoSegmentUpdateWithWhereUniqueNestedInput
  upsert?: GeoSegmentUpsertWithWhereUniqueNestedInput[] | GeoSegmentUpsertWithWhereUniqueNestedInput
}

export interface TimeSegmentUpdateManyMutationInput {
  startTime?: String
  endTime?: String
  duration?: Int
}

export interface TimeSegmentUpdateManyInput {
  create?: TimeSegmentCreateInput[] | TimeSegmentCreateInput
}

export interface PostUpdateManyMutationInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface RunningDetailsUpdateInput {
  started?: String
  runTimeSegments?: TimeSegmentUpdateManyInput
  pathSegment?: GeoSegmentUpdateManyInput
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

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
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

export interface GeoPointWhereUniqueInput {
  id?: ID_Input
}

export interface GeoSegmentCreateManyInput {
  create?: GeoSegmentCreateInput[] | GeoSegmentCreateInput
  connect?: GeoSegmentWhereUniqueInput[] | GeoSegmentWhereUniqueInput
}

export interface TimeSegmentCreateInput {
  startTime?: String
  endTime?: String
  duration?: Int
}

export interface TimeSegmentCreateManyInput {
  create?: TimeSegmentCreateInput[] | TimeSegmentCreateInput
}

export interface GeoSegmentUpdateManyMutationInput {
  distance?: Float
}

export interface RunningDetailsWhereUniqueInput {
  started?: String
}

export interface TimeSegmentSubscriptionWhereInput {
  AND?: TimeSegmentSubscriptionWhereInput[] | TimeSegmentSubscriptionWhereInput
  OR?: TimeSegmentSubscriptionWhereInput[] | TimeSegmentSubscriptionWhereInput
  NOT?: TimeSegmentSubscriptionWhereInput[] | TimeSegmentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TimeSegmentWhereInput
}

export interface GeoPointUpdateInput {
  longitude?: String
  latitude?: String
}

export interface RunningDetailsUpdateManyMutationInput {
  started?: String
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface GeoPointPreviousValues {
  id: ID_Output
  longitude: String
  latitude: String
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface RunningDetails {
  started?: String
  runTimeSegments?: TimeSegment[]
  pathSegment?: GeoSegment[]
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

export interface Post extends Node {
  id: ID_Output
  isPublished: Boolean
  title: String
  text: String
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

/*
 * An edge in a connection.

 */
export interface GeoPointEdge {
  node: GeoPoint
  cursor: String
}

export interface AggregateGeoPoint {
  count: Int
}

export interface GeoSegmentSubscriptionPayload {
  mutation: MutationType
  node?: GeoSegment
  updatedFields?: String[]
  previousValues?: GeoSegmentPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface GeoPointConnection {
  pageInfo: PageInfo
  edges: GeoPointEdge[]
  aggregate: AggregateGeoPoint
}

export interface AggregateGeoSegment {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface GeoSegmentEdge {
  node: GeoSegment
  cursor: String
}

export interface AggregateTimeSegment {
  count: Int
}

export interface GeoSegmentPreviousValues {
  id: ID_Output
  distance?: Float
}

/*
 * A connection to a list of items.

 */
export interface TimeSegmentConnection {
  pageInfo: PageInfo
  edges: TimeSegmentEdge[]
  aggregate: AggregateTimeSegment
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

/*
 * An edge in a connection.

 */
export interface RunningDetailsEdge {
  node: RunningDetails
  cursor: String
}

export interface PostPreviousValues {
  id: ID_Output
  isPublished: Boolean
  title: String
  text: String
}

export interface BatchPayload {
  count: Long
}

export interface GeoPoint extends Node {
  id: ID_Output
  longitude: String
  latitude: String
}

export interface AggregatePost {
  count: Int
}

export interface RunningDetailsSubscriptionPayload {
  mutation: MutationType
  node?: RunningDetails
  updatedFields?: String[]
  previousValues?: RunningDetailsPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface GeoSegmentConnection {
  pageInfo: PageInfo
  edges: GeoSegmentEdge[]
  aggregate: AggregateGeoSegment
}

export interface AggregateRunningDetails {
  count: Int
}

export interface TimeSegmentPreviousValues {
  startTime?: String
  endTime?: String
  duration?: Int
}

export interface TimeSegmentSubscriptionPayload {
  mutation: MutationType
  node?: TimeSegment
  updatedFields?: String[]
  previousValues?: TimeSegmentPreviousValues
}

export interface GeoSegment extends Node {
  id: ID_Output
  startPoint?: GeoPoint
  endPoint?: GeoPoint
  distance?: Float
}

export interface RunningDetailsPreviousValues {
  started?: String
}

/*
 * A connection to a list of items.

 */
export interface RunningDetailsConnection {
  pageInfo: PageInfo
  edges: RunningDetailsEdge[]
  aggregate: AggregateRunningDetails
}

/*
 * An edge in a connection.

 */
export interface TimeSegmentEdge {
  node: TimeSegment
  cursor: String
}

export interface TimeSegment {
  startTime?: String
  endTime?: String
  duration?: Int
}

export interface GeoPointSubscriptionPayload {
  mutation: MutationType
  node?: GeoPoint
  updatedFields?: String[]
  previousValues?: GeoPointPreviousValues
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number
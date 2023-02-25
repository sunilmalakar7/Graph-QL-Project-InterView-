const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLSchema,
} = graphql;

const { USER_LIST, GET_USER } = require('./Queries/UserQuery')
const { USER_CREATE, USER_EDIT } = require('./Mutations/User');
const { GET_PRODUCTS } = require('./Queries/ProductQuery');
const { PRODUCT_CREATE } = require('./Mutations/Product');

const RootQuery = new GraphQLObjectType({
    name: "queries",
    fields: {
        getUsers: USER_LIST,
        getUser: GET_USER,
        getProducts: GET_PRODUCTS,
    }
})

const Mutation = new GraphQLObjectType({
    name: "mutation",
    fields: {
        createUser: USER_CREATE,
        editUser: USER_EDIT,
        createProduct: PRODUCT_CREATE,
    }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation }) 
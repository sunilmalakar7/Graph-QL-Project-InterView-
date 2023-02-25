const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql');



const ProductType = new GraphQLObjectType({
    name: "product",
    fields: () => ({
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        quantity: { type: GraphQLInt },
    })
})

module.exports = ProductType;
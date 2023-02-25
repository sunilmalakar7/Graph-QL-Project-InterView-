const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql');



const UserType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
})

module.exports = UserType;
const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql');

const db = require("../../models")
const { User } = db
const UserType = require('../TypeDefs/UserType')

module.exports.USER_CREATE = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    },
    async resolve(parent, args) {
        let data = await User.create(args)
        return data;
    }
}

module.exports.USER_EDIT = {
    type: UserType,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    },
    async resolve(parent, args) {
        let data = await User.update(args, {
            where: { id: args.id }
        })
        return args;
    }
}

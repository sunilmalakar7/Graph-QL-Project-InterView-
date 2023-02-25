const { GraphQLList, GraphQLInt } = require('graphql');

const db = require("../../models")
const { User } = db
const UserType = require('../TypeDefs/UserType')

module.exports.USER_LIST = {
    type: new GraphQLList(UserType),
    async resolve(parent, args) {
        let data = await User.findAll({})
        return data;
    }
}

module.exports.GET_USER = {

    type: new GraphQLList(UserType),
    args: {
        id: { type: GraphQLInt }
    },
    async resolve(parent, args) {
        console.log('parent, args', parent, args)
        if (!args?.id) throw new Error("Id field is required");
        let data = await User.findAll({
            where: {
                id: args.id
            }
        })
        return data;
    }
}
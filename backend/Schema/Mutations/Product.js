const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql');

const db = require("../../config/mongo_conn")
const { Product } = db
const ProductType = require('../TypeDefs/ProductType')

module.exports.PRODUCT_CREATE = {
    type: ProductType,
    args: {
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        quantity: { type: GraphQLInt },
    },
    async resolve(parent, args) {
        let data = await Product.create(args)
        return data;
    }
}

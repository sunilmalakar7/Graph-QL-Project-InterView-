const { GraphQLList, GraphQLInt } = require('graphql');
const db = require("../../config/mongo_conn");
const { Product } = db
const ProductType = require('../TypeDefs/ProductType');

module.exports.GET_PRODUCTS = {
    type: new GraphQLList(ProductType),
    async resolve(parent, args) {
        let data = await Product.find({})
        return data;
    }
}

module.exports.CREATE_PRODUCT = {
    type: new GraphQLList(ProductType),
    async resolve(parent, args) {
        let data = await Product.find({})
        return data;
    }
}



const mongoose = require('mongoose');
const localDB = "mongodb://127.0.0.1:27017/project";

mongoose.connect(process.env.MONGODB_URI || localDB,
    { useNewUrlParser: true, useUnifiedTopology: true, }
).then(() => {
    console.log(`💾 DB connection successfully`);
}).catch((error) => {
    console.log(error);
});


mongoose.Promise = global.Promise;

module.exports = {
    Product: require('../models/mongo/products'),
};

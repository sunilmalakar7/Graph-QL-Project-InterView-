const express = require("express")
const app = express()
const PORT = 5000;
const { graphqlHTTP } = require("express-graphql")
const schema = require("./Schema/index");
require("./models")
const cors = require('cors');

app.use(express.json())
app.use(cors({ origin: true, credentials: true }));

app.get("/api/", (req, res) => {
    return res.send({ status: true, message: "Home api calling" })
})

// SETUP GRAPHQL SCHEMA
app.use("/api/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
)

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
})

// mutation{
//     editUser(id: 354,name: "Test", email: "vinay@gmail.com", phone:"69786985679") {
//       name
//     }
//   }

// query {
//     getUsers{
//       id, name
//     }
//   }
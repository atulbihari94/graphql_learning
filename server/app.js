const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');

const app = express();
const PORT = 3000;

// mongoose.connect('mongodb+srv://atulbihari:atulbihari@gql-cluster.dtshm.mongodb.net/gql-database', { useNewUrlParser: true });
// mongoose.connection.once('open', () => {
//   console.log('Connected to database');
// })

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
})) 

app.listen(PORT, () => {
    console.log(`App listening on the port ${PORT}`);
})
// // // const { MongoClient } = require("mongodb");
// // // // Connection URI
// // // const uri =
// // //   "mongodb+srv://atulbihari:atulbihari@gql-cluster.dtshm.mongodb.net/gql-database?retryWrites=true&w=majority";
// // // // Create a new MongoClient
// // // const client = new MongoClient(uri);
// // // async function run() {
// // //   try {
// // //     // Connect the client to the server
// // //     await client.connect();
// // //     // Establish and verify connection
// // //     await client.db("gql-database").command({ ping: 1 });
// // //     console.log("Connected successfully to server");
// // //   } finally {
// // //     // Ensures that the client will close when you finish/error
// // //     await client.close();
// // //   }
// // // }
// // // run().catch(console.dir);


// // const mongoose = require("mongoose")

// // const mongoString = "mongodb+srv://atulbihari:atulbihari@gql-cluster.dtshm.mongodb.net/gql-database?retryWrites=true&w=majority"

// // mongoose.connect(mongoString, {useNewUrlParser: true})

// // mongoose.connection.on("error", function(error) {
// //   console.log(error)
// // })

// // mongoose.connection.on("open", function() {
// //   console.log("Connected to MongoDB database.")
// // })

// const MongoClient = require('mongodb').MongoClient;

// // replace the uri string with your connection string.
// const uri = "mongodb+srv://atulbihari:atulbihari@gql-cluster.dtshm.mongodb.net/gql-database?retryWrites=true&w=majority"
// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("gql-database").collection("gql-collection");
//    // perform actions on the collection object
//    client.close();
// });
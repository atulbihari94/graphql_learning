
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://atulbihari:atulbihari@gql-cluster.dtshm.mongodb.net/gql-database?retryWrites=true&w=majority"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("gql-database").collection("gql-collection");
   // perform actions on the collection object
   client.close();
});
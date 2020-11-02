const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const connectDB = require('./connection')


const app = express();


connectDB();
// mongoose.connect('mongodb+srv://dhaval:<dhaval>@cluster0.vwyfs.mongodb.net/GRAPHQLDEMO?retryWrites=true&w=majority', 
// { useNewUrlParser: true }, { useUnifiedTopology: true })
// mongoose.connection.once('open',() => {
//     console.log("Connection establish")
// })
// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});

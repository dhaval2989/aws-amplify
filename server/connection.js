const mongoose = require('mongoose');
const URI = 'mongodb+srv://dhaval:dhaval@cluster0.vwyfs.mongodb.net/GRAPHQLDEMO?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connection establish")
}

module.exports = connectDB;
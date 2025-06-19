require('dotenv').config();
const mongoose = require("mongoose");

async function connectToMongoDb() {
    const dbUri = process.env.MONGO_URI;
    try {
        await mongoose.connect(dbUri);
        console.log("Connection to MongoDb is Successfull!");
    }
    catch (error) {
        console.log("MongoDb Connection Failed: ",error);
        process.exit(1); 
    }
}

module.exports = connectToMongoDb;
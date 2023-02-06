import mongoose from 'mongoose';

const uri: string = process.env.MONGO_URI!
const options = { dbName: process.env.DB_NAME, useNewUrlParser: true, useUnifiedTopology: true}

const connect_to_db = async() =>{
 const connect = await mongoose.connect(uri, options)
 return connect;
}

export {connect_to_db}
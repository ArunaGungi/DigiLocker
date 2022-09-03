import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const mongo_URL = process.env.URL;
const app = express();
app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}));

export const connection = async () => {
    await mongoose.connect(mongo_URL, {useNewUrlParser:true, 
        useUnifiedTopology:true, writeConcern: { w: 'majority', j: true, wtimeout: 1000}})
        .then(
            () => console.log("Database connected successfully!")
        ).catch((error) => console.log(error))
}

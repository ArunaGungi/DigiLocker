import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { connection } from './database.js';
import bodyParser from 'body-parser';
import signUprouter from './routes/signUpRouter.js';
import signInrouter from './routes/signInRouter.js';
import OTPRouter from './routes/OTPRouter.js';
import fileRouter from './routes/fileRouter.js';

dotenv.config();
const app=express();
const port = process.env.PORT;
const __dirname = path.resolve();

connection();
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/v1', fileRouter);
app.use('/api/v1/register',signUprouter);
app.use('/api/v1/login',signInrouter);
app.use('/api/v1/otp', OTPRouter);
app.listen(port, () => console.log(`connection to mongodb is established and server is running on ${port}`));
import express from 'express';
import { signUp } from '../controllers/signUpController.js';

const signUprouter = express.Router();

signUprouter.post('/', signUp);

export default signUprouter;
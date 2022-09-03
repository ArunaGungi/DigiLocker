import express from 'express';
import { signIn } from '../controllers/signInController.js';

const signInrouter = express.Router();

signInrouter.get('/',signIn);

export default signInrouter;
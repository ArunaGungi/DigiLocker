import express from "express";
import { sendOTPVerificationEmail } from "../controllers/OTPController.js";

const OTPRouter = express.Router();
OTPRouter.post('/',sendOTPVerificationEmail);
export default OTPRouter;
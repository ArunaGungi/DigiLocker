import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import { OTPVerification } from "../models/OTPVerification.js";
import dotenv from 'dotenv';

dotenv.config();
export const sendOTPVerificationEmail = async (req,res) => {

    console.log(req.body);
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure:true,
        auth: {
          user: process.env.AUTH_EMAIL,
          pass: process.env.AUTH_PASS 
        },
      });
    
    transporter.verify((error,success) => {
        if(error) {
            console.log(error);
        }
        else {
            console.log("ready for messages");
        }
    });

    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        console.log(otp);
        const mailOptions  = {
            from : process.env.AUTH_EMAIL,
            to : req.body.email,
            subject : "DigiLocker OTP",
            html : `<p>Enter <b>${otp}</b> in the app to upload or download the docs</p>`
        };
        console.log(mailOptions);
        const saltRounds = 10;
        const hashedOTP = await bcrypt.hash(otp,saltRounds);
        
        const newOTPVerification = new OTPVerification({
            email:req.body.email,
            otp:hashedOTP,
            createdAt:Date.now(),
            expiresAt:Date.now()+3600000
        })

        await newOTPVerification.save();
        await transporter.sendMail(mailOptions);
        res.json({
            status:"PENDING",
            message:"Verification otp sent to email",
            otp:otp
        })
    }
    catch(error) {
        res.json({
            status:"FAILED",
            message:error.message
        })
    }
}
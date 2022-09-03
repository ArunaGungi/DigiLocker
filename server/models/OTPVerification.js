import mongoose from "mongoose";

const OTPVerificationSchema = mongoose.Schema({
    email:{
        type:String
    },
    otp:{
        type:String
    },
    createdAt:{
        type:Date
    },
    expiresAt:{
        type:Date
    }
})

export const OTPVerification = mongoose.model('OTPVerification',OTPVerificationSchema);


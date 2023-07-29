import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    otp: {type: String, required: true},
    email: {type: String, required: true},
    date: {type: Date, default: Date.now},
}, {timestamps: true});

otpSchema.index({createdAt: 1},{expireAfterSeconds: 300});

export const OTPModel = mongoose.model('OTP', otpSchema);

export const findOtp = (email: string) => OTPModel.findOne({email: email});
export const verifyOtp = (email: string, otp: string) => OTPModel.findOne({email: email, otp: otp});
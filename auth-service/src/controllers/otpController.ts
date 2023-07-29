import { Request, Response } from "express";

import { findUserByEmail } from "../models/User";
import { OTPModel, findOtp } from "../models/Otp";

import isValidEmail from "../utils/emailHelper";

import nodemailer from "nodemailer";

interface CustomRequest extends Request {
    body: {
        email: string;
    }
}

const sendOTP = async (req: CustomRequest, res: Response) => {
    
    const {email} = req.body;
    const senderEmail = process.env.SENDER_EMAIL;
    const senderPassword = process.env.SENDER_PASSWORD;

    if(!email || !isValidEmail(email.toLowerCase())){
        return res.json({error: "Please enter a valid email"});
      }
    
        let email1 = email.toLowerCase();
        if(isValidEmail(email1)){
    
          // check if email is already registered
          const user = await findUserByEmail(email1);
          if(user){
            return res.json({error: "Email already registered"});
          }
    
          // check if otp is already sent
          const gotOtp = await findOtp(email1);
          if(gotOtp){
            return res.json({error: "OTP already sent, check your email!"});
          }
    
          // use nodemailer to send otp
          const otp = Math.floor(100000 + Math.random() * 900000);
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: senderEmail,
              pass: senderPassword
            },
            secure: true
    
          });
    
          const mailOptions = {
            from: 'Codeberg \<CODEX\> <' + senderEmail + '>',
            to: email,
            subject: 'Your One-Time Password (OTP) Verification Code',
            html: `
              <p>Hello There,</p>
              <p>Thank you for choosing our service. To verify your account, please enter the following One-Time Password (OTP) in the provided field:</p>
              <h2 style="font-weight: bold;">${otp}</h2>
              <p>Please note that this OTP is valid for only a single use and will expire in <strong>5 Minutes</strong>. If you have not initiated this verification process, please disregard this email.</p>
              <p>Thank you for your cooperation.</p>
              <p>Best regards,</p>
              <h4>Codeberg \<CODEX\></h4>
            `
          };
          
          transporter.sendMail(mailOptions, async function(error, info){
            if (error) {
              console.log(error);
              res.json({error: "Something went wrong"});
            } else {
              await OTPModel.create({email: email1, otp});
              return res.status(200).json({success: true, message: "OTP sent successfully! Please check your Spam folder if you don't find it in your inbox"});
            }
          }
          );
        }else{
          return res.status(200).json({message: "Enter a valid Email"});
        }

}

export default sendOTP;
import { Request, Response } from 'express';

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User, { findUserByEmail } from "../models/User";
import getLoginInfo from "../utils/soaLogin";
import { verifyOtp } from '../models/Otp';
import { UEModel, didChange } from '../models/UpdatedEmail';

const JWT_SECRET = process.env.JWT_SECRET as string;

const register = async (req: Request, res: Response) => {
    const {email, registrationNumber, password} = req.body;

    try{
        let user = await findUserByEmail(email.toLowerCase());
        if(user){
            return res.status(400).json({error: "Email already in use!"});
        }

        const userInfo = await getLoginInfo(registrationNumber, password);
        if(!userInfo){
            return res.status(400).json({error: "Invalid Credentials!"});
        }

        const securedPassword = await bcrypt.hash(password.toString(), 10);

        user = await User.create({
            email: email.toLowerCase(),
            registrationNumber,
            password: securedPassword,
            name: userInfo.name,
            dob: userInfo.dob,
            gender: userInfo.gender,
            batch: userInfo.batch,
            program: userInfo.program,
            branch: userInfo.branch,
            sectionCode: userInfo.sectionCode,
            phone: userInfo.phone,
        });

        return res.json({success: true, message: "User Registered Successfully! You can change your password after logging in."});

    }catch (error) {
        console.log(error);
        return res.json({ error: "Something Went Wrong!" });
    }
}

const login = async (req: Request, res: Response) => {
    let success = false;
    let { email, password } = req.body;
    try{

        let user = await findUserByEmail(email.toLowerCase());
        if(!user){
            return res.status(400).json({error: "Invalid Credentials!"});
        }

        const passwordCompare = await bcrypt.compare(password.toString(), user.password);
        if(!passwordCompare){
            return res.status(400).json({error: "Invalid Credentials!"});
        }

        const payload = {
            donor: {
              id: user.id,
            },
        };

        const authtoken = jwt.sign(payload, JWT_SECRET);
        success = true;
        return res.json({ success, email, authtoken });

    }catch (error) {
        console.log(error);
        return res.json({ error: "Something Went Wrong!" });
    }
}

const changePassword = async (req: Request, res: Response) => {
    let success = false;
    let { email, newPassword, otp} = req.body;
    if(!email || !newPassword || !otp){
        return res.status(400).json({error: "Please enter all the fields!"});
    }
    try{
            let user = await findUserByEmail(email.toLowerCase());
            if(!user){
                return res.status(400).json({error: "Invalid Credentials!"});
            }

            const gotOtp = await verifyOtp(email.toLowerCase(), otp);
            if(!gotOtp){
                return res.status(400).json({error: "Invalid OTP!"});
            }
    
            const securedPassword = await bcrypt.hash(newPassword.toString(), 10);
            user.password = securedPassword;
            await user.save();
    
            success = true;
            return res.json({ success, message: "Password Changed Successfully!" });
        }catch (error) {
            console.log(error);
            return res.json({ error: "Something Went Wrong!" });
        }
}

const changeEmail = async (req: Request, res: Response) => {
    let success = false;
    let { email, newEmail, password} = req.body;
    if(!email || !newEmail || !password){
        return res.status(400).json({error: "Please enter all the fields!"});
    }

    if(email === newEmail){
        return res.status(400).json({error: "New Email cannot be same as old email!"});
    }

    try{
            let user = await findUserByEmail(email.toLowerCase());
            if(!user){
                return res.status(400).json({error: "Invalid Credentials!"});
            }

            const updatedEmail = await didChange(newEmail.toLowerCase());
            if(updatedEmail){
                return res.status(400).json({error: "Email updated recently! This feature will be available after 7 days from last updation."});
            }

            const passwordCompare = await bcrypt.compare(password.toString(), user.password);
            if(!passwordCompare){
                return res.status(400).json({error: "Invalid Credentials!"});
            }

            const updatedEmailEntry = await UEModel.create({
                newEmail: newEmail.toLowerCase(),
                oldEmail: email.toLowerCase(),
            });

            user.email = newEmail.toLowerCase();
            await user.save();
    
            success = true;
            return res.json({ success, message: "Email Changed Successfully!" });
        }
        catch (error) {
            console.log(error);
            return res.json({ error: "Something Went Wrong!" });
        }
}

export { register, login, changePassword, changeEmail };


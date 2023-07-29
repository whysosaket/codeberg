import { Request, Response } from 'express';

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User, { findUserByEmail } from "../models/User";
import getLoginInfo from "../utils/soaLogin";

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

export { register, login };


import { Request, Response } from 'express';
import UserModel from '../models/User';

const getUserInfo = async (req: Request, res: Response) => {
    try{
        const user = req.user;
        if(!user){
            return res.status(400).json({error: "User Not Found!"});
        }

        let userInfo = await UserModel.findById(user.id).select("name email batch program batch sectionCode registrationNumber gender");
        if(!userInfo){
            return res.status(400).json({error: "User Not Found!"});
        }

        return res.json({success: true, userInfo});
    }catch(error){
        console.log(error);
        return res.json({error: "Something Went Wrong!"});
    }
}

export { getUserInfo };
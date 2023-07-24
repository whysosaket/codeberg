require('dotenv').config();

import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

interface UserPayload {
    user: any;
}

const fetchuser = (req: Request, res: Response, next: NextFunction)=>{
    
    // Get the user from auth tokein and extract id and then add it to the req object
    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({error: "Token Validation Error!"})
    }

    try{
    const data  = jwt.verify(token!, JWT_SECRET!) as UserPayload;
    req.user = data.user;
    next();
    }catch(error){
        res.status(401).send({error: "Token Validation Error!"})
    }
}

module.exports = fetchuser;
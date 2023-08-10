import { Request, Response } from 'express';
import UserModel from '../models/User';
import Question from '../models/Question';
import Leaderboard from '../models/Leaderboard';


const fetchQuestion = async (req: Request, res: Response) => {
    try{
        let user = req.user;
        if(!user){
            return res.json({ error: "Token Validation Error!" });
        }

        user = await UserModel.findById(user.id);
        if(!user){
            return res.json({ error: "User Not Found!" });
        }

        let question = await Question.findOne({}).sort({createdAt: -1});
        if(!question){
            return res.json({ error: "Question Not Found! Error!" });
        }

        return res.json({ success: true, question: question });

    }catch(error){
        console.log(error);
        return res.json({ error: "Something Went Wrong!" });
    };
};

// no authetication
const fetchLeaderboard = async (req: Request, res: Response) => {
    try{

        let leaderBoard = await Leaderboard.findOne({}).sort({createdAt: -1});
        if(!leaderBoard){
            return res.json({ error: "Leaderboard Not Found! Error!" });
        }
        return res.json({ success: true, leaderBoard: leaderBoard });

    }catch(error){
        console.log(error);
        return res.json({ error: "Something Went Wrong!" });
    };
};

// no authetication
const fetchToday = async (req: Request, res: Response) => {
    try{
        let today = await Question.findOne({}).sort({createdAt: -1});
        if(!today){
            return res.json({ error: "Today Not Found! Error!" });
        }
        return res.json({ success: true, today: today });
    }catch(error){
        console.log(error);
        return res.json({ error: "Something Went Wrong!" });
    };
};

const submitAnswer = async (req: Request, res: Response) => {
    try{

    }catch(error){
        console.log(error);
        return res.json({ error: "Something Went Wrong!" });
    };
};

export { fetchQuestion, submitAnswer, fetchLeaderboard, fetchToday};
import User from "../models/User";

const checkUserExists = async (username: string, password: string) => {
    try{
        const user = await User.findOne({username: username});
        if(!user){
            return false;
        }
        return loginUser(user, username, password);
    }
    catch(err){
        console.log(err);
    }
}

const loginUser = async (user: any, username: string, password: string) => {
    try{
        
    }
    catch(err){
        console.log(err);
    }
}

const createUser = async (username: string, password: string) => {
    try{
        const newUser = new User({
            username: username,
            password: password
        });
        const user = await newUser.save();
        return loginUser(user, username, password);
    }
    catch(err){
        console.log(err);
    }
};

export {checkUserExists, createUser};


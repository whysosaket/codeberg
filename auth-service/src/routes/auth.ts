import {Router} from 'express';
import { register, login, changePassword, changeEmail } from '../controllers/authController';
import sendOTP from '../controllers/otpController';



export default (router: Router) => {
    router.route('/api/login').post(login);
    router.route('/api/register').post(register);
    router.route('/api/ichangepassword').post(sendOTP);
    router.route('/api/changepassword').post(changePassword);
    router.route('/api/changeemail').post(changeEmail);
}
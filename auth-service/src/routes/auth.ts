import {Router} from 'express';
import { register, login } from '../controllers/authController';



export default (router: Router) => {
    router.route('/api/login').post(login);
    router.route('/api/register').post(register);
}
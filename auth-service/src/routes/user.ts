import {Router} from 'express';
import { getUserInfo } from '../controllers/userController';
import fetchuser from '../middleware/fetchuser';

export default (router: Router) => {
    router.route('/api/getprofileinfo').get(fetchuser, getUserInfo);
}
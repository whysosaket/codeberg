import {Router} from 'express';
import fetchuser from '../middlewares/fetchuser';
import { fetchQuestion, submitAnswer, fetchLeaderboard, fetchToday} from '../controllers/serviceController';

export default (router: Router) => {
    router.route('/api/getfullquestion').get(fetchuser, fetchQuestion);
    router.route('/api/submitanswer').post(fetchuser, submitAnswer);
    router.route('/api/getleaderboard').get(fetchLeaderboard);
    router.route('/api/gettoday').get(fetchToday);
}
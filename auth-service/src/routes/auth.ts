import express from 'express';
const router = express.Router();
import { checkUserExists, createUser } from '../controllers/authController';

router.route('/login').post((req, res) => {
    const {username, password} = req.body;
    const token = checkUserExists(username, password);
    res.send("Login Failed");
})
.get((req, res) => {
    res.send("Login Page");
});

module.exports = router;
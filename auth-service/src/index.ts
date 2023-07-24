import express, {Express, json} from 'express';
import { config } from 'dotenv';
import connectDB from './db';
import getLoginInfo from './utils/soaLogin';


config();
const PORT = process.env.PORT || 80;
const app:Express = express();

connectDB();
getLoginInfo(process.env.REG||"", process.env.PASS||"");

app.use(json());

app.use('/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('Hi from Auth Service')
})

app.listen(PORT, () => {
    console.log(`auth-service listening on port ${PORT}`);
});
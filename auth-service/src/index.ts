import dotenv from 'dotenv';
dotenv.config();

import express, {Express} from 'express';
import cors from 'cors';

import router from './routes';
import connectDB from './db';
import getLoginInfo from './utils/soaLogin';

connectDB();

const app: Express = express();
const PORT = process.env.PORT || 9000;

// getLoginInfo(process.env.REG||"", process.env.PASS||"");

app.use(cors());
app.use(express.json());

app.use("/", router());

app.listen(PORT, () => {
    console.log(`auth-service listening on port ${PORT}`);
});
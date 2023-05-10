import express, {Express, json} from 'express';
import { config } from 'dotenv';

config();
const PORT = process.env.PORT || 80;
const app:Express = express();

app.use(json());

app.get('/', (req, res) => {
    res.send('Hi from Auth Service')
})

app.listen(PORT, () => {
    console.log(`auth-service listening on port ${PORT}`);
});
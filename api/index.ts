import express, { Request, Response} from 'express'
import dotenv from 'dotenv';
import {createUser} from '../controllers/userController'
import { connect } from 'http2';
import connectDB from '../database/db';

dotenv.config();

const app = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send("Hej")
})

app.post('/signup', createUser)

const PORT = process.env.PORT || 3000;

app.listen (PORT, async () => {
    await connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
});
 
import express, { Request, Response} from 'express'
import dotenv from 'dotenv';
import {createUser} from '../controllers/userController'

import { connect } from 'http2';
import connectDB from '../database/db';

import path from 'path';


dotenv.config();

const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.post('/signup', createUser)

const PORT = process.env.PORT || 3000;

app.listen (PORT, async () => {
    await connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
});
 
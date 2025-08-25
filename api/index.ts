import express, { Request, Response} from 'express'
import dotenv from 'dotenv';
import {createUser} from '../controllers/userController'
import path from 'path';

dotenv.config();

const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.post('/signup', createUser)

const port = process.env.PORT || 3000;

app.listen (port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

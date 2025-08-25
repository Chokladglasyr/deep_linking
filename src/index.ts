import express, { Request, Response} from 'express'
import dotenv from 'dotenv';
import {createUser} from '../controllers/userController'

dotenv.config();

const app = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send("Hej")
})

app.post('/signup', createUser)

const port = process.env.PORT || 3000;

app.listen (port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

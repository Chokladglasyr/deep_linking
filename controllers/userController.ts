import { Request, Response } from "express";
import { User } from "../interface/userInterface";



export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body
        const exists = await User.findOne({email: email});
        if(exists) {
            res.status(400).json({message: "User exists"});
            return;
        }
        const newUser = new User ({name, email, password})
        await newUser.save();
        res.status(201).json({message: `New user registered: ${newUser}`})

    } catch(err: unknown) {
        if(err instanceof Error) {

            console.error("Failed to register: ", err)
        }
    }
}
import { Request, Response } from "express";
import { User } from "../interface/userInterface";
import { ClientIp } from "../interface/checkIpInterface";


export const createUser = async (req: Request, res: Response) => {
    try {
        const { clientIp, refId } = req.body
        const existsClient = await ClientIp.findOne({clientIp: clientIp})
        if(!existsClient) {
            const newClient = new ClientIp ({clientIp, refId})
            await newClient.save();
        }

        const { name, email, password } = req.body
        const existsUser = await User.findOne({email: email});
        if(existsUser) {
            res.status(400).json({message: "User exists"});
            return;
        }
        const newUser = new User ({name, email, password, refId})
        await newUser.save();
        res.status(201).json({message: `New user registered: ${newUser}`})

    } catch(err: unknown) {
        if(err instanceof Error) {

            console.error("Failed to register: ", err)
        }
    }
}

export const storeNewIP = async (req: Request, res: Response) => {
    try{
        const { refId } = req.params 
        const { clientIp } = req.body //HÄMTAS FRÅN VART?
        const existsClient = await ClientIp.findOne({clientIp: clientIp})
        if(!existsClient) {
            const newClient = new ClientIp ({clientIp, refId})
            await newClient.save();
        }
    } catch (err: unknown) {
        if(err instanceof Error) {
            console.error("Failed to save ip: ", err)
        }
    }
}
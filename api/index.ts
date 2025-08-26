import connectDB from "../database/db";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { createUser } from "../controllers/userController";
import path from "path";
import { trackUser } from "../controllers/tracking";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
    origin: ["deep-linking-psi.vercel.app", `http://localhost:${port}`],
    credentials: true
}))

app.get("/", (req: Request, res: Response) => {
  // const clientIp = req.ip || req.socket.remoteAddress;
  // console.log("Visitor IP:", clientIp);
//   console.log(req)
  trackUser(req);
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use(express.static(path.join(__dirname, "..", "public")));

app.post("/signup", createUser);

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});

app.post("/signup", createUser);

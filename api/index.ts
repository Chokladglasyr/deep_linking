import connectDB from "../database/db";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { createUser } from "../controllers/userController";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.post("/signup", createUser);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.post("/signup", createUser);

app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  const ip = getClientIp(req);
  res.json({ ip });
});

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});

const getClientIp = (req: Request): string => {
  return (
    req.headers["cf-connecting-ip"]?.toString() ||
    req.headers["x-real-ip"]?.toString() ||
    req.headers["x-forwarded-for"]?.toString().split(",")[0].trim() || // take first forwarded IP
    req.socket.remoteAddress ||
    ""
  );
};

app.post("/signup", createUser);

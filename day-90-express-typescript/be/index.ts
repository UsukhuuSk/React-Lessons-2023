import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import theaterRouter from "./routes/theaters.api";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGO_URL || "mongodb://localhost:27017/test";

let name: string = "<h1>Hello Day-90-Express-Typescript </h1>";
let phoneNumber: number = 99119911;
let isMarried: boolean = false;
let sheeps: Array<string> = ["sheep1", "sheep2", "sheep3"];
let sheep: string[] = ["sheep1", "sheep2", "sheep3"];
let sheepObject: { name: string; age: number } = {
  name: "sheep1",
  age: 1,
};
sheepObject.name = "sheep2";
sheepObject.age = 5;

interface Student {
  name: string;
  age: number;
  isVerified: boolean;
}

app.use(express.json());
app.use("/theaters", theaterRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(name);
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"))
    .catch((error) => console.error(error));
  console.log(`Server is running on http://localhost:${PORT}`);
});

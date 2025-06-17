import fs from "fs-extra";
import express, { Request, Response } from "express";
import { User } from "./types/types";
import userRouter from "./router/user/user";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello API");
});

app.use("/", userRouter);

app.listen(3000, () => {
  console.log(`Example app listening on port http://localhost:3000`);
});

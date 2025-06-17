import express, { Request, Response } from "express";
import fs from "fs-extra";
import { User } from "../../types/types";
import { nanoid } from "nanoid";

const userRouter = express.Router();

userRouter.get("/users", (req: Request, res: Response) => {
  const users = fs.readFileSync("./user.json", {
    encoding: "utf-8",
    flag: "r",
  });
  res.json(JSON.parse(users));
});

userRouter.post("/createUser", (req: Request, res: Response) => {
  const { name, age, userName, userEmail, phoneNumber, password }: User =
    req.body;
  const uniqueId = nanoid();
  const filePath = "./user.json";

  let users: User[] = [];

  if (fs.existsSync(filePath)) {
    const existingData = fs.readFileSync(filePath, "utf8");
    if (existingData.trim().length > 0) {
      users = JSON.parse(existingData);
    }
  }

  users.push({
    name,
    age,
    userId: uniqueId,
    userName,
    userEmail,
    phoneNumber,
    password,
  });

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  res.send("Succesfully created user");
});

userRouter.delete("/deleteUser", (req: Request, res: Response) => {
  const { userId } = req.body;
  const filePath = "./user.json";
  const existingData = fs.readFileSync(filePath, "utf8");
  const filteredUser = JSON.parse(existingData).filter(
    (user: any) => user.userId !== userId
  );
  fs.writeFileSync(filePath, JSON.stringify(filteredUser, null, 2));
  res.json(`deleted user ${userId}`);
  // res.json (userId) gej bichsen ch bas bolno
});

userRouter.put("/updateUser", (req: Request, res: Response) => {
  const { name, age, userId }: { name: string; age: number; userId: string } =
    req.body;
  const existingData = fs.readFileSync("./user.json", "utf8");
  const updateUser = JSON.parse(existingData).map((user: any) => {
    if (user.userId == userId) {
      return { ...user, name: name, age: age };
    }
  });
  fs.writeFileSync("./user.json", JSON.stringify(updateUser, null, 2));
  res.json(updateUser);
});

export default userRouter;


import fs from "fs-extra";
import express, {Request, Response} from "express";
import { User } from "./types/types";

const app = express();
app.use(express.json());

app.get("/", (req:Request, res: Response) => {
  res.send({
    name: "jo",
    age: 18,
  });
});

app.post("/user", (req:Request, res: Response) => {
  console.log(req);
  const { name, age } = req.body;
  res.json({ message: `User ${name}is ${age} years old.` });
});

app.put("/updateUser", (req:Request, res: Response) => {
  const { name, age } = req.body;
  res.send(`updated user ${name} ${age}`);
});

app.delete("/deleteUser", (req:Request, res: Response) => {
  const userId = req.body;
  res.send(`delete user Id ${userId}`);
});

app.post ("/createUser",(req:Request, res: Response)=> {
  const {name, age,userName, userEmail,phoneNumber, password} :User= req.body
  fs.writeFileSync ("./user.json", JSON.stringify ([{
    name, age,userName, userEmail,phoneNumber, password
  }]))
  res.send ("Successfully ")
})

app.get ("/users", (req:Request, res: Response)=> {
  const users =fs.readFileSync ("./user.json", {encoding: "utf8", flag: 'r'})
  //utf8 - medeelel unshdag standart
  console.log (users)
  res.json (JSON.parse (users))
})


app.listen(3000, () => {
  console.log(`Example app listening on port http://localhost:3000`);
});

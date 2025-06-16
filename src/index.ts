import express from "express";
import fs from "fs-extra";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    name: "jo",
    age: 18,
  });
});

app.post("/user", (req, res) => {
  console.log(req);
  const { name, age } = req.body;
  res.json({ message: `User ${name}is ${age} years old.` });
});

app.put("/updateUser", (req, res) => {
  const { name, age } = req.body;
  res.send(`updated user ${name} ${age}`);
});

app.delete("/deleteUser", (req, res) => {
  const userId = req.body;
  res.send(`delete user Id ${userId}`);
});

app.listen(3000, () => {
  console.log(`Example app listening on port http://localhost:3000`);
});

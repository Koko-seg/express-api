import { Request, Response } from "express";
import express from "express";

import { Db, MongoClient } from "mongodb";

const app = express();
const port = 3000;

let db: Db;

app.use(express.json());

const uri =
  "mongodb+srv://tseko0301:Tseko-95484678!@cluster0.az6ujvi.mongodb.net/";

const connectDb = async () => {
  try {
    const client = new MongoClient(uri);
    console.log("database connected");
    db = client.db("sample_mflix");
  } catch (error) {
    return error;
  }
};

app.get("/", async (req: Request, res: Response) => {
  // const client = new MongoClient(uri);
  // await client.connect();
  //ymr db gees awahaa bichij ugnu
  // const db = client.db("sample_mflix");

  //tuhain db d bga collectioniig bichij ugnu
  const responses = db.collection("users").find();
  //response array bolgoj huwirgana
  const users = await responses.toArray();
  res.json(users);
});

app.post("/addUser", async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    const response = db.collection("usersTest").insertOne({ name, age });
    res.json((await response).insertedId.getTimestamp());
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port ${port}`);
});

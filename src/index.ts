import { Request, Response } from "express";
import express from "express";
import "dotenv/config";
import { Db, MongoClient } from "mongodb";
import todoRouter from "./router/user/todos.router";

const app = express();
const port = 3000;

export let db: Db;

app.use(express.json());

app.use("/", todoRouter);

const connectDb = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI!);
    await client.connect();
    console.log("database connected");
    db = client.db("sample_mflix");
    return client;
  } catch (error) {
    return error;
  }
};

app.get("/", async (req: Request, res: Response) => {
  //tuhain db d bga collectioniig bichij ugnu
  const responses = db.collection("usersTest").find();
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

app.post("/addManyUser", async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    const response = db.collection("usersTest").insertMany([{ name, age }]);
    res.json((await response).insertedIds);
    // res.json (response)
    // console.log ("Julie", response) // ene heseg dr mdehgu baahan um irsen
  } catch (error) {
    console.log(error);
  }
});

app.put("/changeUser", async (req: Request, res: Response) => {
  try {
    const response = db
      .collection("usersTest")
      .updateOne({ name: "Julie" }, { $set: { age: 20 } });
    res.json(await response);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port ${port}`);
});

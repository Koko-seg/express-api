import { Request, Response } from "express"

export const updateTodo= async (req:Request, res: Response)=> {
    const {id}= req.params
    const updateUser = JSON.parse(existingData).map((user: any) => {
            if (user.userId == userId) {
              return { ...user, name: name, age: age };
            }
          });
          fs.writeFileSync("./user.json", JSON.stringify(updateUser, null, 2));
          res.json(updateUser);
        });
        

}
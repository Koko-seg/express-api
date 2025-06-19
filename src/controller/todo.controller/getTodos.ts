import { Request, Response } from "express";

import fs from "fs-extra";

export const getTodos = async (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json(todos);
};

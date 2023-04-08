import { Request, Response } from "express";
import { prismaClient } from "../../servers/prismaClient";

type IUser = {
  name: string;
  email: string;
};

export class User {
  public async create(req: Request, res: Response) {
    const { email, name } = <IUser>req.body;
    try {
      await prismaClient.user.create({
        data: {
          email,
          name,
        },
      });
      return res.status(200).json({ status: "created", has_error: false });
    } catch (error) {
      return res.status(400).json({ status: "error", has_error: true });
    }
  }
  public async list(req: Request, res: Response) {
    const users = await prismaClient.user.findMany();
    return res.status(200).json({ users, has_error: false });
  }

  public async update(req: Request, res: Response) {
    const body = <IUser>req.body;
    const id = req.params.id;
    try {
      const user = await prismaClient.user.update({
        where: {
          id,
        },
        data: {
          ...body,
        },
      });
      return res.status(200).json({ status: "update", has_error: false });
    } catch (error) {
      return res.status(400).json({ status: "error", has_error: true });
    }
  }

  public async delete(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await prismaClient.user.delete({
        where: {
          id,
        },
      });
      return res.status(200).json({ status: "delete", has_error: false });
    } catch (error) {
      return res.status(400).json({ status: "error", has_error: true });
    }
  }
}

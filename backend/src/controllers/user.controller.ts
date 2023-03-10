import { Request, Response } from "express";
import { User, UserOptionalDefaults, UserPartial } from "../schemas";
import { createUser, findUserById, findUserByUsername } from "../services/user.service";

export const register = async (req: Request<{}, {}, UserOptionalDefaults>, res: Response) => {
  try {
    const { username } = req.body;
    const findUser = await findUserByUsername({ username });
    if(findUser){
      return res.status(400).json({ message: "username ซ้ำกับผู้อื่นในระบบ" });
    }
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export const signin = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "เข้าสู่ระบบสำเร็จ"});
}

export const logout = async (req: Request, res: Response) => {
  req.logOut((error) => {
    if(error){
      return res.status(400).json(error);
    }
    return res.status(200).json({message: "ออกจากระบบสำเร็จ"});
  });
}

export const me = async (req: Request, res: Response) => {
  try {
    const { id } = req.user as User;
    const user = await findUserById({ id });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
}
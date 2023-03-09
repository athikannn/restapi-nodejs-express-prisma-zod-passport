import { Express } from 'express'
import { User as UserType } from "../../src/schemas";

declare global{
  namespace Express {
    interface User extends UserType {}
    interface Request {
      user?: UserType
    }
  }
}

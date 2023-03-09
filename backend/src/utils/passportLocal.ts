import { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { findUserById, findUserByUsername } from "../services/user.service";

const passportLocal = (passport: PassportStatic) => {
  passport.use(new LocalStrategy(async (username, password, cb) => {
    try {
      const findUser = await findUserByUsername({ username });
      if(findUser){
        if(password == findUser.password){
          return cb(null, findUser, { message: "เข้าสู่ระบบสำเร็จ"});
        }else{
          return cb(null, false, { message: "username หรือ password ผิดพลาด"});
        }
      }else{
        return cb(null, false, { message: "ไม่มี username นี้ในระบบ"});
      }
    } catch (error: any) {
      return cb(null, false, error);
    }
  }));

  passport.serializeUser((user: any, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser(async (id: string, cb) => {
    const user = await findUserById({ id });
    if (user) {
      cb(null, user);
    } else {
      cb(null, false);
    }
  });
  
}

export default passportLocal;
import { Router } from "express";
import { logout, register, me, signin } from "../../controllers/user.controller";
import validateResource from "../../middlewares/validateResource";
import { UserOptionalDefaultsSchema } from "../../schemas";
import { z } from "zod";
import { isLoggedIn } from "../../middlewares/isLogedIn";
import { authPassportLocal } from "../../middlewares/authPassportLocal";
const router = Router();

// Auth
router.post('/register', validateResource(z.object({body: UserOptionalDefaultsSchema})), register);
router.post('/signin', validateResource(z.object({body: UserOptionalDefaultsSchema})), authPassportLocal);
router.post('/logout', logout);


router.get('/users/me', isLoggedIn, me);

export default router;
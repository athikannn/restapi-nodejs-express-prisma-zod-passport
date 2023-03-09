import { Router } from "express";
import user from "./user.route";
import post from "./post.route";
import comment from "./comment.route";
const router = Router();

router.use(user);
router.use(post);
router.use(comment);

export default router;
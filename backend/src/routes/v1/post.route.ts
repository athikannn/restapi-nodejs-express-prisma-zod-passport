import { Router } from "express";
import { createOnePost, deleteOnePost, getAllPosts, getOnePost, updateOnePost } from "../../controllers/post.controller";
import validateResource from "../../middlewares/validateResource";
import { z } from "zod";
import { PostOptionalDefaultsSchema } from "../../schemas";
import { isLoggedIn } from "../../middlewares/isLogedIn";

const router = Router();
router.get('/posts', getAllPosts);
router.get('/posts/:id', getOnePost);
router.post('/posts', isLoggedIn, validateResource(z.object({body: PostOptionalDefaultsSchema})), createOnePost);
router.put('/posts/:id', isLoggedIn, validateResource(z.object({body: PostOptionalDefaultsSchema})), updateOnePost);
router.delete('/posts', isLoggedIn, deleteOnePost);

export default router;
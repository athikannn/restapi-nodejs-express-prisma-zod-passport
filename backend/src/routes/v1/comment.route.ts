import { Router } from "express"
import { createOneComment, deleteOneComment, getAllComments, updateOneComment } from "../../controllers/comment.controller";
import { isLoggedIn } from "../../middlewares/isLogedIn";
import validateResource from "../../middlewares/validateResource";
import { z } from "zod";
import { CommentOptionalDefaultsSchema } from "../../schemas";

const router = Router();
router.get('/posts/:id/comments', getAllComments);
router.post('/posts/:id/comments', isLoggedIn, validateResource(z.object({body: CommentOptionalDefaultsSchema})), isLoggedIn, createOneComment);
router.put('/posts/:id/comments/:commentId', isLoggedIn, validateResource(z.object({body: CommentOptionalDefaultsSchema})), isLoggedIn, updateOneComment);
router.delete('/posts/:id/comments/:commentId', isLoggedIn, deleteOneComment);

export default router;

import { Request, Response } from "express";
import { createComment, deleteComment, findAllComments, updateComment } from "../services/comment.service";
import { Comment, CommentOptionalDefaults, CommentPartial } from "../schemas";

export const getAllComments = async (req: Request, res: Response) => {
  try {
    const comments = await findAllComments();
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export const createOneComment = async (req: Request<{ id: string }, {}, Comment>, res: Response) => {
  try {
    req.body.userId = req.user!.id
    req.body.postId = req.params.id
    const comment = await createComment(req.body);
    return res.status(200).json(comment);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export const updateOneComment = async (req: Request<{commentId: string}>, res: Response) => {
  try {
    const comment = await updateComment(req.params.commentId, req.body, req.user!.id);
    return res.status(200).json(comment);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export const deleteOneComment = async (req: Request<{commentId: string}>, res: Response) => {
  try {
    const comment = await deleteComment(req.params.commentId, req.user!.id);
    return res.status(200).json(comment);
  } catch (error) {
    return res.status(400).json(error);
  }
}
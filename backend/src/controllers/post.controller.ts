import { Request, Response } from "express"
import { createPost, deletePost, findAllPosts, findPostById, updatePost } from "../services/post.service";
import { Post, PostOptionalDefaults, PostPartial, User } from "../schemas";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await findAllPosts();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export const getOnePost = async (req: Request<Post>, res: Response) => {
  try {
    const post = await findPostById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export const createOnePost = async (req: Request<{}, {}, Post>, res: Response) => {
  try {
    req.body.userId! = req.user!.id;
    const post = await createPost(req.body);
    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export const updateOnePost = async (req: Request<PostPartial, {}, Post>, res: Response) => {
  try {
    const post = await updatePost(req.params.id!, req.body, req.user!.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export const deleteOnePost = async (req: Request<PostPartial>, res: Response) => {
  try {
    const post = await deletePost(req.params.id!, req.user!.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(400).json(error);
  }
}
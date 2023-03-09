import { prisma } from "../../prisma/client";
import { Post, PostOptionalDefaults, PostPartial } from "../schemas";

export const findAllPosts = () => {
  return prisma.post.findMany();
}

export const findPostById = (postId: string) => {
  return prisma.post.findUnique({
    where: {
      id: postId
    }
  });
}

export const createPost = (payload: Post) => {
  return prisma.post.create({
    data: payload
  });
}

export const updatePost = (postId: string, payload: PostOptionalDefaults, userId: string) => {
  return prisma.post.updateMany({
    where: {
      id: postId,
      userId: userId
    },
    data: payload,
  });
}

export const deletePost = (postId: string, userId: string) => {
  return prisma.post.deleteMany({
    where: { id: postId, userId: userId },
  })
}
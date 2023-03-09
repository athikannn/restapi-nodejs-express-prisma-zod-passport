import { prisma } from "../../prisma/client";
import { Comment, CommentOptionalDefaults } from "../schemas";

export const findAllComments = () => {
  return prisma.comment.findMany();
}

export const createComment = (payload: Comment) => {
  return prisma.comment.create({
    data: payload
  });
}

export const updateComment = (commentId: string, payload: CommentOptionalDefaults, userId: string) => {
  return prisma.comment.updateMany({
    where: {
      id: commentId,
      userId: userId
    },
    data: payload
  });
}

export const deleteComment = (commentId: string, userId: string) => {
  return prisma.comment.deleteMany({
    where: { id: commentId, userId: userId }
  });
}
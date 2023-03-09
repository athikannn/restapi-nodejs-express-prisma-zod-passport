import { prisma } from "../../prisma/client"
import { UserOptionalDefaults, UserPartial, } from "../schemas";

export const createUser = (payload: UserOptionalDefaults) => {
  return prisma.user.create({
    data: payload
  });
}

export const findUserByUsername = (payload: UserPartial) => {
  return prisma.user.findUnique({
    where: {
      username: payload.username
    }
  });
}

export const findUser = async (payload: UserPartial) => {
  return prisma.user.findUnique({
    where: {
      username: payload.username
    }
  }); 
}

export const findUserById = async (payload: UserPartial) => {
  return prisma.user.findUnique({
    where: {
      id: payload.id
    }
  });
}
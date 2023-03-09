/*
  Warnings:

  - You are about to drop the column `bio` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `_categorytopost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categorytopost` DROP FOREIGN KEY `_CategoryToPost_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categorytopost` DROP FOREIGN KEY `_CategoryToPost_B_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `bio`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `role`;

-- DropTable
DROP TABLE `_categorytopost`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `post`;

/*
  Warnings:

  - You are about to drop the column `createdAt` on the `sportswear` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `sportswear` table. The data in that column could be lost. The data in that column will be cast from `MediumInt` to `Decimal(10,2)`.
  - Added the required column `categoryId` to the `sportsWear` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sportswear` DROP COLUMN `createdAt`,
    ADD COLUMN `categoryId` INTEGER NOT NULL,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `price` DECIMAL(10, 2) NOT NULL;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sportsWear` ADD CONSTRAINT `sportsWear_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

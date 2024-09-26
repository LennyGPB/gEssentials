-- CreateTable
CREATE TABLE `Formation` (
    `id_formation` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(50) NOT NULL,
    `description` TEXT NOT NULL,
    `auteur` VARCHAR(50) NOT NULL,
    `prix` DECIMAL(15, 2) NOT NULL,
    `image_url` VARCHAR(50) NULL,
    `categorie` VARCHAR(50) NOT NULL,
    `type` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id_formation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

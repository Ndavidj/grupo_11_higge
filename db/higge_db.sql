DROP DATABASE IF exists higge_db;

CREATE DATABASE higge_db;
use higge_db;

CREATE TABLE `categories` (
   `id` INT,
   `category` VARCHAR(100),
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT AUTO_INCREMENT,
   `firstName` VARCHAR(50) NOT NULL,
   `lastName` VARCHAR(255) NOT NULL,
   `email` VARCHAR(40) NOT NULL,
   `dateBirthday` DATE,
   `address` VARCHAR(255),
   `interest` VARCHAR(100),
   `avatar` VARCHAR(255),
   `password` VARCHAR(50) NOT NULL,
   `roleId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL,
   `name` VARCHAR(60) NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `price` INT NOT NULL,
   `discount` TINYINT,
   `image` VARCHAR(100),
   `categoryId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
   `id` INT AUTO_INCREMENT,
   `role` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users_products` (
   `id` INT,
   `userId` INT NOT NULL,
   `productsId` INT NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_ee5a67c5-923a-4187-8b99-b9254c9002b3` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_b121f266-be89-4884-b54f-84c12253cb96` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`)  ;

ALTER TABLE `users_products` ADD CONSTRAINT `FK_a9349f79-eaef-4f8f-be9f-adb975f77eda` FOREIGN KEY (`userId`) REFERENCES `users`(`id`)  ;

ALTER TABLE `users_products` ADD CONSTRAINT `FK_def08fc7-e324-4c42-9649-642b3161e532` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`)  ;

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `first_name` VARCHAR(255) NOT NULL,
   `last_name` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `birthday` DATE NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `admin` BINARY NOT NULL DEFAULT 0,
   PRIMARY KEY (`id`)
);

CREATE TABLE `artists` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `banner` VARCHAR(255) NOT NULL,
   `artist_picture` VARCHAR(255) NOT NULL,
   `genre_id` INT NOT NULL,
   `description` TEXT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `albums` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `artist_id` INT NOT NULL,
   `name` VARCHAR(255) NOT NULL,
   `release_date` DATE NOT NULL,
   `price` FLOAT NOT NULL,
   `stock` INT NOT NULL,
   `discount` INT,
   `cover_image` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `genres` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `artists` ADD CONSTRAINT `FK_62287d39-5c31-4635-93ca-d25356ba168c` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `albums` ADD CONSTRAINT `FK_0cf3bff4-eed5-4d5c-9fb6-c539081c2d8a` FOREIGN KEY (`artist_id`) REFERENCES `artists`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
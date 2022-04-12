CREATE DATABASE  IF NOT EXISTS `invisiblerecordsdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `invisiblerecordsdb`;
-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: invisiblerecordsdb
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `albums` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `release_date` date NOT NULL,
  `price` float NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `cover_image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_0cf3bff4-eed5-4d5c-9fb6-c539081c2d8a` (`artist_id`),
  CONSTRAINT `FK_0cf3bff4-eed5-4d5c-9fb6-c539081c2d8a` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,1,'Kiss Land','0000-00-00',78,15,0,'/img/products_img/TheWeeknd_KissLand.jpg'),(2,1,'Beauty Behind the Madness','0000-00-00',91,9,0,'/img/products_img/TheWeeknd_BeautyBehindTheMadness.jpg'),(3,1,'Starboy','0000-00-00',98,30,0,'/img/products_img/TheWeeknd_Starboy.jpg'),(4,1,'After Hours','0000-00-00',86,17,0,'/img/products_img/TheWeeknd_AfterHours.jpg'),(5,1,'Dawn FM','0000-00-00',114,45,0,'/img/products_img/TheWeeknd_DawnFM.png'),(6,2,'Settle','0000-00-00',56,17,0,'/img/products_img/Disclosure_Settle.jpg'),(7,2,'Caracal','0000-00-00',64,19,0,'/img/products_img/Disclosure_Caracal.jpg'),(8,2,'Energy','0000-00-00',59,12,0,'/img/products_img/Disclosure_Energy.jpg'),(9,3,'Get Scraped','0000-00-00',56,17,0,'/img/products_img/Deadmau5_GetScraped.jpg'),(10,3,'Vexillology','0000-00-00',64,19,0,'/img/products_img/Deadmau5_Vexillology.jpg'),(11,3,'Random Album Title','0000-00-00',59,12,0,'/img/products_img/Deadmau5_RandomAlbumTitle.jpg'),(12,3,'For Lack of a Better Name','0000-00-00',59,12,0,'/img/products_img/Deadmau5_ForLackOfBetterName.jpg'),(13,3,'4×4=12','0000-00-00',59,12,0,'/img/products_img/Deadmau5_4412.jpg'),(14,3,'Album Title Goes Here ','0000-00-00',59,12,0,'/img/products_img/Deadmau5_AlbumTitleGoesHere.jpg'),(15,3,'While(1<2)','0000-00-00',59,12,0,'/img/products_img/Deadmau5_While12.jpg'),(16,3,'W:/2016Album/','0000-00-00',59,12,0,'/img/products_img/Deadmau5_W2016Album.png');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `artist_picture` varchar(255) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_62287d39-5c31-4635-93ca-d25356ba168c` (`genre_id`),
  CONSTRAINT `FK_62287d39-5c31-4635-93ca-d25356ba168c` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (1,'The Weeknd','Weekend.png','Weekend.png',1,'Abel Makkonen Tesfaye (born February 16, 1990), known professionally as the Weeknd, is a Canadian singer-songwriter and record producer. Known for his sonic versatility and dark lyricism, Tesfaye\'s music explores escapism, romance, and melancholia, and is often inspired by personal experiences. '),(2,'Disclosure','Disclosure.png','Disclosure.png',2,'Disclosure is an English electronic music duo consisting of brothers Howard (born 11 May 1994) and Guy Lawrence (born 25 May 1991).  They grew up in Reigate, Surrey. '),(3,'Deadmau5','Deadmau5.png','Deadmau5.png',2,'Joel Thomas Zimmerman (born January 5, 1981),[2] known professionally as Deadmau5 (stylized as deadmau5; pronounced \'dead-mouse\'), is a Canadian electronic music producer, DJ, and musician.');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Hip-Hop'),(2,'Electronic');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-12  3:46:50

-- MariaDB dump 10.19  Distrib 10.6.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: prueba
-- ------------------------------------------------------
-- Server version	10.6.11-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Street_Figther2`
--

DROP TABLE IF EXISTS `Street_Figther2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Street_Figther2` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Habilidad` varchar(255) NOT NULL,
  `Nacionalidad` varchar(255) DEFAULT NULL,
  `Poderes` char(1) DEFAULT NULL,
  `Disponible` char(1) NOT NULL,
  `Estilo_Pelea` varchar(255) DEFAULT NULL,
  `Activo` char(1) DEFAULT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Street_Figther2`
--

LOCK TABLES `Street_Figther2` WRITE;
/*!40000 ALTER TABLE `Street_Figther2` DISABLE KEYS */;
INSERT INTO `Street_Figther2` VALUES (1,'Retsu','Luchar','Japon','S','S','Shorinji Kempo','S','2022-11-10 16:22:40','2022-11-10 16:22:40'),(2,'Geki','Luchar','Japon','N','S','Ninjutsu','S','2022-11-10 16:24:40','2022-11-10 16:27:48'),(3,'Joe','Crear aire y manipularlo ','EUA','S','S','Kick boxing','S','2022-11-10 16:27:48','2022-11-10 16:27:48'),(4,'Mike','Peleas callegeras','EUA','N','S','Boxeo','S','2022-11-10 16:35:08','2022-11-10 16:35:08'),(5,'Lee','Pelea','China','N','S','Kung-Fu','S','2022-11-10 16:37:33','2022-11-10 16:37:33');
/*!40000 ALTER TABLE `Street_Figther2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuarios` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(255) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Genero` char(1) DEFAULT NULL,
  `Contraseña` varchar(255) NOT NULL,
  `Fecha_Nacimiento` date DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,'cardozadallana16@gmail.com','Dallana','Cardoza Martinez',21,'F','1234','2001-06-16','N','2022-10-11 15:40:00','2022-12-05 17:30:37'),(2,'daniramon14@gmail.com','Daniela','Ramon Feria',21,'f','1234','2001-07-27','N','2022-10-11 15:42:34','2022-10-24 15:50:59'),(3,'yamin07@gmail.com','Yasmin','Cardoza Martinez',19,'F','1234','2001-09-07','s','2022-10-11 15:46:47','2022-10-11 15:46:47'),(4,'amanda16@gmail.com','Amanda Julissa','Cardoza Martinez',16,'F','12345','2004-01-16','S','2022-10-26 15:19:41','2022-10-26 15:19:41'),(7,'carlos@gmail.com','Sofia','Lopez Lopez',20,'','12345','1900-01-01','S','2022-10-26 15:46:07','2022-10-27 15:50:36'),(8,'julia@gmail.com','Julia','Martinez',30,'F','$2a$10$ligMHRvUX6BAYtJMnvGeAen98oX9B8PU0k2pDQXd1BJ2RQtaXzuAu','1900-01-01','S','2022-10-28 15:45:44','2022-11-07 17:38:35'),(9,'Yas@min.com','Yasmin','Cardoza Martinez',16,'F','$2a$10$alnInOJLCBU5hvcnJoPK9ut6zYSYTH3GNfU34GdaYtNzb9awpPuf2','1900-01-01','S','2022-11-07 17:48:13','2022-11-07 17:48:47'),(10,'MAria@gmail','MAria','Garcia',20,'f','$2a$10$R69Nx9IqwEDGsqxR9EWV7ew.23iOOTriKEoUa8hPHjvOLmDB7T2.i','1900-01-01','S','2022-11-14 16:15:20','2022-11-14 16:15:20'),(11,'suan@gmail','MAria','Garcia',20,'f','$2a$10$1n4oVlAm5gKAHYwuSVzQ8ulUmeF8IWRAPTYvcjqEN.f7Ux8snnjyi','1900-01-01','S','2022-11-15 16:13:02','2022-11-15 16:13:02'),(12,'kaisduiesdu@gmail','MAria','Garcia',20,'f','$2a$10$LGVEupvowRRU1OQvpWyEmOv2PW5vDiCv3ffxpFZ5Fzs6x.XdiqL6i','1900-01-01','S','2022-11-15 16:13:37','2022-11-15 16:13:37'),(13,'Mariana@gmail','Mariana','Gallegos',20,'f','$2a$10$cWnjjgGQmm7eMmSoHueAcOIA9eUYWKYhW834LhARu6te9jPPMr6Um','1900-01-01','S','2022-11-15 16:15:57','2022-11-15 16:15:57'),(14,'alicia@gmail.com','Alicia','Gomez',16,'F','$2a$10$EIT92cgAtQkIdflvYfje0uwloApK.mpDApDfl4j8fiZfjxKsk4.le','1900-01-01','S','2022-12-05 17:25:34','2022-12-05 17:25:34');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-05 11:41:40

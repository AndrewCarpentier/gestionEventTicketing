-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 09 mai 2023 à 01:11
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ticketing2`
--

-- --------------------------------------------------------

--
-- Structure de la table `bookmark`
--

CREATE TABLE `bookmark` (
  `id` int(11) NOT NULL,
  `id_event` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Activités scolaires'),
(2, 'Arts du spectacle et de la scène'),
(3, 'Automobiles, bateaux et avions'),
(4, 'Autre'),
(5, 'Concerts et spectacles'),
(6, 'Famille et éducation'),
(7, 'Films et divertissement'),
(8, 'Fête et événement saisonnier'),
(9, 'Gastronomie'),
(10, 'Maison et mode de vie'),
(11, 'Mode et beauté'),
(12, 'Passions et loisirs'),
(13, 'Politique et gouvernement'),
(14, 'Religion et spiritualité'),
(15, 'Santé et bien-être'),
(16, 'Sciences et technologies'),
(17, 'Sports et fitness'),
(18, 'Voyages et activités de plein air'),
(19, 'Événement communautaire et culturel'),
(20, 'Événements professionnels'),
(21, 'Œuvres de bienfaisance');

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL,
  `localisation` varchar(255) NOT NULL,
  `information` text NOT NULL,
  `nbPlace` int(11) DEFAULT NULL,
  `placeSell` int(11) DEFAULT NULL,
  `urlThumbnail` varchar(255) NOT NULL,
  `urlImg` varchar(255) NOT NULL,
  `creationDate` date NOT NULL,
  `startHour` float NOT NULL,
  `endHour` float NOT NULL,
  `password` varchar(50) NOT NULL,
  `datePublish` date NOT NULL,
  `hourPublish` float NOT NULL,
  `linkOnlineEvent` varchar(50) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_subCategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `event`
--

INSERT INTO `event` (`id`, `name`, `startDate`, `endDate`, `localisation`, `information`, `nbPlace`, `placeSell`, `urlThumbnail`, `urlImg`, `creationDate`, `startHour`, `endHour`, `password`, `datePublish`, `hourPublish`, `linkOnlineEvent`, `id_user`, `id_category`, `id_subCategory`) VALUES
(2, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(3, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(4, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(5, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(6, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(7, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(8, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(9, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(10, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(11, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(12, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(13, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(14, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(15, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(16, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(17, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(18, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(19, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(20, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(21, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(22, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(23, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(24, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(25, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(26, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(27, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(28, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(29, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(30, 'concert', '2023-05-17', '2023-05-17', '5 rue marconi', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(31, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(32, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(33, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(34, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(35, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(36, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(37, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(38, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(39, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(40, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(41, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(42, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(43, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(44, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(45, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(46, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(47, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(48, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(49, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(50, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(51, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(52, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(53, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(54, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(55, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(56, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(57, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(58, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(59, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(60, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(61, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(62, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(63, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(64, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(65, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(66, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(67, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(68, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(69, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(70, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(71, 'concert', '2023-05-18', '2023-05-18', '100 Rue Pablo Picasso, 59220 Rouvignies', 'test', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg', '2023-05-03', 18.3, 20, '', '2023-05-04', 18, '', 1, 5, 30),
(72, 'test', '2023-05-08', '2023-05-08', '6 rue marconi', 'dqssq', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-08', 0, 0, '', '2023-05-08', 0, '', 1, 1, 1),
(73, 'test', '2023-05-08', '2023-05-08', '6 rue marconi', 'dqssq', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-08', 0, 0, '', '2023-05-08', 0, '', 1, 1, 1),
(74, 'test', '2023-05-08', '2023-05-08', 'sqdsq', 'dsqdq', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-08', 0, 0, '', '2023-05-08', 0, '', 1, 1, 1),
(75, 'test', '2023-05-08', '2023-05-08', 'sqdsq', 'trest', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-08', 0, 0, '', '2023-05-28', 0, '', 1, 3, 25),
(76, 'test', '2023-05-08', '2023-05-08', 'sqdsq', 'aaaaaaaaaaaaaa', NULL, NULL, 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', 'https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete.jpg', '2023-05-08', 0, 0, '', '2023-05-08', 0, '', 1, 3, 25);

-- --------------------------------------------------------

--
-- Structure de la table `event_tag`
--

CREATE TABLE `event_tag` (
  `id` int(11) NOT NULL,
  `id_event` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `id_event` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `password_lost`
--

CREATE TABLE `password_lost` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `password_lost`
--

INSERT INTO `password_lost` (`id`, `token`, `id_user`) VALUES
(1, 'cEuFEXWwkIyhMg4qcPzqOP23bRnfpKjA', 2),
(2, 'LNb4qFE5cZ1cYH9WLcC1PAygUa3RFXt9', 2),
(3, 'uxJwrBmJuwuRHbzRI3U1AdmfEGZlnfuq', 2),
(4, '3yJoKRgh2D2NigQkBSQruiM5psmkV7jp', 2),
(5, 'kr0h2XSEGczSxUcFt2CycVMW21TCsdxf', 2),
(6, 'hvVIjsTAW6Bnv5Fl3Tic4PdMmhp3TSQ1', 2);

-- --------------------------------------------------------

--
-- Structure de la table `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `placeNumber` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `id_event` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `subcategory`
--

CREATE TABLE `subcategory` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `id_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `subcategory`
--

INSERT INTO `subcategory` (`id`, `name`, `id_category`) VALUES
(1, 'After School Care', 1),
(3, 'Dinner', 1),
(4, 'Fund Raiser', 1),
(5, 'Parking', 1),
(6, 'Public Speaker', 1),
(7, 'Raffle', 1),
(8, 'Artisanat', 2),
(9, 'Artisanat', 2),
(10, 'Arts littéraires ', 2),
(11, 'Autre', 2),
(12, 'Ballets', 2),
(13, 'Beaux-arts', 2),
(14, 'Comédie', 2),
(15, 'Danse', 2),
(16, 'Design', 2),
(17, 'Jewelry', 2),
(18, 'Opéra', 2),
(19, 'Orchestre', 2),
(20, 'Painting', 2),
(21, 'Pièces de théâtre', 2),
(22, 'Sculpture', 2),
(23, 'spectacles musicaux', 2),
(24, 'Autre', 3),
(25, 'Avion', 3),
(26, 'Bateau', 3),
(27, 'Moto / Quad', 3),
(28, 'Voiture', 3),
(30, 'Acoustic', 5),
(31, 'Americana', 5),
(32, 'Autre', 5),
(33, 'Bluegrass', 5),
(34, 'Blues', 5),
(35, 'Blues et jazz', 5),
(36, 'Chants spirituels / religieux', 5),
(37, 'Classique', 5),
(38, 'DJ/Dance', 5),
(39, 'Dance / Électronique', 5),
(40, 'EDM', 5),
(41, 'Electronic', 5),
(42, 'Experimental', 5),
(43, 'Heavy metal', 5),
(44, 'Hip Hop / Rap', 5),
(45, 'Jazz', 5),
(46, 'Musique alternative', 5),
(47, 'Musique du monde', 5),
(48, 'Musique indépendante', 5),
(49, 'Musique latino', 5),
(50, 'Musique traditionnelle', 5),
(51, 'Opéra', 5),
(52, 'Pays', 5),
(53, 'Pop', 5),
(54, 'Psychedelic', 5),
(55, 'Punk/Hardcore', 5),
(56, 'R & B', 5),
(57, 'Reggae', 5),
(58, 'Rock', 5),
(59, 'Singer/Songwriter', 5),
(60, 'World', 5),
(61, 'Associations de parents', 6),
(62, 'Autre', 6),
(63, 'Bébés', 6),
(64, 'Enfants et jeunes', 6),
(65, 'Parents', 6),
(66, 'Réunions', 6),
(67, 'Senior Citizen', 6),
(68, 'Éducation', 6),
(69, 'Étudiants', 6),
(70, 'Adultes', 7),
(71, 'Anime', 7),
(72, 'Autre', 7),
(73, 'Comics', 7),
(74, 'Comédie', 7),
(75, 'Films', 7),
(76, 'Jeux', 7),
(77, 'TV', 7),
(78, 'Action de grâce', 8),
(79, 'Autre', 8),
(80, 'Fête de la st Partick', 8),
(81, 'Fête nationnale', 8),
(82, 'Halloween', 8),
(83, 'Hanukkah', 8),
(84, 'Nouvel An', 8),
(85, 'Noël', 8),
(86, 'Pâques', 8),
(87, 'Événements d\'automne', 8),
(88, 'Autre', 9),
(89, 'Bière', 9),
(90, 'Gastronomie', 9),
(91, 'Spiritueux', 9),
(92, 'Vins', 9),
(93, 'Animaux de compagnie et autres', 10),
(94, 'Autre', 10),
(95, 'Maison et jardin', 10),
(96, 'Rencontres', 10),
(97, 'Accessoires', 11),
(98, 'Autre', 11),
(99, 'Esthétique', 11),
(100, 'Mode', 11),
(101, 'Mode mariage', 11),
(102, 'Anime / Comics', 12),
(103, 'Autre', 12),
(104, 'Bricolage', 12),
(105, 'Dessin et peinture', 12),
(106, 'Jeux', 12),
(107, 'Lecture', 12),
(108, 'Photographie', 12),
(109, 'Tricot', 12),
(110, 'Autre', 13),
(111, 'Autre parti', 13),
(112, 'Gouvernance du comté/ de la municipalité', 13),
(113, 'Gouvernement d\'état', 13),
(114, 'Gouvernement fédéral', 13),
(115, 'International Affairs', 13),
(116, 'Military', 13),
(117, 'National Security', 13),
(118, 'Non partisans', 13),
(119, 'Parti démocrate', 13),
(120, 'Parti républicain', 13),
(121, 'Agnosticism', 14),
(122, 'Atheism', 14),
(123, 'Autre', 14),
(124, 'Buddisme', 14),
(125, 'Christianisme', 14),
(126, 'Folk Religions', 14),
(127, 'Hinduism', 14),
(128, 'Islam', 14),
(129, 'Judaïsme', 14),
(130, 'Mormonisme', 14),
(131, 'Mysticisme et sciences occultes', 14),
(132, 'New Age', 14),
(133, 'Religions d\'Orient', 14),
(134, 'Shintoism', 14),
(135, 'Sikhisme', 14),
(136, 'Unaffiliated', 14),
(137, 'Autre', 15),
(138, 'Domaine médical', 15),
(139, 'Forme', 15),
(140, 'Santé mentale', 15),
(141, 'Spa', 15),
(142, 'Yoga', 15),
(143, 'Autre', 16),
(144, 'Biotechnologie', 16),
(145, 'Haute technologie', 16),
(146, 'Mobile', 16),
(147, 'Médecine', 16),
(148, 'Médias sociaux', 16),
(149, 'Robotique', 16),
(150, 'Sciences', 16),
(151, 'Autre', 17),
(152, 'Baseball', 17),
(153, 'Basket', 17),
(154, 'Camps', 17),
(155, 'Cheer', 17),
(156, 'Combats et arts martiaux', 17),
(157, 'Course à pied', 17),
(158, 'Cyclisme', 17),
(159, 'Exercices', 17),
(160, 'Football', 17),
(161, 'Football américain', 17),
(162, 'Golf', 17),
(163, 'Hockey', 17),
(164, 'Lacrosse', 17),
(165, 'Natation et sports nautiques', 17),
(166, 'Obstacles', 17),
(167, 'Promenades', 17),
(168, 'Rugby', 17),
(169, 'Softball', 17),
(170, 'Sports automobiles', 17),
(171, 'Sports d\'hiver', 17),
(172, 'Tennis', 17),
(173, 'Track & Field', 17),
(174, 'VTT', 17),
(175, 'Volley', 17),
(176, 'Weightlifting', 17),
(177, 'Wrestling', 17),
(178, 'Yoga', 17),
(179, 'Autre', 18),
(180, 'Canoë', 18),
(181, 'Escalade', 18),
(182, 'Kayak', 18),
(183, 'Rafting', 18),
(184, 'Randonnées', 18),
(185, 'Voyages', 18),
(186, 'Autre', 19),
(187, 'Comté', 19),
(188, 'Département', 19),
(189, 'Historic', 19),
(190, 'Héritage', 19),
(191, 'Langue', 19),
(192, 'Moyen-Âge', 19),
(193, 'Municipalité/ ville', 19),
(194, 'Nationnalité', 19),
(195, 'Renaissance', 19),
(196, 'Autre', 20),
(197, 'Design', 20),
(198, 'Emploi', 20),
(199, 'Environnement et développement durable', 20),
(200, 'Finance', 20),
(201, 'Immobilier', 20),
(202, 'Investment', 20),
(203, 'Médias', 20),
(204, 'Startups et petites entreprises', 20),
(205, 'Ventes et marketing', 20),
(206, 'Éducation', 20),
(207, 'Œuvres caritatives et ONG', 20),
(208, 'Aide humanitaire', 21),
(209, 'Aide internationale', 21),
(210, 'Autre', 21),
(211, 'Bien-être animal', 21),
(212, 'Droits humains', 21),
(213, 'Environnement', 21),
(214, 'Pauvreté', 21),
(215, 'Système de santé', 21),
(216, 'Éducation', 21);

-- --------------------------------------------------------

--
-- Structure de la table `tag`
--

CREATE TABLE `tag` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `numCommand` int(11) NOT NULL,
  `urlQRCode` varchar(255) NOT NULL,
  `placeNumber` int(11) NOT NULL,
  `price` float NOT NULL,
  `startDateSell` date NOT NULL,
  `endDateSell` date NOT NULL,
  `startHourSell` float NOT NULL,
  `endHourSell` float NOT NULL,
  `sell` int(11) NOT NULL,
  `id_section` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `urlThumbnail` varchar(255) NOT NULL,
  `gender` int(11) NOT NULL,
  `creationDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `mail`, `firstname`, `lastname`, `password`, `urlThumbnail`, `gender`, `creationDate`) VALUES
(1, 'test@test.fr', 'andrew', 'Carpentier', '$2b$10$e6LZ/Zeq2PhtzXxZ4dmqTuyfQMdqTTnmbm1pQn/SVRHIKr8Aqn4e2', '', 0, '2023-05-03'),
(2, 'andr3wcarpentier@gmail.com', 'andrew', 'Carpentier', '$2b$10$ebRdqIl0eXcAo1oeL2IIfu1aZ0qumbLZBTrPQT7uliMmFtsr3Gzw6', '', 0, '2023-05-09');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `bookmark`
--
ALTER TABLE `bookmark`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bookmark_event_FK` (`id_event`),
  ADD KEY `bookmark_user0_FK` (`id_user`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_user_FK` (`id_user`),
  ADD KEY `event_category0_FK` (`id_category`),
  ADD KEY `event_subCategory1_FK` (`id_subCategory`);

--
-- Index pour la table `event_tag`
--
ALTER TABLE `event_tag`
  ADD PRIMARY KEY (`id`,`id_event`),
  ADD KEY `event_tag_event0_FK` (`id_event`);

--
-- Index pour la table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `history_event_FK` (`id_event`),
  ADD KEY `history_user0_FK` (`id_user`);

--
-- Index pour la table `password_lost`
--
ALTER TABLE `password_lost`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`),
  ADD KEY `section_event_FK` (`id_event`);

--
-- Index pour la table `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subCategory_category_FK` (`id_category`);

--
-- Index pour la table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ticket_section_FK` (`id_section`),
  ADD KEY `ticket_user0_FK` (`id_user`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `bookmark`
--
ALTER TABLE `bookmark`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT pour la table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `password_lost`
--
ALTER TABLE `password_lost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `section`
--
ALTER TABLE `section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=217;

--
-- AUTO_INCREMENT pour la table `tag`
--
ALTER TABLE `tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `bookmark`
--
ALTER TABLE `bookmark`
  ADD CONSTRAINT `bookmark_event_FK` FOREIGN KEY (`id_event`) REFERENCES `event` (`id`),
  ADD CONSTRAINT `bookmark_user0_FK` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `event_category0_FK` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `event_subCategory1_FK` FOREIGN KEY (`id_subCategory`) REFERENCES `subcategory` (`id`),
  ADD CONSTRAINT `event_user_FK` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `event_tag`
--
ALTER TABLE `event_tag`
  ADD CONSTRAINT `event_tag_event0_FK` FOREIGN KEY (`id_event`) REFERENCES `event` (`id`),
  ADD CONSTRAINT `event_tag_tag_FK` FOREIGN KEY (`id`) REFERENCES `tag` (`id`);

--
-- Contraintes pour la table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_event_FK` FOREIGN KEY (`id_event`) REFERENCES `event` (`id`),
  ADD CONSTRAINT `history_user0_FK` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `section`
--
ALTER TABLE `section`
  ADD CONSTRAINT `section_event_FK` FOREIGN KEY (`id_event`) REFERENCES `event` (`id`);

--
-- Contraintes pour la table `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `subCategory_category_FK` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`);

--
-- Contraintes pour la table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_section_FK` FOREIGN KEY (`id_section`) REFERENCES `section` (`id`),
  ADD CONSTRAINT `ticket_user0_FK` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

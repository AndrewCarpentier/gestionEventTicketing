-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 16 juin 2023 à 01:17
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
-- Base de données : `eventgestion2`
--

-- --------------------------------------------------------

--
-- Structure de la table `bookmark`
--

CREATE TABLE `bookmark` (
  `id` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `id_event` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `bookmark`
--

INSERT INTO `bookmark` (`id`, `date`, `id_event`, `id_user`) VALUES
(2, '', 36, 1),
(3, '', 31, 1);

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
-- Structure de la table `command`
--

CREATE TABLE `command` (
  `id` int(11) NOT NULL,
  `number` varchar(255) NOT NULL,
  `creationDate` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `command_ticket`
--

CREATE TABLE `command_ticket` (
  `id` int(11) NOT NULL,
  `id_command` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `localisation` varchar(255) NOT NULL,
  `linkOnlineEvent` varchar(255) NOT NULL,
  `information` text NOT NULL,
  `urlImg` varchar(255) NOT NULL,
  `public` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `creationDate` varchar(255) NOT NULL,
  `startDate` varchar(255) NOT NULL,
  `endDate` varchar(255) DEFAULT NULL,
  `publishDate` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_subCategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `event`
--

INSERT INTO `event` (`id`, `name`, `localisation`, `linkOnlineEvent`, `information`, `urlImg`, `public`, `password`, `creationDate`, `startDate`, `endDate`, `publishDate`, `id_user`, `id_category`, `id_subCategory`) VALUES
(22, 'Belgian Crew\'s National Championship Ride', 'IzyCoffee Izegem 27 Nieuwstraat 8870 Izegem Belgique', '', 'Détails pratiques :\n\nDate : dimanche 4 juin 2023\n\nHeure: 9h00 collecte, 9h30 déploiement\n\nDistance : 100km (+/- 4h de vélo)\n\nVitesse moyenne : 27-28km/h, selon le groupe.\n\nTout le monde attend toujours.\n\nLa participation à l\'événement est ouverte à tous. Boisson gratuite après la balade.\n\nÉtiquette:\n\nRespectez le code de la route en tout temps, nous roulons 2 par 2.\n\nChaque participant garantit qu\'il est assuré.\n\nCasque obligatoire.\n\nAssurez-vous que votre vélo est en bon état avant de partir.\n\nApportez votre propre matériel de rechange.\n\nBelgian Crew ne peut être tenu responsable de tout ce qui se passe pendant l\'événement. En vous inscrivant et en participant, vous confirmez que vous acceptez toutes les mesures de sécurité. L\'inscription en ligne est obligatoire pour participer.', 'image_97911684190976566.jpg', 1, '', '2023-05-15T22:49:36Z', '2023-06-04T07:00:00Z', '2023-06-04T18:00:00Z', '2023-05-16T00:00:00Z', 3, 17, 158),
(23, 'ICRT Animal Reiki Master avec un enseignant de centre agréé Sonora CA et en ligne', '', '', 'ICRT Animal Reiki Master Training - En ligne\n\nLe cours Animal Reiki Master fournit l\'énergie Animal Reiki, ainsi que les outils et les techniques nécessaires pour pratiquer, partager le Reiki avec les animaux et enseigner le Reiki Animal avec compétence et expertise. Vous apprendrez les outils et techniques plus approfondis pour les sessions, ainsi que la façon d\'enseigner les outils et techniques pour votre cours de Reiki animal en tant que maître praticien. Après avoir terminé ce cours, vous serez en mesure d\'enseigner des cours de niveau Animal Reiki I & II et Animal Reiki Master, en ligne et en personne.\n\nSi vous vous sentez appelé à aider les animaux ou si vous travaillez déjà avec des animaux mais souhaitez approfondir vos compétences et votre technique ou si vous vous sentez appelé à enseigner le Reiki animal, l\'énergie Animal Reiki est spécifiquement une énergie reiki pour les animaux. Le symbole Animal Reiki reçu dans cette classe de maître renforce la vitalité et la force vitale des animaux et des personnes. Il unifie la conscience humaine et animale chez le praticien Reiki. L\'énergie Animal Reiki et cette classe de maître sont profondément curatives pour les gens, autant que pour les animaux.\n\nLe cours Master est également livré avec le manuel complet du maître Animal Reiki avec les plans de classe inclus.\n\nDans ce cours de 3 jours, vous allez :\n\nApprenez des compétences supplémentaires pour aider à guérir et travailler avec des animaux en utilisant le Reiki.\n\nRecevez quatre allumages à l\'énergie animale Reiki.\n\nRecevez le symbole Animal Reiki Energy.\n\nRecevez des expériences et des méditations.\n\nÊtre qualifié pour enseigner Animal Reiki I & II et Animal Reiki Master à la fin du cours.\n\nCe cours de Master est idéal si vous souhaitez :\n\nApprofondissez votre expérience, vos connaissances et votre communion avec les animaux et la Terre Divine.\n\nApprenez des outils de guérison supplémentaires pour les praticiens et des outils de guérison Animal Reiki - y compris comment harmoniser les animaux à l\'énergie Animal Reiki.\n\nEnseignez le Reiki Animal aux autres.\n\nRecevez des instructions sur la façon de donner des stages pour Animal Reiki I & II, Master et comment mener les expériences et quatre allumages pour Animal Reiki Master.\n\nAvoir du temps de pratique pratique tous les jours de cours.\n\nApprenez les outils et les techniques pour créer un cours de Reiki Animal, y compris les techniques de cours en ligne.\n\nLa formation Animal Reiki Master est un cours de trois jours. Ce cours est ouvert à toutes les lignées de Reiki et à tous les systèmes de croyances ayant des relations avec les animaux, mais vous devez être au niveau Animal Reiki I & II et humain Reiki Master pour vous inscrire.', 'image_71821684191181143.jpg', 1, '', '2023-05-15T22:53:01Z', '2023-06-02T16:00:00Z', '2023-06-05T00:30:00Z', '2023-05-15T22:00:00Z', 3, 6, 62),
(24, 'Grande Vente de Plantes - Lille', 'Garage 34 Boulevard Carnot 59800 Lille', '', 'GOOD NEWS ! Plantes Pour Tous revient à Lille avec sa Grande Vente de Plantes de FOLIE à prix mini ????\n\n???? Garage - 34 boulevard Carnot, Lille\n\n???? Pour rappel, toute notre sélection est direct producteur et arrive le matin même du 1er jour de vente. Nous n\'avons pas de réassort durant le week-end - Premier arrivé, premier servi !\n\n⚠️ Paiement CB uniquement ????\n\nRéserve ton billet ici, c\'est gratuit !\n\n____________________\n\nAU PROGRAMME\n\n- Un max de plantes à prix mini,\n\n- Un choix unique en ville (+ de 150 variétés de plantes), Monstera, Pilea, Ficus, Calathea*…,\n\n- Des plantes d’intérieur et d’extérieur directs producteurs pour un max de fraîcheur,\n\n-﻿ Des herbes aromatiques pour sublimer tes plats,\n\n- Des grandes plantes et plantes rares à 15€ et +,\n\n- Des plantes triées par catégories pour t’aider à faire ton choix (Pour débutants, plantes d’ombre, les increvables…),\n\n- Des accessoires à la pelle, pots, cache-pots... pour pimper tes plantes !\n\n???? Et parce-qu\'on aime vous surprendre, chaque dernier jour de vente te réservera dorénavant une surprise pour laquelle tu succomberas peut-être !? ???? ????\n\n____________________\n\nINFOS PRATIQUES\n\n???? Garage - 34 boulevard Carnot, Lille\n\n???? Jeudi 1 juin de 10h à 19h\n\n???? Vendredi 2 juin de 10h à 19h\n\n???? Samedi 3 juin de 10h à 17h\n\n???? Paiement CB uniquement.\n\n♿️ Accessible aux personnes à mobilité réduite.\n\n???? Événement Pet Friendly\n\nPrépare-toi pour la jungle ✌️\n\n* Sous réserve de disponibilités auprès des producteurs.', 'image_46831684191428727.jpg', 1, '', '2023-05-15T22:57:08Z', '2023-06-01T08:00:00Z', '2023-06-03T15:00:00Z', '2023-05-15T22:00:00Z', 3, 15, 137),
(25, 'Salon Agro Hauts-de-France', 'Artois Expo 50 Avenue Roger Salengro 62223 Saint-Laurent-Blangy', '', 'Vous êtes un professionnel du secteur agroalimentaire ?\n\nInscrivez-vous pour recevoir votre badge d\'entrée !\n\nEntrée gratuite mais inscription obligatoire.\n\nAvec plus de 800 établissements représentant quelque 45 000 salariés, la filière agroalimentaire est l’un des piliers économiques de la région Hauts-de-France. Le Salon Agro Hauts-de-France a pour ambition de mettre en relation les industriels de la filière avec leurs fournisseurs >>> Voir la liste des exposants\n\nP﻿lus d\'infos sur : salonagro-hdf.fr\n\nLe même jour, profitez du RV Formulation, le salon de l’ingrédient organisé par l’Adrianor, destiné lui aussi aux industriels de l’agroalimentaire', 'image_75101684191556101.jpg', 1, '', '2023-05-15T22:59:16Z', '2023-05-23T07:00:00Z', '2023-05-23T15:00:00Z', '2023-05-15T22:00:00Z', 3, 20, 196),
(26, 'EuroBasket Women 2023 Preparation: Belgian Cats vs. Greece', 'Mons Arena Rue des Laminoirs 2 7012 Mons Belgium', '', 'Les Belgian Cats jouent 4 matchs de préparation à domicile avant de se rendre à l\'EuroBasket Women 2023 :\n\n26/5 à Mons vs. Grèce\n28/5 à Braine vs. Grèce\n8/5 à Courtrai vs. Chine\n10/6 à Louvain vs. Chine\n\nACHETEZ VOTRE MAILLOT OFFICIEL 2023 AVANT LE 21/5 ET RÉCUPÉREZ-LE AVANT LE MATCH.\nAchetez votre maillot de fan et gagnez une chance de participer à l\'EuroBasket Women avec les Cats !\n\nPour chaque chemise vendue, un numéro entrera dans la loterie. Le billet de loterie gagnant sera tiré au sort le 10/6. Le prix ? Un voyage pour 2 à l\'EuroBasket Women ! Consultez tous les détails et conditions de cette promotion sur www.basketballbelgium.be/tickets-vip.', 'image_65291684191667446.jpg', 1, '', '2023-05-15T23:01:07Z', '2023-05-26T18:00:00Z', '2023-05-26T21:30:00Z', '2023-05-15T22:00:00Z', 3, 17, 153),
(27, 'SCOTT H. BIRAM w/ LITTLE LEGS', 'Place Saint-Pierre 13-14 Place Saint-Pierre 7500 Tournai Belgium', '', 'Scott H. Biram\n\nThe Dirty Old One Man Band\n\nAustin, TX USA\n\nLabel: Bloodshot Records\n\nScott H. Biram unleashes a fervent display of conviction through, not\n\nonly the genuine blues, classic country, bluegrass, and rock n roll,\n\nbut he seals the deal with punk, heavy metal, and frankly, anything\n\nelse he wants to. He’s The Dirty Old One Man Band.\n\nHe will still the room with haunting South Texas blues, then turn it\n\nupside down, into a truck driver\'s mosh pit. Like he says, it might be\n\nbaptism, or it might be murder, either way...you gonna see the light.\n\nThis legally ordained preacher’s singing, yodeling, growling, leering\n\nand brash preachin\' and hollerin\' is accompanied by sloppy riffs, and\n\nlicks literally yanked, one at a time, out of his collection of\n\ncrusty, worn out, Gibson hollowbody guitars, and battle axes. All this\n\nheld down with a pounding backbeat brought forth by his amplified left\n\nfoot, and self customed stomp board. The remainder of this brutally\n\ncharming one-man band consists of an unwieldy combination of beat-up\n\namplifiers and old microphones strung together by a tangled mess of\n\nguitar cables. Don’t get too close! You gonna get some grease on ya!\n\nYears of compulsive touring, along with a steady diet of down and\n\ndirty blues, rock, punk, country, and hillbilly have developed Scott\n\nH. Biram\'s signature concoction, attracting a hefty array of fans who\n\ndig the bizarre and twisted sides of the rock and roll spectrum. His\n\nlive shows, performed all over the world, deliver a take no prisoners\n\nattitude, a stomping, pulsing John Lee Hooker-channeling, and cockeyed\n\ntales of black water baptisms and murder, all while romanticizing the\n\non-the-road lifestyle. SCOTT H. BIRAM IS THE DIRTY OLD ONE MAN BAND.\n\n©1974\n\nLITTLE LEGS(BE) & His Biscuit Tin Boogie System\n\nWho is?\n\nGilles \"Little Legs\" Haumont, multi-instrumentalist, born in 1975 in Belgium, has been tinkering with his instruments since early childhood. His concept of \"trash\" lutherie is not new, but it was not until 2013 that the idea of making a \"100% recycled\" one-man band took shape. Since then, he\'s been touring with his musical hodgepodge all over Belgium and France.\n\nWhat\'s that?\n\nA guy standing behind a plethora of \"homemade\" instruments, cookie tins, cans and wooden boxes: it looks like a flea market and a puppet theater. It\'s very pretty, but sometimes it\'s hard to believe that all this junk can sound! And yet... Once plugged in, the whole thing sounds terrific! It is powerful and fragile at the same time, hypnotic and funny. It\'s country blues, oldtime, sounds inspired by world folklore and noises... In the compositions of the one man band, the border is thin between Berber music, blues from the hills of Mississippi and oldtime from Appalachia. It is tribal and sometimes even techno! Always musical.\n\nAnd then, it\'s a sight to behold: a skeleton dancing frantically to catchy grooves, a bird pounding a cookie tin with its beak while a guy plays slide with his beer bottle on a homemade guitar while accompanying himself on the harmonica... A real band that performs, a show wrapped in a neat graphic universe.\n\nLittle Legs\' trademark is humor and generosity. The bluesman produces a primal boogie full of finesse, a pure country blues - in the sense of authentic - but not \"purist\". For Little Legs, what counts is the pleasure of playing, freely. A pleasure that embraces everyone: men, women and children.\n\nUnique in its kind...\n\nSome key moments...\n\n- April 2013 : Little Legs creates a first version of its \"Biscuit Tin Boogie System\", a small kit of three pedal percussions. There will be many more after that, always more sophisticated...\n\n- November 18, 2015: Little Legs in first part of \"The Hillbilly Moon Explosion\" at the Aeronef of Lille (Fr).\n\n- 2016: Little Legs participates in the album \"Vance, Mississippi\" with Jake Calypso and Archie Lee Hooker (the nephew of John Lee...).\n\n- Between 2017 and 2018: Little Legs accompanies Archie Lee Hooker at the Bay Car Blues Fest. (Fr), at the Mojo Working Fest. (Sp), at the Jazz & Blues Fest. in Goovy (Be), at the 50th anniversary of the Blues News Mag. in Helsinki (Fi) and at the Viva Las Vegas Weekend (USA).\n\n- June 9, 2018: Little Legs shares the stage with Dr. Feelgood during the 4th Label Guit\'Art in Esquelbecq (Fr). - 2018Little Legs releases the album \"The Magic Goes Down The Drain\" (Cuckoo Custom Records).\n\n- October 19, 2019: Little Legs opens for DELUXE at Ancienne Belgique (Be).\n\n- In 2019 and 2022: Little Legs plays on the stage of the Jyva\'Zik Fest (Be)\n\n- May 15, 2021:Little Legs plays on the.... balcony of the Blues Sphere in Liège (Be).\n\n- May 21, 2022: Little Legs plays on the stage of the Farm & Village in Drouges (Fr)....', 'image_46381684191768311.jpg', 1, '', '2023-05-15T23:02:48Z', '2023-06-22T17:00:00Z', '2023-06-22T19:30:00Z', '2023-05-15T22:00:00Z', 3, 5, 30),
(28, 'Barbecue party et DJ', 'COLOFT LESQUIN 9 Rue des Bouleaux 59810 Lesquin', '', 'L﻿e soleil et la chaleur pointent doucement le bout de leur nez, et vous savez ce que cela signifie ? Le retour des soirées entre amis et collègues !\n\nP﻿our l\'occasion, on vous propose une Barbecue party ! En prime, un DJ sera de la partie pour vous faire danser sur ses sons endiablés !\n\nH﻿appy hour, grillades, frites, c\'est ambiance garantie !\n\nP﻿rix : 20€', 'image_18851684191896700.jpg', 1, '', '2023-05-15T23:04:56Z', '2023-05-25T16:00:00Z', '2023-05-25T20:00:00Z', '2023-05-15T22:00:00Z', 3, 9, 88),
(29, 'FEEL FESTIVAL', 'Halle aux Sucres 1 Rue de l\'Entrepôt 59800 Lille', '', 'Bienvenue à FEEL FESTIVAL. Un événement unique qui promet de stimuler vos cinq sens et de vous emmener dans un voyage multi-sensoriel, lors d’une belle journée d’été.\n\nImaginez-vous plongé dans un monde de parfums enivrants, de sons captivants, de goûts délicieux, de textures surprenantes et de couleurs éblouissantes. Tout cela dans un seul endroit, à Lille.\n\nPendant ce parcours participatif, vous pourrez explorer différentes zones dédiées à chacun de vos sens. Nous vous promettons une véritable expérience sensorielle, une invitation à la découverte de vos 5 sens. Musique, nourriture, art, sport, divertissement… Autant de domaines qui vous permettront de passer une journée mémorable.\n\nL\'événement FEEL FESTIVAL est un voyage inoubliable à travers vos cinq sens, conçu pour éveiller votre curiosité, stimuler votre imagination et vous connecter avec votre environnement de manière nouvelle et surprenante.\n\nVous avez envie de passer une bonne journée placée sous le signe de la découverte et de ressentir des sensations que vous n’avez jamais expérimenté ? Que vous veniez seul, en famille, entre amis, en amoureux ou entre collègues, ne manquez pas FEEL FESTIVAL, une expérience sensorielle unique à Lille !\n\nR﻿endez-vous le samedi 30 juin 2023, de 16h00 à 22h00 aux Halles au Sucre.\n\n1 Rue de l\'Entrepôt, 59800 Lille', 'image_54331684191997331.jpg', 1, '', '2023-05-15T23:06:37Z', '2023-06-30T14:00:00Z', '2023-06-30T20:00:00Z', '2023-05-15T22:00:00Z', 3, 5, 54),
(30, 'Job Dating - Employeurs', 'Centre Régional de Formation des Professionnels de l\'Enfance 465 Rue Courtois 59000 Lille', '', 'A l\'occasion d\'un Job Dating organisé par le CRFPE (Centre Régional de Formation des Professionnels de l\'Enfance), participez à un processus de recrutement entre futurs diplômés et employeurs !\n\nVous êtes employeur et vous cherchez à recruter un.e ou plusieurs :\n\nEducateur(s).trice(s) de Jeunes Enfants (EJE),\nTitulaire d’un CAP AEPE (Accompagnant Educatif Petite Enfance),\nAuxiliaire de Puériculture.\nVenez proposer votre ou vos offres d\'emploi à nos futurs diplômés !\n\nCe Job Dating aura lieu le mercredi 28 juin 2023 de 13h00 à 17h00, au 465 rue Courtois 59042 Lille\n\nFin des inscriptions : vendredi 28 avril 2023 à 23h30\n\nInformations pratiques\nNous mettrons à votre disposition : une table, deux chaises et un accès à notre réseau wifi.\n\nNous vous recontacterons début juin pour vous faire parvenir le nombre de futurs diplômés qui souhaitent vous rencontrer ainsi que leur CV.\n\nInscription\nNous vous invitons à cliquer sur le bouton s\'inscrire. Attention, ne réalisez qu\'une seule inscription par structure.\n\nLors de l\'inscription, vous nous indiquerez le nombre de postes disponibles, la ou les personnes présentes (2 personnes max) de votre structure et vous nous indiquerez éventuellement vos besoins en matériel.\n\nContact\nSi vous avez une question, n\'hésitez pas à contacter Carole VERBURGHT par mail : caroleverburght@crfpe.fr', 'image_66961684192128852.jpg', 1, '', '2023-05-15T23:08:48Z', '2023-06-28T11:00:00Z', '2023-06-28T15:00:00Z', '2023-05-15T22:00:00Z', 3, 20, 196),
(31, 'VERSUS', 'Kinepolis 1 Rue du Château d\'Isenghien 59160 Lille', '', 'Devenez acteur de votre prochaine convention préférée ! ⚡️\n\nVenez vivre tout l\'univers du Manga et des Comics et assistez à des tournois de e-sport, tout en vous amusant avec nos divers stands : musique, danse, jeux, food trucks... ????\n\n???? Rendez-vous ce 27 Mai pour voir les surprises que nous vous avons réservées !', 'image_88081684192253430.jpg', 1, '', '2023-05-15T23:10:53Z', '2023-05-27T08:00:00Z', '2023-05-27T21:00:00Z', '2023-05-15T22:00:00Z', 3, 12, 106),
(32, 'SOIREE COULEURS 2023', 'GRAND CABARET 1095 Rue d\'Estaires 59232 VIEUX BERQUIN', '', '> 1﻿8h : Accueil > 4 ateliers thématiques au choix > 20h15 : Repas\n\n> 21h15 : Conférence prônant l\'intensité et la passion\n\n\"Métamorphosez-vous, réinventez-vous, mettez de la passion dans vos jobs, de l’intensité dans votre quotidien, de l’implication, de l’engagement, c’est le seul moyen pour tutoyer les étoiles\" avec Valérie Marie, pianiste et conférencière.', 'image_61211684192358515.jpg', 1, '', '2023-05-15T23:12:38Z', '2023-06-15T16:00:00Z', '2023-06-15T21:00:00Z', '2023-05-15T22:00:00Z', 3, 5, 37),
(33, 'European Cup Boulder', 'All. des Sports 12 12 Allée des Sports 6280 Gerpinnes Belgium', '', 'S﻿ATURDAY 27/05 - QUALIFICATIONS - FREE ENTRANCE\n\nS﻿UNDAY 28/05- FINALS - 5€ (free entrance for children under 12 years old)\n\nSeated places, without pre-booking.\n\nIndoor competition with a lot of different outdoor activities for the public !', 'image_45521684192524660.jpg', 1, '', '2023-05-15T23:15:24Z', '2023-05-28T06:00:00Z', '2023-05-28T21:00:00Z', '2023-05-15T22:00:00Z', 3, 17, 151),
(34, '« Les Olympiades du feu sacré »', 'Château de la Fontaine allée des 2 lions 59170 CROIX', '', 'Dans la mythologie grecque, le feu est à l’origine de toutes les civilisations. Zeus, roi des dieux de l’Olympe, décide de créer la race humaine. Prométhée, fils du titan Japet, décide de voler le feu sacré dans l’Olympe pour le donner aux Hommes, afin de les aider. Mais Zeus entre alors dans une colère noire, et décide de le punir pour cet acte.\n\nLes humains, répartis en équipes, vont donc devoir aller voler le feu sacré de l’Olympe. Seulement les dieux ont protégé leur domaine et organisé des épreuves pour y parvenir. Seule une personne à la fois rusée, habile, intelligente, forte, et maligne réussira à trouver le feu sacré, pour le donner aux humains. En équipes de 10, les humains devront s’organiser selon leur force pour les épreuves individuelles, et travailler en coopération pour réussir les défis collectifs.\n\nPour fêter le retour du feu sacré parmi vous, un divin goûter vous sera proposé à l’issue des épreuves.', 'image_54261684192626876.jpg', 1, '', '2023-05-15T23:17:06Z', '2023-06-24T12:30:00Z', '2023-05-24T16:00:00Z', '2023-05-15T22:00:00Z', 3, 17, 151),
(35, 'Ethan Gold @ Café Central', 'Café Central 168 Otegemstraat 8550 Zwevegem Belgium', '', 'C\'est l\'heure. Nous sommes fiers d\'annoncer notre premier artiste étranger. Le samedi 3 juin, l\'auteur-compositeur-interprète Ethan Gold, qui a grandi en Californie et vit actuellement à Berlin, jouera au Café Central. Ce compositeur d\'albums et de musiques de films de renommée internationale est de retour en concert après des années de rééducation suite à une blessure à la tête. Son dernier album alternatif indépendant Earth City 1: The Longing est le premier volet d\'une trilogie. C\'est une collection de chansons, dont certaines qu\'il a écrites - on ne plaisante pas - pendant qu\'il rêvait. Les paroles reflètent sa perspective particulière sur la façon dont nous nous rapportons à nous-mêmes, les uns aux autres et à la nature qui nous entoure.\n\nD﻿EURS: 19h30\n\nCONCERT DÉBUT : 20h30', 'image_67901684192705455.jpg', 1, '', '2023-05-15T23:18:25Z', '2023-06-03T17:00:00Z', '2023-06-03T20:00:00Z', '2023-05-15T22:00:00Z', 3, 5, 30),
(36, 'EuroBasket Women 2023 Preparation: Belgian Cats vs. China', 'Sportcampus Lange Munte 22 Bad Godesberglaan 8500 Kortrijk Belgium', '', 'Les Belgian Cats jouent 4 matchs de préparation à domicile avant de se rendre à l\'EuroBasket Women 2023 :\n\n26/5 à Mons vs. Grèce\n28/5 à Braine vs. Grèce\n8/5 à Courtrai vs. Chine\n10/6 à Louvain vs. Chine\n\nACHETEZ VOTRE MAILLOT OFFICIEL 2023 AVANT LE 2/6 ET RÉCUPÉREZ-LE AVANT LE MATCH.\n\nAchetez votre maillot de fan et gagnez une chance de participer à l\'EuroBasket Women avec les Cats !\n\nPour chaque chemise vendue, un numéro entrera dans la loterie. Le billet de loterie gagnant sera tiré au sort le 10/6. Le prix ? Un voyage pour 2 à l\'EuroBasket Women ! Consultez tous les détails et conditions de cette promotion sur www.basketballbelgium.be/tickets-vip.', 'image_26561684192798428.jpg', 1, '', '2023-05-15T23:19:58Z', '2023-06-08T18:30:00Z', '2023-06-08T21:30:00Z', '2023-05-15T22:00:00Z', 3, 17, 153),
(37, 'Webinar: Welkom Puppy - Instaples Puppy Coaching', '', '', 'Élever un chiot ne consiste pas à dresser votre animal de compagnie, mais à vous entraîner vous-même. Expert Joke Monteny est un gagnant quand il s\'agit de la langue du chien. Elle enseigne à ce sujet à l\'Université des sciences appliquées de Vives, a écrit le livre \"Welkom Puppy\" et guide les propriétaires et leurs chiens de manière professionnelle avec sa société \"Dog Inform\". Chaque mois, elle enseigne une leçon théorique avec WelloPet pour vous apprendre à voir le monde à travers les yeux d\'un chiot. Étape par étape, vous apprendrez à mieux comprendre votre chiot, de sorte que l\'éducation se déroulera beaucoup plus facilement et que vous pourrez construire un lien affectueux ensemble. En plus des connaissances générales sur le fonctionnement de votre chiot, de nombreux conseils et faits pratiques sont également fournis.', 'image_97451684192922298.jpg', 1, '', '2023-05-15T23:22:02Z', '2023-06-04T07:00:00Z', '2023-06-04T08:30:00Z', '2023-05-15T22:00:00Z', 3, 6, 62),
(42, 'Belgian Crew\'s National Championship Ride', 'IzyCoffee Izegem 27 Nieuwstraat 8870 Izegem Belgique', '', 'Détails pratiques :\n\nDate : dimanche 4 juin 2023\n\nHeure: 9h00 collecte, 9h30 déploiement\n\nDistance : 100km (+/- 4h de vélo)\n\nVitesse moyenne : 27-28km/h, selon le groupe.\n\nTout le monde attend toujours.\n\nLa participation à l\'événement est ouverte à tous. Boisson gratuite après la balade.\n\nÉtiquette:\n\nRespectez le code de la route en tout temps, nous roulons 2 par 2.\n\nChaque participant garantit qu\'il est assuré.\n\nCasque obligatoire.\n\nAssurez-vous que votre vélo est en bon état avant de partir.\n\nApportez votre propre matériel de rechange.\n\nBelgian Crew ne peut être tenu responsable de tout ce qui se passe pendant l\'événement. En vous inscrivant et en participant, vous confirmez que vous acceptez toutes les mesures de sécurité. L\'inscription en ligne est obligatoire pour participer.', 'image_97911684190976566.jpg', 1, '', '2023-05-15T22:49:36Z', '2023-06-04T07:00:00Z', '2023-06-04T18:00:00Z', '2023-05-16T00:00:00Z', 3, 17, 158);

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
  `date` varchar(255) NOT NULL,
  `id_event` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `passwordlost`
--

CREATE TABLE `passwordlost` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `creationDate` varchar(50) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'user'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `capacity` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `id_event` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `section`
--

INSERT INTO `section` (`id`, `capacity`, `name`, `id_event`) VALUES
(21, 0, '.@-;;{,){', 22),
(22, 0, '.@-;;{,){', 23),
(23, 0, '.@-;;{,){', 24),
(24, 0, '.@-;;{,){', 25),
(25, 0, '.@-;;{,){', 26),
(26, 0, '.@-;;{,){', 27),
(27, 0, '.@-;;{,){', 28),
(28, 0, '.@-;;{,){', 29),
(29, 0, '.@-;;{,){', 30),
(30, 0, '.@-;;{,){', 31),
(31, 0, '.@-;;{,){', 32),
(32, 0, '.@-;;{,){', 33),
(33, 0, '.@-;;{,){', 34),
(34, 0, '.@-;;{,){', 35),
(35, 0, '.@-;;{,){', 36),
(36, 0, '.@-;;{,){', 37);

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
-- Structure de la table `subscribe`
--

CREATE TABLE `subscribe` (
  `id` int(11) NOT NULL,
  `creationDate` varchar(50) NOT NULL,
  `idUser` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `name` varchar(255) NOT NULL,
  `capacity` int(11) NOT NULL,
  `price` float NOT NULL,
  `numberSell` int(11) NOT NULL,
  `startSellDate` varchar(255) NOT NULL,
  `endSellDate` varchar(255) NOT NULL,
  `id_section` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `ticket`
--

INSERT INTO `ticket` (`id`, `name`, `capacity`, `price`, `numberSell`, `startSellDate`, `endSellDate`, `id_section`) VALUES
(11, 'ticket', 1000, 0, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 21),
(12, 'test', 500, 325, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 22),
(13, 'test', 500, 0, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 23),
(14, 'dsqdsq', 500, 0, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 24),
(15, 'dsqdsq', 500, 50, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 25),
(16, 'dsqdsq', 500, 15, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 26),
(17, 'dsqdsq', 500, 20, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 27),
(18, 'test', 500, 0, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 28),
(19, 'dsqdsq', 500, 0, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 29),
(20, 'dsqdsq', 500, 20, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 30),
(21, 'dsqdsq', 500, 40, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 31),
(22, 'dsqdsq', 500, 5, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 32),
(23, 'dsqdsq', 500, 0, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 33),
(24, 'dsqdsq', 0, 22, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 34),
(25, 'dsqdsq', 500, 8, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 35),
(26, 'dsqdsq', 500, 20, 0, '2023-05-15T22:00:00Z', '2023-05-15T22:00:00Z', 36);

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
  `creationDate` date NOT NULL,
  `idRole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `mail`, `firstname`, `lastname`, `password`, `urlThumbnail`, `gender`, `creationDate`, `idRole`) VALUES
(1, 'test@test.fr', 'andrew', 'test', '$2b$10$e6LZ/Zeq2PhtzXxZ4dmqTuyfQMdqTTnmbm1pQn/SVRHIKr8Aqn4e2', '', 0, '2023-05-03', 2),
(3, 'andr3wcarpentier2@gmail.com', 'andrew', 'carpentier', '$2b$10$jwWuyZoHHlT8TJDJHUxbCexh2NOafpeyu1hK6djzZHhGn4zPu3bva', '', 0, '2023-05-15', 1),
(14, 'test2@test.fr', 'andrew', 'carpentier', '$2b$10$PP9cBX1izO0VrbCGTOEiJucWXQZVt1zlsp2PaVqXq2ug2ktX0wU/G', '', 0, '2023-05-31', 1),
(15, 'test@test.fr', 'test', 'test', '$2b$10$e6LZ/Zeq2PhtzXxZ4dmqTuyfQMdqTTnmbm1pQn/SVRHIKr8Aqn4e2', '', 0, '2023-05-03', 2),
(16, 'test2@test.fr', 'andrew', 'carpentier', '$2b$10$PP9cBX1izO0VrbCGTOEiJucWXQZVt1zlsp2PaVqXq2ug2ktX0wU/G', '', 0, '2023-05-31', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `bookmark`
--
ALTER TABLE `bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `command`
--
ALTER TABLE `command`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `command_ticket`
--
ALTER TABLE `command_ticket`
  ADD PRIMARY KEY (`id`,`id_command`);

--
-- Index pour la table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `event_tag`
--
ALTER TABLE `event_tag`
  ADD PRIMARY KEY (`id`,`id_event`);

--
-- Index pour la table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `passwordlost`
--
ALTER TABLE `passwordlost`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `subscribe`
--
ALTER TABLE `subscribe`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `command`
--
ALTER TABLE `command`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT pour la table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `passwordlost`
--
ALTER TABLE `passwordlost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `section`
--
ALTER TABLE `section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT pour la table `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=217;

--
-- AUTO_INCREMENT pour la table `subscribe`
--
ALTER TABLE `subscribe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tag`
--
ALTER TABLE `tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

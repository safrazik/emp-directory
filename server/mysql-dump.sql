-- Adminer 4.1.0 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `departments`;
CREATE TABLE `departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `departments` (`id`, `name`, `description`) VALUES
(2,	'Engineering',	''),
(3,	'Sales',	''),
(4,	'Marketing',	''),
(5,	'Accounting',	''),
(6,	'Corporate',	'');

INSERT INTO `employee` (`id`, `firstName`, `lastName`, `managerId`, `title`, `department`, `officePhone`, `cellPhone`, `email`, `city`, `picture`, `twitterId`, `blogURL`) VALUES
(12,	'Steven',	'Wells',	4,	'Software Architect',	'Engineering',	'617-000-0012',	'781-000-0012',	'swells@fakemail.com',	'Boston, MA',	'steven_wells.jpg',	'@fakeswells',	'http://coenraets.org'),
(11,	'Amy',	'Jones',	5,	'Sales Representative',	'Sales',	'617-000-0011',	'781-000-0011',	'ajones@fakemail.com',	'Boston, MA',	'amy_jones.jpg',	'@fakeajones',	'http://coenraets.org'),
(10,	'Kathleen',	'Byrne',	5,	'Sales Representative',	'Sales',	'617-000-0010',	'781-000-0010',	'kbyrne@fakemail.com',	'Boston, MA',	'kathleen_byrne.jpg',	'@fakekbyrne',	'http://coenraets.org'),
(9,	'Gary',	'Donovan',	2,	'Marketing',	'Marketing',	'617-000-0009',	'781-000-0009',	'gdonovan@fakemail.com',	'Boston, MA',	'gary_donovan.jpg',	'@fakegdonovan',	'http://coenraets.org'),
(8,	'Lisa',	'Wong',	2,	'Marketing Manager',	'Marketing',	'617-000-0008',	'781-000-0008',	'lwong@fakemail.com',	'Boston, MA',	'lisa_wong.jpg',	'@fakelwong',	'http://coenraets.org'),
(7,	'Paula',	'Gates',	4,	'Software Architect',	'Engineering',	'617-000-0007',	'781-000-0007',	'pgates@fakemail.com',	'Boston, MA',	'paula_gates.jpg',	'@fakepgates',	'http://coenraets.org'),
(5,	'Ray',	'Moore',	1,	'VP of Sales',	'Sales',	'617-000-0005',	'781-000-0005',	'rmoore@fakemail.com',	'Boston, MA',	'ray_moore.jpg',	'@fakermoore',	'http://coenraets.org'),
(6,	'Paul',	'Jones',	4,	'QA Manager',	'Engineering',	'617-000-0006',	'781-000-0006',	'pjones@fakemail.com',	'Boston, MA',	'paul_jones.jpg',	'@fakepjones',	'http://coenraets.org'),
(3,	'Eugene',	'Lee',	1,	'CFO',	'Accounting',	'617-000-0003',	'781-000-0003',	'elee@fakemail.com',	'Boston, MA',	'eugene_lee.jpg',	'@fakeelee',	'http://coenraets.org'),
(4,	'John',	'Williams',	1,	'VP of Engineering',	'Engineering',	'617-000-0004',	'781-000-0004',	'jwilliams@fakemail.com',	'Boston, MA',	'john_williams.jpg',	'@fakejwilliams',	'http://coenraets.org'),
(2,	'Julie',	'Taylor',	1,	'VP of Marketing',	'Marketing',	'617-000-0002',	'781-000-0002',	'jtaylor@fakemail.com',	'Boston, MA',	'julie_taylor.jpg',	'@fakejtaylor',	'http://coenraets.org'),
(1,	'James',	'King',	0,	'President and CEO',	'Corporate',	'617-000-0001',	'781-000-0001',	'jking@fakemail.com',	'Boston, MA',	'james_king.jpg',	'@fakejking',	'http://coenraets.org');

DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `department_id` int(11) DEFAULT NULL,
  `job_id` int(11) DEFAULT NULL,
  `manager_id` int(11) DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_of_birth` date NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `office_phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cell_phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `bio` text COLLATE utf8_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `twitter` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profile_pic` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_BA82C300AE80F5DF` (`department_id`),
  KEY `IDX_BA82C300BE04EA9` (`job_id`),
  KEY `IDX_BA82C300783E3463` (`manager_id`),
  CONSTRAINT `FK_BA82C300AE80F5DF` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `FK_BA82C300BE04EA9` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `employees` (`id`, `department_id`, `job_id`, `manager_id`, `first_name`, `last_name`, `date_of_birth`, `email`, `office_phone`, `cell_phone`, `bio`, `website`, `twitter`, `profile_pic`) VALUES
(1,	6,	16,	NULL,	'Michael',	'Freeman',	'1985-10-03',	'michael.freeman@fakecompany.com',	'1-522-313-4502',	'1-462-964-1519',	'Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem',	'http://michael-freeman.fakecompany.com',	'@fake_michael_freeman',	'Michael_Freeman.jpg'),
(2,	4,	15,	1,	'Brian',	'Quinn',	'1973-06-20',	'brian.quinn@fakecompany.com',	'1-169-288-2009',	'1-384-337-2975',	'sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam.',	'http://brian-quinn.fakecompany.com',	'@fake_brian_quinn',	'Brian_Quinn.jpg'),
(3,	5,	13,	1,	'Amy',	'Washington',	'1980-02-09',	'amy.washington@fakecompany.com',	'1-315-469-0724',	'1-203-570-1989',	'enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique',	'http://amy-washington.fakecompany.com',	'@fake_amy_washington',	'Amy_Washington.jpg'),
(4,	2,	14,	1,	'Lionel',	'Mcknight',	'1972-08-06',	'lionel.mcknight@fakecompany.com',	'1-303-521-9323',	'1-142-366-7623',	'id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit',	'http://lionel-mcknight.fakecompany.com',	'@fake_lionel_mcknight',	'Lionel_Mcknight.jpg'),
(5,	3,	11,	1,	'Aaron',	'Roman',	'1989-01-15',	'aaron.roman@fakecompany.com',	'1-873-775-4338',	'1-704-304-7892',	'imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa',	'http://aaron-roman.fakecompany.com',	'@fake_aaron_roman',	'Aaron_Roman.jpg'),
(6,	2,	12,	4,	'Ray',	'Daugherty',	'1982-10-27',	'ray.daugherty@fakecompany.com',	'1-611-955-3449',	'1-799-579-5896',	'ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim',	'http://ray-daugherty.fakecompany.com',	'@fake_ray_daugherty',	'Ray_Daugherty.jpg'),
(7,	2,	7,	4,	'Sarah',	'Torres',	'1971-08-23',	'sarah.torres@fakecompany.com',	'1-239-304-9097',	'1-955-996-8574',	'laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris',	'http://sarah-torres.fakecompany.com',	'@fake_sarah_torres',	'Sarah_Torres.jpg'),
(8,	4,	10,	2,	'Priya',	'Lakshman',	'1982-03-08',	'priya.lakshman@fakecompany.com',	'1-914-358-6170',	'1-446-483-8652',	'vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc',	'http://priya-lakshman.fakecompany.com',	'@fake_priya_lakshman',	'Priya_Lakshman.jpg'),
(9,	4,	9,	2,	'Palmer',	'Dennis',	'1987-02-09',	'palmer.dennis@fakecompany.com',	'1-509-146-3151',	'1-206-416-7492',	'risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt,',	'http://palmer-dennis.fakecompany.com',	'@fake_palmer_dennis',	'Palmer_Dennis.jpg'),
(10,	3,	8,	5,	'Eric',	'Jones',	'1980-03-28',	'eric.jones@fakecompany.com',	'1-589-415-1759',	'1-169-408-7956',	'egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi',	'http://eric-jones.fakecompany.com',	'@fake_eric_jones',	'Eric_Jones.jpg'),
(11,	3,	8,	5,	'Eve',	'Shelton',	'1988-07-11',	'eve.shelton@fakecompany.com',	'1-944-320-5880',	'1-285-117-6691',	'Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer,',	'http://eve-shelton.fakecompany.com',	'@fake_eve_shelton',	'Eve_Shelton.jpg'),
(12,	3,	8,	5,	'Mary',	'Contreras',	'1970-05-24',	'mary.contreras@fakecompany.com',	'1-278-555-9603',	'1-611-353-1933',	'sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor',	'http://mary-contreras.fakecompany.com',	'@fake_mary_contreras',	'Mary_Contreras.jpg'),
(13,	3,	8,	5,	'Abdul',	'Hameed',	'1976-12-05',	'abdul.hameed@fakecompany.com',	'1-617-117-0349',	'1-838-196-7993',	'fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida',	'http://abdul-hameed.fakecompany.com',	'@fake_abdul_hameed',	'Abdul_Hameed.jpg'),
(14,	2,	7,	4,	'Louis',	'Farrell',	'1983-02-15',	'louis.farrell@fakecompany.com',	'1-198-934-8289',	'1-848-491-3089',	'magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum',	'http://louis-farrell.fakecompany.com',	'@fake_louis_farrell',	'Louis_Farrell.jpg'),
(15,	2,	7,	4,	'Luke',	'Frederick',	'1977-06-28',	'luke.frederick@fakecompany.com',	'1-832-680-3072',	'1-309-180-6944',	'mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In',	'http://luke-frederick.fakecompany.com',	'@fake_luke_frederick',	'Luke_Frederick.jpg'),
(16,	2,	7,	4,	'Branden',	'Wright',	'1985-09-23',	'branden.wright@fakecompany.com',	'1-611-128-4076',	'1-683-443-6731',	'elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque',	'http://branden-wright.fakecompany.com',	'@fake_branden_wright',	'Branden_Wright.jpg');

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `jobs` (`id`, `title`, `description`) VALUES
(7,	'Software Architect',	''),
(8,	'Sales Representative',	''),
(9,	'Marketing',	''),
(10,	'Marketing Manager',	''),
(11,	'VP of Sales',	''),
(12,	'QA Manager',	''),
(13,	'CFO',	''),
(14,	'VP of Engineering',	''),
(15,	'VP of Marketing',	''),
(16,	'President and CEO',	'');

-- 2014-09-15 19:56:17

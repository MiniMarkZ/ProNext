CREATE DATABASE profile;

use profile;

CREATE TABLE Sample (
    id int not null,
    sample int not null,
    method varchar(255),
    info varchar(255),
    primary key (id)
);


CREATE TABLE `nametext` (
  `id` text NOT NULL,
  `text1` text NOT NULL,
  `text2` text NOT NULL,
  `text3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nametext`
--

INSERT INTO `nametext` (`id`, `text1`, `text2`, `text3`) VALUES
('001', 'เกิดวันที่ 11 มิถุนายน พ.ศ 2544  ', 'เป็นนักศึกษาชั้นปีที่ 4 สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ประยุกต์ พระจอมเกล้าพระนครเหนือ', 'สิ่งที่ชอบทำคือ อยู่กับตัวเอง และ เล่นเกม ครับ');

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

CREATE TABLE `photo` (
  `id_photo` text NOT NULL,
  `id` text NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `photo`
--

INSERT INTO `photo` (`id_photo`, `id`, `url`) VALUES
('001', '001', 'https://media.discordapp.net/attachments/900255663081545761/1099284431505723423/3f84c768-c2d2-4626-98fe-cd8e9104cf45.jpg?width=577&height=671'),
('002', '001', 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/97395343_2918033868312279_7099698996054065152_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGpAG0waTDNMnvypRs4dtR096mPgjbsgxP3qY-CNuyDEydQ44GVYMjln8woKzrtmpHYrcxXpEpfHsYKHEHVzYnD&_nc_ohc=iuCBKYAsmJAAX_LqGsd&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfC-NdiNBLZ8QlkhpQwRN19XadQDPTq0ZC3Xo_VpUbtfiw&oe=646E5C21'),
('003', '001', 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.18169-9/16807280_1237594613022888_1964372268726998078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGte8NLP0srPPAKKaJ5mVEW7YFHYm-mmA3tgUdib6aYDRVhp5QdtmAW366iQmftlKFUrLSMZygPJWT8BMvNLlD3&_nc_ohc=HVnvQuWww0sAX8tmexn&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfDgXIBvUu-kGC7BS768LJyGG5j1eWbZCK2bsAEXPx5AeQ&oe=646E08A1'),
('004', '001', 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.6435-9/47208570_1955100654605610_8500001928191672320_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH-Jwnbkdo8nYzg2bIT0Bo-CVzjYha0Ui0JXONiFrRSLfmtIOq7zVTmlZe0NPDlIhsyutFB5ek7BVndULXdD9jT&_nc_ohc=kNt4y-S7ScQAX_K-GkI&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfCaOCWOpBZwoSuL29VLzBm3RdakkwO8p5Ii_gmd24hUuA&oe=646E05EE'),
('005', '001', 'https://media.discordapp.net/attachments/900255663081545761/1100045610515710032/2566-04-24_20.08.13.png?width=936&height=934');

-- --------------------------------------------------------

--
-- Table structure for table `study`
--

CREATE TABLE `study` (
  `id` text NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `study`
--

INSERT INTO `study` (`id`, `text`) VALUES
('001', 'โรงเรียนรัตนาธิเบศร์'),
('002', 'พระจอมเกล้าพระนครเหนือ');

-- --------------------------------------------------------

--
-- Table structure for table `summary`
--

CREATE TABLE `summary` (
  `id` text NOT NULL,
  `text1` text NOT NULL,
  `text2` text NOT NULL,
  `text3` text NOT NULL,
  `photo_url` text NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `nickname` text NOT NULL,
  `old` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `summary`
--

INSERT INTO `summary` (`id`, `text1`, `text2`, `text3`, `photo_url`, `name`, `surname`, `nickname`, `old`) VALUES
('001', 'เกิดวันที่ 11 มิถุนายน พ.ศ 2544  ', 'เป็นนักศึกษาชั้นปีที่ 4 สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ประยุกต์ พระจอมเกล้าพระนครเหนือ', 'สิ่งที่ชอบทำคือ อยู่กับตัวเอง และ เล่นเกม ครับ', 'https://media.discordapp.net/attachments/900255663081545761/1099284431505723423/3f84c768-c2d2-4626-98fe-cd8e9104cf45.jpg?width=577&height=671', 'เจษฎาภรณ์', 'พาณิชพิสิฐ', 'มาร์ค', 21),
('001', 'เกิดวันที่ 11 มิถุนายน พ.ศ 2544  ', 'เป็นนักศึกษาชั้นปีที่ 4 สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ประยุกต์ พระจอมเกล้าพระนครเหนือ', 'สิ่งที่ชอบทำคือ อยู่กับตัวเอง และ เล่นเกม ครับ', 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/97395343_2918033868312279_7099698996054065152_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGpAG0waTDNMnvypRs4dtR096mPgjbsgxP3qY-CNuyDEydQ44GVYMjln8woKzrtmpHYrcxXpEpfHsYKHEHVzYnD&_nc_ohc=iuCBKYAsmJAAX_LqGsd&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfC-NdiNBLZ8QlkhpQwRN19XadQDPTq0ZC3Xo_VpUbtfiw&oe=646E5C21', 'เจษฎาภรณ์', 'พาณิชพิสิฐ', 'มาร์ค', 21),
('001', 'เกิดวันที่ 11 มิถุนายน พ.ศ 2544  ', 'เป็นนักศึกษาชั้นปีที่ 4 สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ประยุกต์ พระจอมเกล้าพระนครเหนือ', 'สิ่งที่ชอบทำคือ อยู่กับตัวเอง และ เล่นเกม ครับ', 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.18169-9/16807280_1237594613022888_1964372268726998078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGte8NLP0srPPAKKaJ5mVEW7YFHYm-mmA3tgUdib6aYDRVhp5QdtmAW366iQmftlKFUrLSMZygPJWT8BMvNLlD3&_nc_ohc=HVnvQuWww0sAX8tmexn&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfDgXIBvUu-kGC7BS768LJyGG5j1eWbZCK2bsAEXPx5AeQ&oe=646E08A1', 'เจษฎาภรณ์', 'พาณิชพิสิฐ', 'มาร์ค', 21),
('001', 'เกิดวันที่ 11 มิถุนายน พ.ศ 2544  ', 'เป็นนักศึกษาชั้นปีที่ 4 สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ประยุกต์ พระจอมเกล้าพระนครเหนือ', 'สิ่งที่ชอบทำคือ อยู่กับตัวเอง และ เล่นเกม ครับ', 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.6435-9/47208570_1955100654605610_8500001928191672320_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH-Jwnbkdo8nYzg2bIT0Bo-CVzjYha0Ui0JXONiFrRSLfmtIOq7zVTmlZe0NPDlIhsyutFB5ek7BVndULXdD9jT&_nc_ohc=kNt4y-S7ScQAX_K-GkI&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfCaOCWOpBZwoSuL29VLzBm3RdakkwO8p5Ii_gmd24hUuA&oe=646E05EE', 'เจษฎาภรณ์', 'พาณิชพิสิฐ', 'มาร์ค', 21),
('001', 'เกิดวันที่ 11 มิถุนายน พ.ศ 2544  ', 'เป็นนักศึกษาชั้นปีที่ 4 สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ประยุกต์ พระจอมเกล้าพระนครเหนือ', 'สิ่งที่ชอบทำคือ อยู่กับตัวเอง และ เล่นเกม ครับ', 'https://media.discordapp.net/attachments/900255663081545761/1100045610515710032/2566-04-24_20.08.13.png?width=936&height=934', 'เจษฎาภรณ์', 'พาณิชพิสิฐ', 'มาร์ค', 21);

-- --------------------------------------------------------

--
-- Table structure for table `summarys`
--

CREATE TABLE `summarys` (
  `id` text NOT NULL,
  `text1` text NOT NULL,
  `text2` text NOT NULL,
  `text3` text NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `nickname` text NOT NULL,
  `old` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `summarys`
--

INSERT INTO `summarys` (`id`, `text1`, `text2`, `text3`, `name`, `surname`, `nickname`, `old`) VALUES
('001', 'เกิดวันที่ 11 มิถุนายน พ.ศ 2544  ', 'เป็นนักศึกษาชั้นปีที่ 4 สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ประยุกต์ พระจอมเกล้าพระนครเหนือ', 'สิ่งที่ชอบทำคือ อยู่กับตัวเอง และ เล่นเกม ครับ', 'เจษฎาภรณ์', 'พาณิชพิสิฐ', 'มาร์ค', 21);

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `test` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`test`) VALUES
(1111);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` text NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `nickname` text NOT NULL,
  `old` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `nickname`, `old`) VALUES
('001', 'เจษฎาภรณ์', 'พาณิชพิสิฐ', 'มาร์ค', 21);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

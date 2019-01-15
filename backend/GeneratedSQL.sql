-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `Pilots`

CREATE TABLE `Pilots`
(
 `id`         int NOT NULL ,
 `username`   varchar(256) NOT NULL ,
 `IsLoggedIn` binary NOT NULL ,
 `IsPaid`     binary NOT NULL ,
 `password`   varchar(256) NOT NULL ,
PRIMARY KEY (`id`)
);




-- ************************************** `Instructors`

CREATE TABLE `Instructors`
(
 `id`                        int NOT NULL ,
 `Instructor name`           varchar(256) NOT NULL ,
 `instructor license number` varchar(256) NOT NULL ,
 `Description/notes`         text ,
 `Ratings`                   text ,
 `Contact`                   text ,
PRIMARY KEY (`id`)
);

-- ************************************** `Aircraft`

CREATE TABLE `Aircraft`
(
 `id`         int NOT NULL ,
 `Make`       varchar(256) NOT NULL ,
 `Model`      varchar(256) NOT NULL ,
 `Tailnumber` varchar(256) NOT NULL ,
PRIMARY KEY (`id`)
);


-- ************************************** `Flights`

CREATE TABLE `Flights`
(
 `id`                  int NOT NULL ,
 `Flight Name`         varchar(256) NOT NULL ,
 `Airports Visited`    varchar(256) ,
 `Cross Country`       binary ,
 `Instrument Approach` binary ,
 `Num Landings`        int ,
 `Day`                 float ,
 `night`               float ,
 `Actual Inst.`        float ,
 `Simulated Inst.`     float ,
 `Grnd Trainer`        float ,
 `PIC`                 float ,
 `Dual Rec.`           float ,
 `Total`               float ,
 `Date`                date NOT NULL ,
 `Remarks`             text ,
 `PilotID`             int NOT NULL ,
 `AircraftID`          int ,
 `InstructorID`        int ,
PRIMARY KEY (`id`),
KEY `fkIdx_102` (`AircraftID`),
CONSTRAINT `FK_102` FOREIGN KEY `fkIdx_102` (`AircraftID`) REFERENCES `Aircraft` (`id`),
KEY `fkIdx_105` (`InstructorID`),
CONSTRAINT `FK_105` FOREIGN KEY `fkIdx_105` (`InstructorID`) REFERENCES `Instructors` (`id`),
KEY `fkIdx_84` (`PilotID`),
CONSTRAINT `FK_84` FOREIGN KEY `fkIdx_84` (`PilotID`) REFERENCES `Pilots` (`id`)
);




-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;

-- **************** THE FOLLOWING ARE ALL
-- **************** IMAGE STORE RELATED


-- ************************************** `ImageStore`

-- CREATE TABLE `ImageStore`
-- (
--  `id`    int NOT NULL ,
--  `IMAGE`  NOT NULL ,
-- PRIMARY KEY (`id`)
-- );



-- ************************************** `Aircraft images`


-- We will need to figure out the interface to our image store but the idea of the Q=SQL table is this

-- CREATE TABLE `Aircraft images`
-- (
--  `id`     int NOT NULL ,
--  `ImageStoreID`   int NOT NULL ,
--  `AircraftID` int NOT NULL ,
-- PRIMARY KEY (`id`),
-- KEY `fkIdx_69` (`ImageStoreID`),
-- CONSTRAINT `FK_69` FOREIGN KEY `fkIdx_69` (`ImageStoreID`) REFERENCES `ImageStore` (`id`),
-- KEY `fkIdx_78` (`AircraftID`),
-- CONSTRAINT `FK_78` FOREIGN KEY `fkIdx_78` (`AircraftID`) REFERENCES `Aircraft` (`id`)
-- );



-- ************************************** `AirportsVisited(SkyVector)`

-- CREATE TABLE `AirportsVisited(SkyVector)`
-- (
--  `id`     int NOT NULL ,
--  `ImageStoreID`   int NOT NULL ,
--  `FlightID` int NOT NULL ,
-- PRIMARY KEY (`id`),
-- KEY `fkIdx_96` (`ImageStoreID`),
-- CONSTRAINT `FK_96` FOREIGN KEY `fkIdx_96` (`ImageStoreID`) REFERENCES `ImageStore` (`id`),
-- KEY `fkIdx_99` (`FlightID`),
-- CONSTRAINT `FK_99` FOREIGN KEY `fkIdx_99` (`FlightID`) REFERENCES `Flights` (`id`)
-- );


-- ************************************** `PilotImages(Stretch)`

-- CREATE TABLE `PilotImages`
-- (
--  `id`     int NOT NULL ,
--  `ImageStoreID`   int NOT NULL ,
--  `PilotID` int NOT NULL ,
-- PRIMARY KEY (`id`),
-- KEY `fkIdx_66` (`ImageStoreID`),
-- CONSTRAINT `FK_66` FOREIGN KEY `fkIdx_66` (`ImageStoreID`) REFERENCES `ImageStore` (`id`),
-- KEY `fkIdx_75` (`PilotID`),
-- CONSTRAINT `FK_75` FOREIGN KEY `fkIdx_75` (`PilotID`) REFERENCES `Pilots` (`id`)
-- );


-- ************************************** `Instructor Images(Stretch)`

-- CREATE TABLE `Instructor Images`
-- (
--  `id`     int NOT NULL ,
--  `ImageStoreID`   int NOT NULL ,
--  `InstructorID` int NOT NULL ,
-- PRIMARY KEY (`id`),
-- KEY `fkIdx_72` (`ImageStoreID`),
-- CONSTRAINT `FK_72` FOREIGN KEY `fkIdx_72` (`ImageStoreID`) REFERENCES `ImageStore` (`id`),
-- KEY `fkIdx_81` (`InstructorID`),
-- CONSTRAINT `FK_81` FOREIGN KEY `fkIdx_81` (`InstructorID`) REFERENCES `Instructors` (`id`)
-- );



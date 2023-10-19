CREATE TABLE `caregiver` (
  `id` integer PRIMARY KEY,
  `username` varchar(255),
  `cpf` varchar(11),
  `email` varchar(255),
  `password` varchar(255),
  `birth_date` date,
  `coren` varchar(255),
  `crm` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `patient` (
  `id` integer PRIMARY KEY,
  `username` varchar(255),
  `cpf` varchar(11),
  `email` varchar(255),
  `password` varchar(255),
  `birth_date` date,
  `caregiver_id` integer,
  `created_at` timestamp
);

CREATE TABLE `medicines` (
  `id` integer PRIMARY KEY,
  `title` varchar(255),
  `body` text COMMENT 'Medicine description',
  `patient_id` integer,
  `status` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `medicines_patient` (
  `medicines_patient_id` integer,
  `patient_id` integer,
  PRIMARY KEY (`medicines_patient_id`, `patient_id`)
);

ALTER TABLE `medicines_patient` ADD FOREIGN KEY (`medicines_patient_id`) REFERENCES `medicines` (`patient_id`);

ALTER TABLE `medicines_patient` ADD FOREIGN KEY (`patient_id`) REFERENCES `patient` (`id`);


ALTER TABLE `patient` ADD FOREIGN KEY (`caregiver_id`) REFERENCES `caregiver` (`id`);

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL DEFAULT 'MALE',
    `address` VARCHAR(191) NULL,
    `age` INTEGER NULL,
    `country` JSON NULL,
    `continent` ENUM('NORTH_AMERICA', 'SOUTH_AMERICA', 'EUROPE', 'AFRICA', 'ASIA', 'AUSTRALIA', 'ANTARCTICA', 'OCEANIA') NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'MODEL', 'USER') NOT NULL DEFAULT 'USER',
    `date_updated` DATETIME(3) NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `voterLikes` (
    `id` VARCHAR(191) NOT NULL,
    `competition_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `competition_level` ENUM('COUNTRY', 'CONTINENT', 'WORLD', 'CHAMPION') NOT NULL,
    `participant_id` VARCHAR(191) NOT NULL,
    `date_updated` DATETIME(3) NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `voterVotes` (
    `id` VARCHAR(191) NOT NULL,
    `competition_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `competition_level` ENUM('COUNTRY', 'CONTINENT', 'WORLD', 'CHAMPION') NOT NULL,
    `participant_id` VARCHAR(191) NOT NULL,
    `date_updated` DATETIME(3) NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `votingHistory` (
    `id` VARCHAR(191) NOT NULL,
    `competition_id` VARCHAR(191) NOT NULL,
    `participant_id` VARCHAR(191) NOT NULL,
    `votes` INTEGER NOT NULL,
    `competition_level` ENUM('COUNTRY', 'CONTINENT', 'WORLD', 'CHAMPION') NOT NULL,
    `date_updated` DATETIME(3) NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Competition` (
    `id` VARCHAR(191) NOT NULL,
    `competition_name` VARCHAR(191) NOT NULL,
    `competition_level` ENUM('COUNTRY', 'CONTINENT', 'WORLD', 'CHAMPION') NOT NULL DEFAULT 'COUNTRY',
    `competition_description` VARCHAR(191) NULL,
    `status` ENUM('OPEN_TO_REGISTRATION', 'OPEN', 'CLOSED') NOT NULL DEFAULT 'OPEN_TO_REGISTRATION',
    `date_updated` DATETIME(3) NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Periods` (
    `id` VARCHAR(191) NOT NULL,
    `level` ENUM('COUNTRY', 'CONTINENT', 'WORLD', 'CHAMPION') NOT NULL,
    `competition_id` VARCHAR(191) NOT NULL,
    `period_start_date` DATETIME(3) NOT NULL,
    `period_end_date` DATETIME(3) NOT NULL,
    `date_updated` DATETIME(3) NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participant` (
    `id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `competition_id` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL DEFAULT 'MALE',
    `address` VARCHAR(191) NULL,
    `age` INTEGER NULL,
    `winner` VARCHAR(191) NULL,
    `competition_level` ENUM('COUNTRY', 'CONTINENT', 'WORLD', 'CHAMPION') NULL DEFAULT 'COUNTRY',
    `country` VARCHAR(191) NULL,
    `pictures` JSON NULL,
    `continent` ENUM('NORTH_AMERICA', 'SOUTH_AMERICA', 'EUROPE', 'AFRICA', 'ASIA', 'AUSTRALIA', 'ANTARCTICA', 'OCEANIA') NULL,
    `sponsors` JSON NULL,
    `date_updated` DATETIME(3) NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attachments` (
    `id` VARCHAR(191) NOT NULL,
    `attachment_name` VARCHAR(191) NOT NULL,
    `date_updated` DATETIME(3) NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `voterLikes` ADD CONSTRAINT `voterLikes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `voterLikes` ADD CONSTRAINT `voterLikes_participant_id_fkey` FOREIGN KEY (`participant_id`) REFERENCES `Participant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `voterVotes` ADD CONSTRAINT `voterVotes_competition_id_fkey` FOREIGN KEY (`competition_id`) REFERENCES `Competition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `voterVotes` ADD CONSTRAINT `voterVotes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `voterVotes` ADD CONSTRAINT `voterVotes_participant_id_fkey` FOREIGN KEY (`participant_id`) REFERENCES `Participant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `votingHistory` ADD CONSTRAINT `votingHistory_competition_id_fkey` FOREIGN KEY (`competition_id`) REFERENCES `Competition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `votingHistory` ADD CONSTRAINT `votingHistory_participant_id_fkey` FOREIGN KEY (`participant_id`) REFERENCES `Participant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Periods` ADD CONSTRAINT `Periods_competition_id_fkey` FOREIGN KEY (`competition_id`) REFERENCES `Competition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_competition_id_fkey` FOREIGN KEY (`competition_id`) REFERENCES `Competition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

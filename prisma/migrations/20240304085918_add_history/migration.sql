-- AlterTable
ALTER TABLE `competition` MODIFY `competition_level` ENUM('COUNTRY', 'CONTINENT', 'WORLD', 'CHAMPION') NOT NULL DEFAULT 'COUNTRY';

-- AlterTable
ALTER TABLE `participant` MODIFY `competition_level` ENUM('COUNTRY', 'CONTINENT', 'WORLD', 'CHAMPION') NULL DEFAULT 'COUNTRY';

-- AlterTable
ALTER TABLE `periods` MODIFY `level` ENUM('COUNTRY', 'CONTINENT', 'WORLD', 'CHAMPION') NOT NULL;

-- AlterTable
ALTER TABLE `voterlikes` MODIFY `competition_level` ENUM('COUNTRY', 'CONTINENT', 'WORLD', 'CHAMPION') NOT NULL;

-- AlterTable
ALTER TABLE `votervotes` MODIFY `competition_level` ENUM('COUNTRY', 'CONTINENT', 'WORLD', 'CHAMPION') NOT NULL;

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

-- AddForeignKey
ALTER TABLE `votingHistory` ADD CONSTRAINT `votingHistory_competition_id_fkey` FOREIGN KEY (`competition_id`) REFERENCES `Competition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `votingHistory` ADD CONSTRAINT `votingHistory_participant_id_fkey` FOREIGN KEY (`participant_id`) REFERENCES `Participant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

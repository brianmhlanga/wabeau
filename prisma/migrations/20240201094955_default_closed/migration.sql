-- AlterTable
ALTER TABLE `competition` MODIFY `status` ENUM('OPEN', 'CLOSED') NOT NULL DEFAULT 'CLOSED';

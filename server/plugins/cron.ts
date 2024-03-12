import { useScheduler } from "#scheduler";
import { prisma } from "~/prisma/db";
import moment from "moment";


const chooseNextLevel = async (competitionId: string) => {
  // Find the competition
  const competition = await prisma.competition.findUnique({
      where: {
          id: competitionId,
      },
  });

  // Implement your logic to determine the next level based on the current level
  if (competition?.competition_level === 'COUNTRY') {
      // Update the competition's competition_level to 'CONTINENT' and return the new level
      await prisma.competition.update({
          where: {
              id: competitionId,
          },
          data: {
              competition_level: 'CONTINENT',
          },
      });

      return 'CONTINENT';
  } else if (competition?.competition_level === 'CONTINENT') {
      // Update the competition's competition_level to 'WORLD' and return the new level
      await prisma.competition.update({
          where: {
              id: competitionId,
          },
          data: {
              competition_level: 'WORLD',
          },
      });

      return 'WORLD';
  } else {
      // Update the competition's competition_level to 'CHAMPION' and return the new level
      await prisma.competition.update({
          where: {
              id: competitionId,
          },
          data: {
              competition_level: 'CHAMPION',
          },
      });

      return 'CHAMPION';
  }
};
const processOpenCompetitions = async () => {
  try {
      // Find all competitions where period_start_date is today and status is "OPEN_TO_REGISTRATION"
      const openCompetitions = await prisma.periods.findMany({
          where: {
              period_start_date: new Date().toISOString().split('T')[0], // Get today's date in ISO format
              competition: {
                  status: 'OPEN_TO_REGISTRATION',
              },
          },
          include: {
              competition: true,
          },
      });

      // Process each open competition
      for (const period of openCompetitions) {
          const nextLevel = await chooseNextLevel(period[0].competitionId);

          // Log the next level for each competition (you can update the competition status here)
          console.log(`Competition ${period[0].competitionId} moved to level ${nextLevel}`);
      }

      return { success: true };
  } catch (error: any) {
      return { success: false, message: error.toString() };
  }
};

export default defineNitroPlugin(() => {
  startScheduler()
});

function startScheduler() {
  const scheduler = useScheduler();

  // scheduler.run(() => {
  //   sendOverdueRequisitionsOriginator();
  //   sendOverdueRequisitionsApprover()
  //   }).cron('* * * * *', 'Africa/Cairo');
    scheduler.run(() => {
        processOpenCompetitions();
    }).cron('0 6 * * *', 'Africa/Cairo') 



  
}



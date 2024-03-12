import { useScheduler } from "#scheduler";
import { prisma } from "~/prisma/db";
import moment from "moment";

const openCompetition = async (cometitionId: string) => {
    const competition = await prisma.competition.update({
        where: {
            id: cometitionId
        },
        data: {
            status: "OPEN"
        }
    })
}

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
      // Construct a date object for yesterday
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1); // Set the date to yesterday
      yesterday.setUTCHours(22, 0, 0, 0); // Set the time to 22:00:00.000Z
      // Find all competitions where period_start_date is similar to yesterday's date and status is "OPEN_TO_REGISTRATION"
      const openCompetitions = await prisma.periods.findMany({
        where: {
          AND: [
            {
              period_start_date: {
                equals: yesterday.toISOString(),
              },
            },
            {
              competition: {
                status: 'OPEN_TO_REGISTRATION',
              },
            },
            {
                competition: {
                  competition_level: "COUNTRY"
                },
              },

          ],
        },
        include: {
          competition: true,
        },
      });
      
      // Log the open competitions
      let competitions = openCompetitions
      // Process each open competition
      for (const competition of competitions) {
        const nextLevel = await openCompetition(competition.competition.id);
  
        // Log the next level for each competition (you can update the competition status here)
        console.log(`Competition ${competition.competition.id} has been opened`);
      }
  
      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.toString() };
    }
};
const processCountryCompetitions = async () => {
    try {
      // Construct a date object for yesterday
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1); // Set the date to yesterday
      yesterday.setUTCHours(22, 0, 0, 0); // Set the time to 22:00:00.000Z
       console.log("the date today is", yesterday.toISOString())
      // Find all competitions where period_start_date is similar to yesterday's date and status is "OPEN_TO_REGISTRATION"
      const openCompetitions = await prisma.periods.findMany({
        where: {
          AND: [
            {
              period_start_date: {
                equals: yesterday.toISOString(),
              },
            },
            {
              competition: {
                status: 'OPEN',
              },
            },
            {
                competition: {
                  competition_level: "COUNTRY"
                },
              },

          ],
        },
        include: {
          competition: true,
        },
      });
      
      // Log the open competitions
      console.log('Open Competitions:', openCompetitions);
      
      
      
      console.log("madzinhi angu",openCompetitions)
      let competitions = openCompetitions
      // Process each open competition
      for (const competition of competitions) {
        const nextLevel = await chooseNextLevel(competition.competition.id);
  
        // Log the next level for each competition (you can update the competition status here)
        console.log(`Competition ${competition.competition.id} moved to level ${nextLevel}`);
      }
  
      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.toString() };
    }
  };
const processContinentCompetitions = async () => {
    try {
      // Construct a date object for yesterday
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1); // Set the date to yesterday
      yesterday.setUTCHours(22, 0, 0, 0); // Set the time to 22:00:00.000Z
       console.log("the date today is", yesterday.toISOString())
      // Find all competitions where period_start_date is similar to yesterday's date and status is "OPEN_TO_REGISTRATION"
      const openCompetitions = await prisma.periods.findMany({
        where: {
          AND: [
            {
              period_start_date: {
                equals: yesterday.toISOString(),
              },
            },
            {
              competition: {
                status: 'OPEN',
              },
            },
            {
                competition: {
                  competition_level: "CONTINENT"
                },
              },

          ],
        },
        include: {
          competition: true,
        },
      });
      
      // Log the open competitions
      console.log('Open Competitions:', openCompetitions);
      
      
      
      console.log("madzinhi angu",openCompetitions)
      let competitions = openCompetitions
      // Process each open competition
      for (const competition of competitions) {
        const nextLevel = await chooseNextLevel(competition.competition.id);
  
        // Log the next level for each competition (you can update the competition status here)
        console.log(`Competition ${competition.competition.id} moved to level ${nextLevel}`);
      }
  
      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.toString() };
    }
};
const processWorldCompetitions = async () => {
    try {
      // Construct a date object for yesterday
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate()); // Set the date to yesterday
      yesterday.setUTCHours(22, 0, 0, 0); // Set the time to 22:00:00.000Z
       console.log("the date today is", yesterday.toISOString())
      // Find all competitions where period_start_date is similar to yesterday's date and status is "OPEN_TO_REGISTRATION"
      const openCompetitions = await prisma.periods.findMany({
        where: {
          AND: [
            {
              period_end_date: {
                equals: yesterday.toISOString(),
              },
            },
            {
              competition: {
                status: 'OPEN',
              },
            },
            {
                competition: {
                  competition_level: "WORLD"
                },
              },

          ],
        },
        include: {
          competition: true,
        },
      });
      
      // Log the open competitions
      console.log('Open Competitions:', openCompetitions);
      
      
      
      console.log("madzinhi angu",openCompetitions)
      let competitions = openCompetitions
      // Process each open competition
      for (const competition of competitions) {
        const nextLevel = await chooseNextLevel(competition.competition.id);
  
        // Log the next level for each competition (you can update the competition status here)
        console.log(`Competition ${competition.competition.id} moved to level ${nextLevel}`);
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
// This cron runs a minute past midnight every day
  scheduler.run(() => {
    processOpenCompetitions();
    processCountryCompetitions();
    processContinentCompetitions();
    processWorldCompetitions();
  }).cron('1 0 * * *', 'Africa/Cairo');

    // scheduler.run(() => {
    //     processOpenCompetitions();
    // }).cron('* * * * * *', 'Africa/Cairo');

  
}



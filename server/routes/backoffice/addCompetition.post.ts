import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
    let {data: {competition_name,competition_description,country_range,continent_range,world_range}} = await readBody(event)

    let periods = [
      {
        level: "COUNTRY",
        period__start_date: country_range[0],
        period_end_date: country_range[1]
      },
      {
        level: "CONTINENT",
        period__start_date: continent_range[0],
        period_end_date: continent_range[1]
      },
      {
        level: "WORLD",
        period__start_date: world_range[0],
        period_end_date: world_range[1]
      }
    ]

    try {
        const competitions = await prisma.competition.create({
            data: {
                competition_name: competition_name,
                competition_description: competition_description,
                periods: {
                  createMany: {
                    data: [
                      {
                        level: "COUNTRY",
                        period_start_date: country_range[0],
                        period_end_date: country_range[1]
                      },
                      {
                        level: "CONTINENT",
                        period_start_date: continent_range[0],
                        period_end_date: continent_range[1]
                      },
                      {
                        level: "WORLD",
                        period_start_date: world_range[0],
                        period_end_date: world_range[1]
                      }
                    ]
                    
                  }
                }
            }
        });
  
        response['competitions'] =  competitions
        response['success'] = true
  
      } catch (error: any) {
        response['success'] = false
        response['message'] = error.toString()
      };
   
    return response;
});
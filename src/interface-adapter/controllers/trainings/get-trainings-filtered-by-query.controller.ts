import { IGetTrainingsFilteredByQueryUseCase } from "@/src/application/use-cases/trainings/get-trainings-filtered-by-query.use-case";
import { Training } from "@/src/entities/training";

function presenter(trainings: Training[]) {
  return trainings.map((training) => {
    return {
      id: training.id,
      name: training.name,
      session: training.session,
      sector: training.sector,
      etablishment: {
        name: training.etablishment.name,
        status: training.etablishment.status,
        code: training.etablishment.code,
        department: training.etablishment.department,
      },
    };
  });
}

export type IGetTrainingsFilteredByQueryController = ReturnType<
  typeof getTrainingsFilteredByQueryController
>;

export const getTrainingsFilteredByQueryController =
  (getTrainingsFilteredByQueryUseCase: IGetTrainingsFilteredByQueryUseCase) =>
  async (query: string): Promise<ReturnType<typeof presenter>> => {
    const training = await getTrainingsFilteredByQueryUseCase(query);

    return presenter(training);
  };

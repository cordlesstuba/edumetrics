import { IRefreshTrainingsFromOpenDataUseCase } from "@/src/application/use-cases/trainings/resfresh-trainings-from-open-data.use-case";
import { Training } from "@/src/entities/training";

function presenter(trainings: Training[]) {
  return trainings.map((training) => {
    return {
      id: training.id,
    };
  });
}

export type IRefreshTrainingsFromOpenDataController = ReturnType<
  typeof refreshTrainingsFromOpenDataController
>;

export const refreshTrainingsFromOpenDataController =
  (refreshTrainingsFromOpenDataUseCase: IRefreshTrainingsFromOpenDataUseCase) =>
  async (): Promise<ReturnType<typeof presenter>> => {
    const training = await refreshTrainingsFromOpenDataUseCase();
    return presenter(training);
  };

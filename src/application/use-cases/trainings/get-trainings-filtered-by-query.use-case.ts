import { Training } from "@/src/entities/training";
import { ITrainingsRepository } from "../../repositories/trainings.repository.interface";

export type IGetTrainingsFilteredByQueryUseCase = ReturnType<
  typeof getTrainingsFilteredByQueryUseCase
>;

export const getTrainingsFilteredByQueryUseCase =
  (trainingRepository: ITrainingsRepository) =>
  async (query: string): Promise<Training[]> => {
    const trainings = await trainingRepository.getTrainingsFilteredByQuery(
      query
    );
    return trainings;
  };

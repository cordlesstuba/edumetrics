import { Training } from "@/src/entities/training";
import { ITrainingsRepository } from "../../repositories/trainings.repository.interface";

export type IGetTrainingByIdUseCase = ReturnType<typeof getTrainingByIdUseCase>;

export const getTrainingByIdUseCase =
  (trainingRepository: ITrainingsRepository) =>
  async (id: string): Promise<Training> => {
    const training = await trainingRepository.getTrainingById(id);
    if (!training) {
      throw new Error("Training not found");
    }
    return training;
  };

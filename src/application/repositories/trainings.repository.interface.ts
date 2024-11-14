import { Training, TrainingInsert } from "@/src/entities/training";

export interface ITrainingsRepository {
  upsertTraining(training: TrainingInsert): Promise<Training>;
  getTrainingsFilteredByQuery(query: string): Promise<Training[]>;
  getTrainingById(id: string): Promise<Training | null>;
}

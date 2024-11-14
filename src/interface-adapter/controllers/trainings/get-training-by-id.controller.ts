import { IGetTrainingByIdUseCase } from "@/src/application/use-cases/trainings/get-trainings-by-id.use-case";
import { Training } from "@/src/entities/training";

function presenter(training: Training) {
  return {
    id: training.id,
    name: training.name,
    session: training.session,
    sector: training.sector,
    description: training.description || "",
    fee: training.fee || "",
    feeBoursier: training.feeBoursier || "",
    etablishment: {
      name: training.etablishment.name,
      status: training.etablishment.status,
      code: training.etablishment.code,
      department: training.etablishment.department,
    },
  };
}

export type IGetTrainingByIdController = ReturnType<
  typeof getTrainingByIdController
>;

export const getTrainingByIdController =
  (getTrainingByIdUseCase: IGetTrainingByIdUseCase) =>
  async (id: string): Promise<ReturnType<typeof presenter>> => {
    const training = await getTrainingByIdUseCase(id);

    return presenter(training);
  };

import { Container } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "@/di/types";
import { MockTrainingsRepository } from "@/src/infrastructure/repositories/trainings.repository.mock";
import { TrainingsRepository } from "@/src/infrastructure/repositories/trainings.repository";
import { getTrainingsFilteredByQueryUseCase } from "@/src/application/use-cases/trainings/get-trainings-filtered-by-query.use-case";
import { refreshTrainingsFromOpenDataUseCase } from "@/src/application/use-cases/trainings/resfresh-trainings-from-open-data.use-case";
import { getTrainingByIdController } from "@/src/interface-adapter/controllers/trainings/get-training-by-id.controller";
import { getTrainingsFilteredByQueryController } from "@/src/interface-adapter/controllers/trainings/get-trainings-filtered-by-query.controller";
import { refreshTrainingsFromOpenDataController } from "@/src/interface-adapter/controllers/trainings/refresh-trainings-from-open-data.controller";
import { getTrainingByIdUseCase } from "@/src/application/use-cases/trainings/get-trainings-by-id.use-case";

export function registerTrainingsModule(container: Container) {
  if (process.env.NODE_ENV === "test") {
    container
      .bind(DI_SYMBOLS.ITrainingsRespository)
      .toClass(MockTrainingsRepository);
  } else {
    container
      .bind(DI_SYMBOLS.ITrainingsRespository)
      .toClass(TrainingsRepository, []);
  }

  // use cases
  container
    .bind(DI_SYMBOLS.IGetTrainingByIdUseCase)
    .toHigherOrderFunction(getTrainingByIdUseCase, [
      DI_SYMBOLS.ITrainingsRespository,
    ]);

  container
    .bind(DI_SYMBOLS.IGetTrainingsFilteredByQueryUseCase)
    .toHigherOrderFunction(getTrainingsFilteredByQueryUseCase, [
      DI_SYMBOLS.ITrainingsRespository,
    ]);

  container
    .bind(DI_SYMBOLS.IRefreshTrainingsFromOpenDataUseCase)
    .toHigherOrderFunction(refreshTrainingsFromOpenDataUseCase, [
      DI_SYMBOLS.IOpenDataService,
      DI_SYMBOLS.IParcoursupService,
      DI_SYMBOLS.IEtablishmentsRepository,
      DI_SYMBOLS.ITrainingsRespository,
    ]);

  container
    .bind(DI_SYMBOLS.IGetTrainingByIdController)
    .toHigherOrderFunction(getTrainingByIdController, [
      DI_SYMBOLS.IGetTrainingByIdUseCase,
    ]);

  container
    .bind(DI_SYMBOLS.IGetTrainingsFilteredByQueryController)
    .toHigherOrderFunction(getTrainingsFilteredByQueryController, [
      DI_SYMBOLS.IGetTrainingsFilteredByQueryUseCase,
    ]);

  container
    .bind(DI_SYMBOLS.IRefreshTrainingsFromOpenDataController)
    .toHigherOrderFunction(refreshTrainingsFromOpenDataController, [
      DI_SYMBOLS.IRefreshTrainingsFromOpenDataUseCase,
    ]);
}

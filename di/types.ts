import { IEtablishmentsRepository } from "@/src/application/repositories/etablishments.repository.interface";
import { ITrainingsRepository } from "@/src/application/repositories/trainings.repository.interface";
import { IOpenDataService } from "@/src/application/services/open-data-service.interface";
import { IParcoursupService } from "@/src/application/services/parcoursup.service.interface";
import { IGetTrainingByIdUseCase } from "@/src/application/use-cases/trainings/get-trainings-by-id.use-case";
import { IGetTrainingsFilteredByQueryUseCase } from "@/src/application/use-cases/trainings/get-trainings-filtered-by-query.use-case";
import { IRefreshTrainingsFromOpenDataUseCase } from "@/src/application/use-cases/trainings/resfresh-trainings-from-open-data.use-case";
import { IGetTrainingByIdController } from "@/src/interface-adapter/controllers/trainings/get-training-by-id.controller";
import { IGetTrainingsFilteredByQueryController } from "@/src/interface-adapter/controllers/trainings/get-trainings-filtered-by-query.controller";
import { IRefreshTrainingsFromOpenDataController } from "@/src/interface-adapter/controllers/trainings/refresh-trainings-from-open-data.controller";

export const DI_SYMBOLS = {
  // Services
  IOpenDataService: Symbol.for("IOpenDataService"),
  IParcoursupService: Symbol.for("IParcoursupService"),

  // Repositories
  IEtablishmentsRepository: Symbol.for("IEtablishmentsRepository"),
  ITrainingsRespository: Symbol.for("ITrainingsRespository"),

  // Use Cases
  IGetTrainingByIdUseCase: Symbol.for("IGetTrainingByIdUseCase"),
  IGetTrainingsFilteredByQueryUseCase: Symbol.for(
    "IGetTrainingsFilteredByQueryUseCase"
  ),
  IRefreshTrainingsFromOpenDataUseCase: Symbol.for(
    "IRefreshTrainingsFromOpenDataUseCase"
  ),

  // Controllers
  IGetTrainingByIdController: Symbol.for("IGetTrainingByIdController"),
  IGetTrainingsFilteredByQueryController: Symbol.for(
    "IGetTrainingsFilteredByQueryController"
  ),
  IRefreshTrainingsFromOpenDataController: Symbol.for(
    "IRefreshTrainingsFromOpenDataController"
  ),
};

export interface DI_RETURN_TYPES {
  // Services
  IOpenDataService: IOpenDataService;
  IParcoursupService: IParcoursupService;

  // Repositories
  IEtablishmentsRepository: IEtablishmentsRepository;
  ITrainingsRespository: ITrainingsRepository;

  // Use Cases
  IGetTrainingByIdUseCase: IGetTrainingByIdUseCase;
  IGetTrainingsFilteredByQueryUseCase: IGetTrainingsFilteredByQueryUseCase;
  IRefreshTrainingsFromOpenDataUseCase: IRefreshTrainingsFromOpenDataUseCase;

  // Controllers
  IGetTrainingByIdController: IGetTrainingByIdController;
  IGetTrainingsFilteredByQueryController: IGetTrainingsFilteredByQueryController;
  IRefreshTrainingsFromOpenDataController: IRefreshTrainingsFromOpenDataController;
}

import { Container } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "@/di/types";
import { TrainingsRepository } from "@/src/infrastructure/repositories/trainings.repository";
import { MockParcoursupService } from "@/src/infrastructure/services/parcoursup.service.mock";

export function registerParcoursupModule(container: Container) {
  if (process.env.NODE_ENV === "test") {
    container
      .bind(DI_SYMBOLS.IParcoursupService)
      .toClass(MockParcoursupService);
  } else {
    container
      .bind(DI_SYMBOLS.IParcoursupService)
      .toClass(TrainingsRepository, []);
  }
}

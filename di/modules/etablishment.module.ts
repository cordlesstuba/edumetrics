import { Container } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "@/di/types";
import { MockEtablishementsRepository } from "@/src/infrastructure/repositories/etablishments.repository.mock";
import { EtablishementsRepository } from "@/src/infrastructure/repositories/etablishments.repository";

export function registerEtablishmentsModule(container: Container) {
  if (process.env.NODE_ENV === "test") {
    container
      .bind(DI_SYMBOLS.IEtablishmentsRepository)
      .toClass(MockEtablishementsRepository);
  } else {
    container
      .bind(DI_SYMBOLS.IEtablishmentsRepository)
      .toClass(EtablishementsRepository, []);
  }
}

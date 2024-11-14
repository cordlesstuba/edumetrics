import { Container } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "@/di/types";
import { MockParcoursupService } from "@/src/infrastructure/services/parcoursup.service.mock";
import { ParcoursupService } from "@/src/infrastructure/services/parcoursup.service";

export function registerParcoursupModule(container: Container) {
  if (process.env.NODE_ENV === "test") {
    container
      .bind(DI_SYMBOLS.IParcoursupService)
      .toClass(MockParcoursupService);
  } else {
    container
      .bind(DI_SYMBOLS.IParcoursupService)
      .toClass(ParcoursupService, []);
  }
}

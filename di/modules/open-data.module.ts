import { Container } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "@/di/types";
import { MockOpenDataService } from "@/src/infrastructure/services/open-data.service.mock";
import { OpenDataService } from "@/src/infrastructure/services/open-data.service";

export function registerOpenDataModule(container: Container) {
  if (process.env.NODE_ENV === "test") {
    container.bind(DI_SYMBOLS.IOpenDataService).toClass(MockOpenDataService);
  } else {
    container.bind(DI_SYMBOLS.IOpenDataService).toClass(OpenDataService, []);
  }
}

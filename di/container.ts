import { createContainer } from "@evyweb/ioctopus";

import { DI_RETURN_TYPES, DI_SYMBOLS } from "@/di/types";

import { registerEtablishmentsModule } from "./modules/etablishment.module";
import { registerTrainingsModule } from "./modules/trainings.module";
import { registerOpenDataModule } from "./modules/open-data.module";
import { registerParcoursupModule } from "./modules/parcoursup.module";

const ApplicationContainer = createContainer();

registerEtablishmentsModule(ApplicationContainer);
registerTrainingsModule(ApplicationContainer);
registerOpenDataModule(ApplicationContainer);
registerParcoursupModule(ApplicationContainer);

export function getInjection<K extends keyof typeof DI_SYMBOLS>(
  symbol: K
): DI_RETURN_TYPES[K] {
  return ApplicationContainer.get(DI_SYMBOLS[symbol]);
}

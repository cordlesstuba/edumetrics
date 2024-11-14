import { Etablishment, EtablishmentInsert } from "@/src/entities/etablishment";

export interface IEtablishmentsRepository {
  upsertEtablishment(etablishment: EtablishmentInsert): Promise<Etablishment>;
}

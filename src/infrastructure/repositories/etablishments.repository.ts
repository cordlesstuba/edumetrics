import { db } from "@/lib/prisma";
import { IEtablishmentsRepository } from "@/src/application/repositories/etablishments.repository.interface";
import { EtablishmentInsert, Etablishment } from "@/src/entities/etablishment";

export class EtablishementsRepository implements IEtablishmentsRepository {
  async upsertEtablishment(
    etablishment: EtablishmentInsert
  ): Promise<Etablishment> {
    const etablishmentCreated = await db.etablishment.upsert({
      where: {
        uai: etablishment.uai,
      },
      update: {
        ...etablishment,
      },
      create: {
        ...etablishment,
      },
    });
    return etablishmentCreated;
  }
}

import { IEtablishmentsRepository } from "@/src/application/repositories/etablishments.repository.interface";
import { EtablishmentInsert, Etablishment } from "@/src/entities/etablishment";
import { randomUUID } from "crypto";

export class MockEtablishementsRepository implements IEtablishmentsRepository {
  private _etablishments: Etablishment[];

  constructor() {
    this._etablishments = [];
  }

  async upsertEtablishment(
    etablishmentToInsert: EtablishmentInsert
  ): Promise<Etablishment> {
    const index = this._etablishments.findIndex(
      (item) => item.uai === etablishmentToInsert.uai
    );

    let output: Etablishment;

    if (index !== -1) {
      // If object exists, update it
      this._etablishments[index] = {
        ...this._etablishments[index],
        ...etablishmentToInsert,
      };
      output = this._etablishments[index];
    } else {
      // If object doesn't exist, add it
      const etablishmentCreated = { id: randomUUID(), ...etablishmentToInsert };
      this._etablishments.push(etablishmentCreated);
      output = etablishmentCreated;
    }
    return output;
  }
}

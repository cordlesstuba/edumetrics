import { ITrainingsRepository } from "@/src/application/repositories/trainings.repository.interface";
import { Training } from "@/src/entities/training";

export class MockTrainingsRepository implements ITrainingsRepository {
  private _trainings: Training[];

  constructor() {
    this._trainings = [
      {
        id: "1",
        session: "2023",
        codeFormation: "OO1",
        etablishmentId: "Edumetrics",
        sector: "Prepa",
        name: "Prepa",
        link: "https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=4",
        etablishment: {
          id: "1",
          name: "Rueil",
          status: "Public",
          uai: "A09",
          code: "13",
          department: "Bouches-du-Rhône",
          region: "Paca",
          academy: "Marseille",
        },
      },
    ];
  }
  upsertTraining(): Promise<Training> {
    throw new Error("Method not implemented.");
  }
  async getTrainingById(id: string): Promise<Training | null> {
    const founded = this._trainings.find((t) => t.id === id);

    if (!founded) {
      return null;
    }
    return founded;
  }

  async getTrainingsFilteredByQuery(query: string): Promise<Training[]> {
    const keysToFilter: (keyof Training)[] = [
      "session",
      "name",
      "etablishment",
    ];

    const filteredData = this._trainings.filter((item) =>
      keysToFilter.some(
        (key) =>
          item[key] &&
          item[key].toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    return filteredData;
  }
}

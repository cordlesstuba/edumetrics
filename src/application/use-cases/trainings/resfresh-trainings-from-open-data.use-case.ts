import { Certification } from "@/src/entities/certification";
import { inserEtablishmentSchema } from "@/src/entities/etablishment";
import { inserTrainingSchema, Training } from "@/src/entities/training";
import { UAI } from "./const";
import { IOpenDataService } from "../../services/open-data-service.interface";
import { ParcoursupService } from "@/src/infrastructure/services/parcoursup.service";
import { IEtablishmentsRepository } from "../../repositories/etablishments.repository.interface";
import { ITrainingsRepository } from "../../repositories/trainings.repository.interface";

export type IRefreshTrainingsFromOpenDataUseCase = ReturnType<
  typeof refreshTrainingsFromOpenDataUseCase
>;

export const refreshTrainingsFromOpenDataUseCase =
  (
    openDataService: IOpenDataService,
    parcoursupService: ParcoursupService,
    etablishmentRepository: IEtablishmentsRepository,
    trainingsRepository: ITrainingsRepository
  ) =>
  async (): Promise<Training[]> => {
    const output: Training[] = [];

    const trainings = await openDataService.getTrainings();

    //filtered by UAI
    const filteredTrainings = trainings.filter((training) =>
      UAI.includes(training.cod_uai)
    );

    filteredTrainings.map(async (row) => {
      const etablishment = inserEtablishmentSchema.parse({
        status: row.contrat_etab || "",
        uai: row.cod_uai,
        name: row.g_ea_lib_vx || "",
        code: row.dep || "",
        department: row.dep_lib || "",
        region: row.region_etab_aff || "",
        academy: row.acad_mies || "",
      });

      const etablishmentUpserted =
        await etablishmentRepository.upsertEtablishment(etablishment);

      let description;
      let fee;
      let feeBoursier;
      let certifications: Certification[] = [];

      if (row.lien_form_psup && row.lien_form_psup !== "") {
        description = await parcoursupService.getDescription(
          row.lien_form_psup
        );
        fee = await parcoursupService.getFee(row.lien_form_psup);
        feeBoursier = await parcoursupService.getFeeBoursier(
          row.lien_form_psup
        );
        certifications = await parcoursupService.getCertifications(
          row.lien_form_psup
        );
        console.log("certifications ", certifications);
      }

      const training = inserTrainingSchema.parse({
        session: row.session || "",
        etablishmentId: etablishmentUpserted.id,
        name: row.lib_for_voe_ins || "",
        link: row.lien_form_psup || "",
        codeFormation: row.cod_aff_form || "",
        sector: row.fili || "",
        description,
        fee,
        feeBoursier,
      });

      const upsertedTraining = await trainingsRepository.upsertTraining(
        training
      );
      output.push(upsertedTraining);
    });

    return output;
  };

import { z } from "zod";

export const etablishmentSchema = z.object({
  id: z.string(),
  status: z.string(),
  uai: z.string(),
  name: z.string(),
  code: z.string(),
  department: z.string(),
  region: z.string(),
  academy: z.string(),
});
export type Etablishment = z.infer<typeof etablishmentSchema>;

export const inserEtablishmentSchema = etablishmentSchema.pick({
  status: true,
  uai: true,
  name: true,
  code: true,
  department: true,
  region: true,
  academy: true,
});

export type EtablishmentInsert = z.infer<typeof inserEtablishmentSchema>;

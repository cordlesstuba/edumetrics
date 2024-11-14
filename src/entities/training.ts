import { z } from "zod";
import { etablishmentSchema } from "./etablishment";

export const trainingSchema = z.object({
  id: z.string(),
  session: z.string(),
  codeFormation: z.string(),
  etablishmentId: z.string(),
  sector: z.string().nullable(),
  name: z.string(),
  link: z.string(),
  etablishment: etablishmentSchema,
  description: z.optional(z.string().nullable()),
  fee: z.optional(z.string().nullable()),
  feeBoursier: z.optional(z.string().nullable()),
});
export type Training = z.infer<typeof trainingSchema>;

export const inserTrainingSchema = trainingSchema.pick({
  session: true,
  etablishmentId: true,
  sector: true,
  codeFormation: true,
  name: true,
  link: true,
  description: true,
  fee: true,
  feeBoursier: true,
});

export type TrainingInsert = z.infer<typeof inserTrainingSchema>;

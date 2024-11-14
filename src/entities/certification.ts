import { z } from "zod";

export const certificationSchema = z.object({
  alt: z.string(),
  src: z.string(),
});
export type Certification = z.infer<typeof certificationSchema>;

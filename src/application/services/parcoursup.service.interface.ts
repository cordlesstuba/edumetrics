import { Certification } from "@/src/entities/certification";

export interface IParcoursupService {
  getDescription(url: string): Promise<string | undefined>;
  getFee(url: string): Promise<string | undefined>;
  getFeeBoursier(url: string): Promise<string | undefined>;
  getCertifications(url: string): Promise<Certification[]>;
}

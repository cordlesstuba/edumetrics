import { IParcoursupService } from "@/src/application/services/parcoursup.service.interface";
import { Certification } from "@/src/entities/certification";

export class MockParcoursupService implements IParcoursupService {
  async getFee(): Promise<string | undefined> {
    return "1000$";
  }
  async getFeeBoursier(): Promise<string | undefined> {
    return "700$";
  }
  async getCertifications(): Promise<Certification[]> {
    return [
      {
        alt: "test",
        src: "test.jpg",
      },
    ];
  }
  async getDescription(): Promise<string | undefined> {
    return "Decription";
  }
}

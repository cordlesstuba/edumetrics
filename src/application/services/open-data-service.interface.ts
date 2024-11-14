import { RowOpenData } from "@/src/entities/open-data-training";

export interface IOpenDataService {
  getTrainings(): Promise<RowOpenData[]>;
}

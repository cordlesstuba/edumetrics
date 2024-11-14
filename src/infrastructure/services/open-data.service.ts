import { IOpenDataService } from "@/src/application/services/open-data-service.interface";
import { RowOpenData } from "@/src/entities/open-data-training";
import { promises as fs } from "fs";

export class OpenDataService implements IOpenDataService {
  async getTrainings(): Promise<RowOpenData[]> {
    const file = await fs.readFile(
      process.cwd() + "/src/infrastructure/services/data.json",
      "utf8"
    );
    const data: RowOpenData[] = JSON.parse(file);
    return data;
  }
}

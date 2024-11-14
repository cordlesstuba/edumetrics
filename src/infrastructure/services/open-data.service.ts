import { IOpenDataService } from "@/src/application/services/open-data-service.interface";
import { RowOpenData } from "@/src/entities/open-data-training";
import fs from "fs";
import path from "path";

export class OpenDataService implements IOpenDataService {
  async getTrainings(): Promise<RowOpenData[]> {
    const filePath = path.join(process.cwd(), "/app/data.json");
    const file = fs.readFileSync(filePath, "utf-8");

    const data: RowOpenData[] = JSON.parse(file);
    return data;
  }
}

import { IParcoursupService } from "@/src/application/services/parcoursup.service.interface";
import * as cheerio from "cheerio";
import { Certification } from "@/src/entities/certification";

export class ParcoursupService implements IParcoursupService {
  async getDescription(url: string): Promise<string | undefined> {
    try {
      let description = "";

      const response = await fetch(url);
      const body = await response.text();

      const $ = cheerio.load(body);
      try {
        description =
          $("h3:contains('Présentation de la formation')")
            .parent()
            .children()
            .find("div")
            .first()
            .html() || "";
      } catch {
        console.error("Error while fetching description");
      }

      return description;
    } catch (error) {
      console.error("Error fetching description:", error);
    }
  }

  async getFee(url: string): Promise<string | undefined> {
    try {
      let fee = "";

      const response = await fetch(url);
      const body = await response.text();

      const $ = cheerio.load(body);
      try {
        fee =
          $("h5:contains('Par année')")
            .parent()
            .find("p")
            .first()
            // .children()
            // .find("p")
            // .first()
            .text()
            .trim() || "";
      } catch {
        console.error("Error while fetching fee");
      }
      return fee;
    } catch (error) {
      console.error("Error fetching fee:", error);
    }
  }

  async getFeeBoursier(url: string): Promise<string | undefined> {
    try {
      let fee = "";

      const response = await fetch(url);
      const body = await response.text();

      const $ = cheerio.load(body);
      try {
        fee =
          $("h5:contains('Par année pour les étudiants boursiers')")
            .parent()
            .find("p")
            .first()
            .text()
            .trim() || "";
      } catch {
        console.error("Error while fetching fee");
      }
      return fee;
    } catch (error) {
      console.error("Error fetching fee:", error);
    }
  }

  async getCertifications(url: string): Promise<Certification[]> {
    try {
      const certifications: Certification[] = [];

      const response = await fetch(url);
      const body = await response.text();

      const $ = cheerio.load(body);
      try {
        const imgs = $("h3:contains('Certification')").parent().find("img");

        for (let i = 0; i < imgs.length; i++) {
          const alt = imgs.eq(i).attr("alt");
          const src = imgs.eq(i).attr("src");

          if (alt && src) {
            certifications.push({
              alt,
              src,
            });
          }
        }
      } catch {
        console.error("Error while fetching certifications");
        return [];
      }
      return certifications;
    } catch (error) {
      console.error("Error fetching fee:", error);
      return [];
    }
  }
}

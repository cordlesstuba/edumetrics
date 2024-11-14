import { expect, it } from "vitest";

import { getInjection } from "@/di/container";

const getTrainingByIdController = getInjection("IGetTrainingByIdController");

it("should return training", async () => {
  await expect(getTrainingByIdController("1")).resolves.toMatchObject({
    id: "1",
    name: "Prepa",
    session: "2023",
    sector: "Prepa",
    description: "",
    fee: "",
    feeBoursier: "",
    etablishment: {
      name: "Rueil",
      status: "Public",
      code: "13",
      department: "Bouches-du-Rhône",
    },
  });
});

it("should throw when not found", async () => {
  await expect(getTrainingByIdController("2")).rejects.toBeInstanceOf(Error);
});

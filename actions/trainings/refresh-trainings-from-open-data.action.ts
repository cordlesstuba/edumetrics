"use server";

import { getInjection } from "@/di/container";
import { revalidatePath } from "next/cache";

export async function refreshTrainingsFromOpenDataAction() {
  try {
    const refreshTrainingsFromOpenDataController = getInjection(
      "IRefreshTrainingsFromOpenDataController"
    );

    await refreshTrainingsFromOpenDataController();
  } catch (err) {
    console.error("Error: ", err);
    return {
      error: err,
    };
  }
  revalidatePath(`/trainings`);
}

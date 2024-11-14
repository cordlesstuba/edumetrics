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
    console.log("Error: ", err);
    return {
      error:
        "An error happened while refreshing data. The developers have been notified. Please try again later.",
    };
  }
  revalidatePath(`/trainings`);
}

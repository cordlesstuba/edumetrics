"use client";

import { refreshTrainingsFromOpenDataAction } from "@/actions/trainings/refresh-trainings-from-open-data.action";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { toast } from "sonner";

export const RefreshOpenDataButton = () => {
  async function onClick() {
    const res = await refreshTrainingsFromOpenDataAction();

    if (res?.error) {
      toast.error(res.error);
    }
  }

  return (
    <Button
      className="w-56 transition-all duration-500 rounded-full text-white text-xs font-semibold"
      onClick={onClick}
    >
      <RefreshCcw />
      Refresh Open Data
    </Button>
  );
};

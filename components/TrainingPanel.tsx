"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Training } from "@/src/entities/training";
import { useTrainingStore } from "@/store/training";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

export function TrainingPanel() {
  const [training, setTraining] = useState<Training | null>(null);

  const { isOpen, onOpenChange, selectedTrainingId } = useTrainingStore();

  useEffect(() => {
    if (selectedTrainingId) {
      fetch(`/api/trainings?id=${selectedTrainingId}`)
        .then((res) => res.json())
        .then((data) => {
          setTraining(data.data);
        });
    }
  }, [isOpen, selectedTrainingId]);

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex flex-col gap-2">
            <div className="flex items-center justify-between p-2">
              Formation
              {training?.etablishment.status === "Public" ? (
                <Badge className="w-fit">{training?.etablishment.status}</Badge>
              ) : training?.etablishment.status ===
                "Privé sous contrat d'association" ? (
                <Badge className="w-fit" variant="warning">
                  {training?.etablishment.status}
                </Badge>
              ) : (
                <Badge className="w-fit" variant="info">
                  {training?.etablishment.status}
                </Badge>
              )}
            </div>
          </SheetTitle>
          <SheetDescription className="p-2">{training?.name}</SheetDescription>
        </SheetHeader>
        <div className="p-2">
          {training?.description && (
            <ScrollArea className="h-72 rounded-md border p-2">
              <div
                dangerouslySetInnerHTML={{
                  __html: training.description || "<div></div>",
                }}
              />
            </ScrollArea>
          )}

          <div className="flex flex-col gap-2 pt-4">
            Frais de scolarité
            <span className="font-semibold">Par année</span>
            {training?.fee ? <span>{training.fee}</span> : <div>-</div>}
            <span className="font-semibold">
              Par année pour les étudiants boursiers
            </span>
            {training?.feeBoursier ? (
              <span>{training.feeBoursier}</span>
            ) : (
              <span>-</span>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

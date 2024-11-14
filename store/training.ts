import { create } from "zustand";

interface TrainingStoreProps {
  isOpen: boolean;
  selectedTrainingId: string | null;

  onOpen: (trainingId: string) => void;
  onClose: () => void;
  onOpenChange: (open: boolean) => void;
}

export const useTrainingStore = create<TrainingStoreProps>((set) => ({
  isOpen: false,
  selectedTrainingId: null,

  onOpen: (trainingId: string) =>
    set({ isOpen: true, selectedTrainingId: trainingId }),
  onClose: () => set({ isOpen: false, selectedTrainingId: null }),
  onOpenChange: (open: boolean) => set({ isOpen: open }),
}));

import { db } from "@/lib/prisma";
import { ITrainingsRepository } from "@/src/application/repositories/trainings.repository.interface";
import { TrainingInsert, Training } from "@/src/entities/training";

export class TrainingsRepository implements ITrainingsRepository {
  async getTrainingById(id: string): Promise<Training | null> {
    return await db.training.findFirst({
      where: {
        id,
      },
      include: {
        etablishment: true,
      },
    });
  }
  async upsertTraining(training: TrainingInsert): Promise<Training> {
    const trainingCreated = await db.training.upsert({
      where: {
        codeFormation: training.codeFormation,
      },
      update: {
        ...training,
      },
      create: {
        ...training,
      },
      include: {
        etablishment: true,
      },
    });
    return trainingCreated;
  }
  async getTrainingsFilteredByQuery(query: string): Promise<Training[]> {
    return await db.training.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            session: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            etablishment: {
              name: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            etablishment: {
              status: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        etablishment: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}

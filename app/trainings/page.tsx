import { Training } from "@/src/entities/training";
import { DataTable, FilterOption } from "./components/data-table";
import { columns } from "./components/columns";
import Search from "@/components/search";
import { TrainingPanel } from "@/components/TrainingPanel";
import { getInjection } from "@/di/container";

async function getTrainingsFiltered(query: string) {
  try {
    const getTrainingsFilteredByQueryController = getInjection(
      "IGetTrainingsFilteredByQueryController"
    );
    return await getTrainingsFilteredByQueryController(query);
  } catch (err) {
    throw err;
  }
}

function getUniqueSectors(trainings: Training[]): FilterOption[] {
  const uniqueSectors = new Set<string>(
    trainings.map((training) => training.sector || "")
  );

  return Array.from(uniqueSectors).map((sector) => ({
    label: sector,
    value: sector,
  }));
}

function getUniqueStatus(trainings: Training[]): FilterOption[] {
  const uniqueStatus = new Set<string>(
    trainings.map((training) => training.etablishment.status)
  );

  return Array.from(uniqueStatus).map((status) => ({
    label: status,
    value: status,
  }));
}

function getUniqueDepartment(trainings: Training[]): FilterOption[] {
  const uniqueDepartment = new Set<string>(
    trainings.map((training) => training.etablishment.department)
  );

  return Array.from(uniqueDepartment).map((department) => ({
    label: department,
    value: department,
  }));
}

type HomeProps = {
  searchParams: Promise<{ query?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const currSearchParams = await searchParams;
  const query = currSearchParams.query || "";

  let trainings;

  try {
    trainings = await getTrainingsFiltered(query);
  } catch (err) {
    throw err;
  }

  const trainingsContent = trainings as Training[];

  const filters = [
    {
      name: "sector",
      title: "Filière",
      options: getUniqueSectors(trainingsContent),
    },
    {
      name: "status",
      title: "Statut",
      options: getUniqueStatus(trainingsContent),
    },
    {
      name: "department",
      title: "Département",
      options: getUniqueDepartment(trainingsContent),
    },
  ];

  return (
    <div className="p-4">
      <div className="pb-2">
        <Search placeholder="Rechercher.." />
      </div>

      <DataTable columns={columns} data={trainingsContent} filters={filters} />
      <TrainingPanel />
    </div>
  );
}

import { RefreshOpenDataButton } from "@/components/RefreshOpenData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="p-4 flex flex-col gap-2">
        <RefreshOpenDataButton />

        <Button
          asChild
          className="w-56 transition-all duration-500 rounded-full text-white text-xs font-semibold"
        >
          <Link href="/trainings">Liste des formations</Link>
        </Button>
      </div>
    </div>
  );
}

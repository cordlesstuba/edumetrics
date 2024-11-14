"use client";

import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

// import { priorities, statuses } from "../data/data";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";
// import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "./data-table";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filters: Filter[];
}

export function DataTableToolbar<TData>({
  table,
  filters,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {/* <Input
          placeholder="Rechercher une formation..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        /> */}
        {filters &&
          filters.map((filter) => {
            return (
              table.getColumn(filter.name) && (
                <DataTableFacetedFilter
                  key={filter.name}
                  column={table.getColumn(filter.name)}
                  title={filter.title}
                  options={filter.options}
                />
              )
            );
          })}

        {/* {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Statut"
            options={[]}
          />
        )}
        {table.getColumn("department") && (
          <DataTableFacetedFilter
            column={table.getColumn("department")}
            title="Départment"
            options={[]}
          />
        )} */}
        {/* {table.getColumn("sector") && (
          <DataTableFacetedFilter
            column={table.getColumn("sector")}
            title="Filière"
            options={[]}
          />
        )} */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Effacer les filtres
            <X />
          </Button>
        )}
      </div>
    </div>
  );
}

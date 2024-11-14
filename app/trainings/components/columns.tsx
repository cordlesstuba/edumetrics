"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./data-table-column-header";
import { Training } from "@/src/entities/training";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<Training>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nom de la formation" />
    ),
    cell: ({ row }) => (
      <div className="max-w-80 truncate">
        <span className="">{row.getValue("name")}</span>
      </div>
    ),
    enableSorting: true,
  },

  {
    id: "status",
    accessorKey: "etablishment.status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Statut" />
    ),
    cell: ({ row }) => {
      const status = row.original?.etablishment.status;

      if (!status) {
        return <div>-</div>;
      }

      return (
        <div className="flex gap-2 flex-wrap">
          {status === "Public" ? (
            <Badge>{status}</Badge>
          ) : status === "Privé sous contrat d'association" ? (
            <Badge variant="warning">{status}</Badge>
          ) : (
            <Badge variant="info">{status}</Badge>
          )}
        </div>
      );
    },
    enableSorting: true,
  },

  {
    id: "code",
    accessorKey: "etablishment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Code départemental" />
    ),
    cell: ({ row }) => {
      const code = row.original?.etablishment.code;

      if (!code) {
        return <div>-</div>;
      }

      return <div className="flex gap-2 flex-wrap">{code}</div>;
    },
    enableSorting: true,
  },

  {
    id: "department",
    accessorKey: "etablishment.department",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Département" />
    ),
    cell: ({ row }) => {
      const department = row.original?.etablishment.department;

      if (!department) {
        return <div>-</div>;
      }

      return <div className="flex gap-2 flex-wrap">{department}</div>;
    },
    enableSorting: true,
  },

  {
    id: "sector",
    accessorKey: "sector",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Filière" />
    ),
    cell: ({ row }) => {
      const sector = row.original?.sector;

      if (!sector) {
        return <div>-</div>;
      }

      return <div className="flex gap-2 flex-wrap">{sector}</div>;
    },
    enableSorting: true,
  },
];

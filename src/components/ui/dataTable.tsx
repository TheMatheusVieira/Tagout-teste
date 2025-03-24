"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Span } from "next/dist/trace";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const partitionData = (data: any[], size: number): any[][] => {
  const result = [];

  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }

  return result;
};

const data: Users[] = [
  {
    id: 1,
    empresa: "Tagout",
    acesso: "Colaborador",
    nomecolab: "Colaborador 1",
  },
  {
    id: 2,
    empresa: "Tagout",
    acesso: "Colaborador",
    nomecolab: "Colaborador 2",
  },
  {
    id: 3,
    empresa: "Tagout",
    acesso: "Colaborador",
    nomecolab: "Colaborador 3",
  },
  {
    id: 4,
    empresa: "Tagout",
    acesso: "Líder",
    nomecolab: "Colaborador 4",
  },
  {
    id: 5,
    empresa: "SILGAN DISPENSNG - JUNDIAÍ",
    acesso: "Terceiro",
    nomecolab: "Colaborador 5",
  },
  {
    id: 6,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Administrador",
    nomecolab: "Colaborador 6",
  },
  {
    id: 7,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Administrador",
    nomecolab: "Colaborador 7",
  },
  {
    id: 8,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Líder",
    nomecolab: "Colaborador 8",
  },
  {
    id: 9,
    empresa: "Tagout",
    acesso: "Colaborador",
    nomecolab: "Colaborador 9",
  },
  {
    id: 10,
    empresa: "Tagout",
    acesso: "Colaborador",
    nomecolab: "Colaborador 10",
  },
  {
    id: 11,
    empresa: "Tagout",
    acesso: "Colaborador",
    nomecolab: "Colaborador 11",
  },
  {
    id: 12,
    empresa: "Tagout",
    acesso: "Líder",
    nomecolab: "Colaborador 12",
  },
  {
    id: 13,
    empresa: "SILGAN DISPENSNG - JUNDIAÍ",
    acesso: "Terceiro",
    nomecolab: "Colaborador 13",
  },
  {
    id: 14,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Administrador",
    nomecolab: "Colaborador 14",
  },
  {
    id: 15,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Administrador",
    nomecolab: "Colaborador 15",
  },
  {
    id: 16,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Líder",
    nomecolab: "Colaborador 16",
  },

  {
    id: 17,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Líder",
    nomecolab: "TESTE 17",
  },
  {
    id: 17,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Líder",
    nomecolab: "TESTE 17",
  },
  {
    id: 17,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Líder",
    nomecolab: "TESTE 17",
  },
  {
    id: 17,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Líder",
    nomecolab: "TESTE 17",
  },
  {
    id: 17,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Líder",
    nomecolab: "TESTE 17",
  },
  {
    id: 17,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Líder",
    nomecolab: "TESTE 17",
  },
  {
    id: 17,
    empresa: "TAGOUT TREINAMENTO",
    acesso: "Líder",
    nomecolab: "TESTE 17",
  },
];

export type Users = {
  id: number;
  empresa: string;
  acesso: "Colaborador" | "Líder" | "Administrador" | "Terceiro";
  nomecolab: string;
};

export const columns: ColumnDef<Users>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nomecolab",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome do usuário
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="">{row.getValue("nomecolab")}</div>,
  },
  {
    accessorKey: "acesso",
    header: "Nível de acesso",
    cell: ({ row }) => <div className="">{row.getValue("acesso")}</div>,
  },
  {
    accessorKey: "empresa",
    header: () => <div className="text-right">Empresa principal</div>,

    cell: ({ row }) => <div className="">{row.getValue("empresa")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const users = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(users.id))}
            >
              Copy users ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View users details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    }, 
    initialState:{
      pagination:{
        pageSize:16
      }
    }
  });


  const partitionedRows = partitionData(table.getRowModel().rows, 8); //Limite 2 linhas mas botão funciona

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Pesquisar"
          value={
            (table.getColumn("nomecolab")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("nomecolab")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Colunas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-wrap gap-4 justify-between">
        {partitionedRows.map((rowGroup, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="flex-1 min-w-[300px] border rounded-md p-2"
          >
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {rowGroup.length ? (
                  rowGroup.map(
                    (row: {
                      id: React.Key | null | undefined;
                      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                      getIsSelected: () => any;
                      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                      getVisibleCells: () => any[];
                    }) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    )
                  )
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}

// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table";
//   import { ArrowRight } from "lucide-react";
  
//   const eventlist = [
//     { id: 1, eventname: "Painel elétrico X", status: "ON" },
//     { id: 2, eventname: "Painel elétrico Y", status: "ON" },
//     { id: 3, eventname: "Manutenção nos teares", status: "ON" },
//     { id: 4, eventname: "Manutenção no QDC 1", status: "P" },
//     { id: 5, eventname: "Manutenção no QDC 2", status: "P" },
//     { id: 6, eventname: "Manutenção no QDC 3", status: "OFF" },
//     { id: 7, eventname: "Painel elétrico 4", status: "OFF" },
//     { id: 8, eventname: "Painel elétrico Z", status: "OFF" },
//   ];
  
//   export function EventList() {
//     return (
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">Status</TableHead>
//             <TableHead>Atividade</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {eventlist.map((event) => (
//             <TableRow key={event.eventname}>
//               <TableCell className="font-medium">{event.status}</TableCell>
//               <TableCell>{event.eventname}</TableCell>
//               <TableCell className="flex justify-end">
//                 <ArrowRight />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     );
//   }
  
"use client"
import { useState, useMemo } from 'react';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const eventlist = [
  { id: 1, eventname: "Painel elétrico X", status: "ON" },
  { id: 2, eventname: "Painel elétrico Y", status: "ON" },
  { id: 3, eventname: "Manutenção nos teares", status: "ON" },
  { id: 4, eventname: "Manutenção no QDC 1", status: "P" },
  { id: 5, eventname: "Manutenção no QDC 2", status: "P" },
  { id: 6, eventname: "Manutenção no QDC 3", status: "OFF" },
  { id: 7, eventname: "Painel elétrico 4", status: "OFF" },
  { id: 8, eventname: "Painel elétrico Z", status: "OFF" },
  { id: 9, eventname: "Painel elétrico 4", status: "OFF" },
  { id: 10, eventname: "Painel elétrico Z", status: "OFF" },
];

export function EventListWithFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("original");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredEvents = useMemo(() => {
    // Filtra por termo de busca
    const result = eventlist.filter(event =>
      event.eventname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Ordena os resultados
    switch (sortOption) {
      case "alfabetica":
        return result.sort((a, b) => a.eventname.localeCompare(b.eventname));
      case "status":
        return result.sort((a, b) => a.status.localeCompare(b.status));
      default:
        return result; // Mantém a ordem original
    }
  }, [searchTerm, sortOption]);

  return (
    <div className="space-y-4">
      {/* Componente de Filtro e Busca */}
      <div className="max-w-lg mx-auto">
        <div className="flex gap-2">
        <h1 className="text-lg flex items-center font-bold">
            Todas manutenções em andamento
        </h1>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              className="pl-10 pr-4 py-2 w-full text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Buscar eventos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center justify-between px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Filtrar
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="py-1">
                  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
                    onClick={() => {
                      setSortOption("original");
                      setIsDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      sortOption === "original"
                        ? "bg-bbrose text-red dark:bg-blue-900/50 dark:text-blue-300"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    Ordem original
                  </button>
                  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
                    onClick={() => {
                      setSortOption("alfabetica");
                      setIsDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      sortOption === "alfabetica"
                        ? "bg-bbrose text-red dark:bg-blue-900/50 dark:text-blue-300"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    Ordem alfabética
                  </button>
                  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
                    onClick={() => {
                      setSortOption("status");
                      setIsDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      sortOption === "status"
                        ? "bg-bbrose text-red dark:bg-blue-900/50 dark:text-blue-300"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    Por status
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabela de Eventos */}
      <div className="border rounded-md overflow-hidden dark:border-gray-700">
        <Table>
          <TableHeader className="bg-red dark:bg-gray-800">
            <TableRow>
              <TableHead className="w-[100px] text-white">Status</TableHead>
              <TableHead className='text-white'>Atividade</TableHead>
              {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
<TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEvents.map((event) => (
              <TableRow key={event.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <TableCell className="font-medium">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    event.status === "ON" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" 
                      : event.status === "OFF" 
                        ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" 
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                  }`}>
                    {event.status}
                  </span>
                </TableCell>
                <TableCell>{event.eventname}</TableCell>
                <TableCell className="text-right">
                  <ArrowRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
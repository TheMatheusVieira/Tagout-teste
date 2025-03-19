import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { ArrowRight } from "lucide-react";
  
  const eventlist = [
    { id: 1, eventname: "Painel elétrico X", status: "ON" },
    { id: 2, eventname: "Painel elétrico Y", status: "ON" },
    { id: 3, eventname: "Manutenção nos teares", status: "ON" },
    { id: 4, eventname: "Manutenção no QDC 1", status: "P" },
    { id: 5, eventname: "Manutenção no QDC 2", status: "P" },
    { id: 6, eventname: "Manutenção no QDC 3", status: "OFF" },
    { id: 7, eventname: "Painel elétrico 4", status: "OFF" },
    { id: 8, eventname: "Painel elétrico Z", status: "OFF" },
  ];
  
  export function EventList() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead>Atividade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventlist.map((event) => (
            <TableRow key={event.eventname}>
              <TableCell className="font-medium">{event.status}</TableCell>
              <TableCell>{event.eventname}</TableCell>
              <TableCell className="flex justify-end">
                <ArrowRight />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  
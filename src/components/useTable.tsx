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
    { eventname: "Painel elétrico X", status: "ON" },
    { eventname: "Painel elétrico X", status: "ON" },
    { eventname: "Painel elétrico X", status: "ON" },
    { eventname: "Painel elétrico X", status: "ON" },
    { eventname: "Painel elétrico X", status: "ON" },
    { eventname: "Painel elétrico X", status: "ON" },
    { eventname: "Painel elétrico X", status: "ON" },
    { eventname: "Painel elétrico X", status: "ON" },
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
  
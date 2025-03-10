import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";

export default function Home() {
  return (
    <main>
      <div>

        <Header />

        <Sidebar />

        <h1 className="m-5 text-2xl text-red text font-bold">Manutenção atual: Painel elétrico X</h1>

        <div>
          <span className="bg-red text-white text-2xl font-bold rounded-sm px-5 py-2 ml-5 ">SEGUNDA-FEIRA 9</span>
        </div>

        <Button className="ml-5 mt-5">ACOMPANHAR</Button>

        <h1 className="m-5 text-2xl text-red text font-bold">Colaboradores ativos</h1>

        <Card>
          <CardHeader>
            <CardTitle>Nome do colaborador</CardTitle>
            <CardDescription>Cargo do colaborador</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Hora início</p>
          </CardContent>
          <CardFooter>
            <p>Data início</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nome do colaborador</CardTitle>
            <CardDescription>Cargo do colaborador</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Hora início</p>
          </CardContent>
          <CardFooter>
            <p>Data início</p>
          </CardFooter>
        </Card>

      </div>
    </main>
  );
}

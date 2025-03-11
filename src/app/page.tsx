import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardDetail,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { CalendarDays, CircleUser, Clock, House } from "lucide-react";

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

<div className="flex flex-row gap-5">
<div>
        <Card>
          <CardHeader>
            <CardTitle>Nome do colaborador</CardTitle>
            <CardDescription>Cargo do colaborador</CardDescription>
            <CardDetail/>
          </CardHeader>
          <div className="flex flex-row gap-5">
          <CardContent>
            <p className="mb-4">Hora início</p>
            <div className="flex flex-row gap-2 text-irongray">
            <Clock size={24} />
            <h1>16:00</h1>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="mb-4">Data início</p>
            <div className="flex flex-row gap-2">
            <CalendarDays size={24} />
            <h1>09 / 12 / 24</h1>
            </div>
          </CardFooter>
          </div>
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

<div>
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

<div>
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
</div>

<div className="flex flex-row gap-20 ml-20 mt-10">

    <div className="">
    <House size={45} />
    <span>Home</span>
    </div>

    <div className="">
      <CircleUser size={45} />
      <span>Perfil</span>
    </div>
</div>

      </div>
    </main>
  );
}

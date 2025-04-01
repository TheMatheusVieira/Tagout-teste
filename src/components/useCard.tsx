import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardDetail,
} from "./ui/card";
import { ArrowRight, CalendarDays, Clock, UserCircle2 } from "lucide-react";
import {
  MiniCard,
  SmCardDescription,
  SmCardHeader,
  SmCardTitle,
} from "./ui/minicards";

//CARDS DE COLABOTADORES DA ATIVIDADE
export function UseCard() {
  return (
    <Card>
      <div className="relative">
        <CardHeader>
          <CardTitle>Nome do colaborador</CardTitle>
          <CardDescription>Cargo do colaborador</CardDescription>
          <CardDetail />
        </CardHeader>
      </div>

      <div className="flex flex-row gap-8">
        <div className="text-irongray">
          <CardContent>
            <div className="justify-items-start">
              <p className="mb-4">Hora início</p>
              <div className="flex flex-row gap-2">
                <Clock size={24} className="mt-0.5" />
                <h1 className="font-medium text-lg ml-1">16:00</h1>
              </div>
            </div>
          </CardContent>
        </div>

        <div className="text-irongray">
          <CardContent>
            <p className="mb-4">Data início</p>
            <div className="flex flex-row gap-2">
              <CalendarDays size={24} className="mt-0.5" />
              <h1 className="font-medium text-lg ml-1">09 / 12 / 24</h1>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

//CARDS PARA OUTRAS ATIVIDADES RECENTES
export function UseMiniCard() {
  return (
    <MiniCard>
      <SmCardHeader>
        <SmCardTitle>Caixa de bloqueio</SmCardTitle>
        <SmCardDescription>123145213</SmCardDescription>

        <div className="flex flex-row mt-8 justify-between">
          <h1 className="text-red font-bold">Visualizar</h1>
          <ArrowRight size={24} className="text-red" />
        </div>
      </SmCardHeader>
    </MiniCard>
  );
}

//CARD PERFIL DO USUÁRIO
export function CardUser(){
  return (
    <div className="w-130 h-50 m-15 mt-20 rounded-xl flex flex-row border-1">
      <div className="m-5 flex flex-col font-semibold text-xl gap-2">
      <span>Nome colaborador</span>
      <span>ADM</span>
      <span>ID</span>

      <a href="/manageUsers" className="font-bold mt-2 underline">GERENCIAR USUÁRIOS</a>
    </div><div className="flex items-center ml-20">
        <UserCircle2 size={150} />
      </div>
      </div>
  );
}
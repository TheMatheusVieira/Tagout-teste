import { Button } from "@/components/ui/button";
import { ChartTask } from "@/components/ui/chartask";
import { ChartBatery } from "@/components/ui/chartbatery";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Header } from "@/components/ui/header";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Sidebar from "@/components/ui/sidebar";
import { CircleUser, House } from "lucide-react";

import { UseCard } from "../components/useCard";
import { UseMiniCard } from "@/components/useMiniCard";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
         <Sidebar />

        <div className="flex flex-row gap-5 w-full">
          <div>
            <h1 className="m-5 text-2xl text-red text font-bold">
              Manutenção atual: Painel elétrico X
            </h1>

            <div>
              <span className="bg-red text-white text-2xl font-bold rounded-sm px-5 py-2 ml-5 ">
                SEGUNDA-FEIRA 9
              </span>
            </div>

            <Button className="text-center ml-5 mt-5 w-50 h-12 text-2xl bg-gray-700">
              ACOMPANHAR
            </Button>
          </div>

          <div className="relative mt-8">
            <div className="bg-red h-35 w-0.5 flex absolute" />
          </div>

          <div className="ml-5 h-50 mt-3 flex flex-row gap-5 mr-10">
            <ChartTask />

            <ChartBatery />
          </div>

          <div className="ml-5 mt-5">
            <h1 className="text-textblack font-bold text-2xl">
              Outras atividades em andamento
            </h1>

            <div className="flex flex-row gap-8">
              <UseMiniCard />
              
              <UseMiniCard />
            </div>
          </div>
        </div>

        <h1 className="ml-5 mt-0 text-2xl text-red text font-bold">
          Colaboradores ativos
        </h1>

        <div className="flex flex-col">
          <div className="flex flex-row gap-4">
            <UseCard />

            <UseCard />

            <UseCard />
          </div>

          <div className="flex flex-row gap-4">
            <UseCard />

            <UseCard />

            <UseCard />
          </div>
        </div>

        <div className="flex flex-row justify-center relative">
          <div className="flex-row flex gap-20 ml-20 mt-2 absolute left-0 ">

            <div className="text-irongray justify-items-center">
              <House size={45} />
              <span>Home</span>
            </div>

            <div className="text-irongray justify-items-center">
              <CircleUser size={45} />
              <span>Perfil</span>
            </div>

          </div>

          <div className="mt-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

      </div>
    </main>
  );
}

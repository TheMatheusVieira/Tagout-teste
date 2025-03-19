import { ChartTasksEx } from "@/components/ui/chart-tasks-ex";
import { ChartTotalBloqueios } from "@/components/ui/chartlockstotal";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Footer } from "@/components/useFooter";
import { IndicatorView } from "@/components/usePaginationB";
import { EventList } from "@/components/useTable";
import { ArrowRight } from "lucide-react";

export default function DashboardEnterprise() {
  return (
    <main className="flex flex-col h-screen">
      <div>
        <Header />
        <Sidebar />

        <div className="flex flex-col w-full">
          <span className="text-4xl text-textblack text ml-10 font-bold m-8">
            TAGOUT
          </span>

          <div className="flex flex-row">
            <div className="flex flex-row w-150 justify-between ml-25 items-center">
              <div className="flex flex-col font-bold gap-5 justify-center items-center text-center">
                <div className="w-50">
                  <h1>ATIVOS BLOQUEADOS ATUALMENTE</h1>
                  <span className="text-6xl">12</span>
                </div>

                <div className="w-50">
                  <h1>COLABORADORES EM ATIVIDADE</h1>
                  <span className="text-6xl">190</span>
                </div>
              </div>

              <div className="h-full w-full ml-30">
                <ChartTotalBloqueios />
              </div>
            </div>

    <div className="flex flex-col">
            <div className="w-150 ml-60 mt-15 relative bg-amber-100 ">
              <h1 className="text-lg flex items-center font-bold">
                Todas manutenções em andamento
              </h1>

              <div className="absolute flex w-150">
                <EventList />

                <a href="/" className="text-red">
                  <ArrowRight />
                </a>
              </div>
            </div>

{/* Terminei aqui */}
            <div className="w-80">
            <IndicatorView />
            </div>

    </div>

        </div>

          <div className="w-150 ml-25 mt-10 font-bold flex flex-row justify-between">
            <h1 className="text-lg flex items-center">
              Quantidade de tarefas em execução
            </h1>
            <span className="text-4xl">5</span>
          </div>

          <div className="h-50 w-150 mr-5 ml-25 justify-center items-center flex">
            <div className="w-[90%] mt-30">
              <ChartTasksEx />
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-auto">
        {/* //Linha ou pagination */}
        <div className="w-full h-1 bg-gray-100" />

        <div className="mt-5 mb-28">
          <Footer />
        </div>
      </div>
    </main>
  );
}

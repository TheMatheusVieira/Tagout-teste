import { ChartTasksEx } from "@/components/ui/chart-tasks-ex";
import { ChartTotalBloqueios } from "@/components/ui/chartlockstotal";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { TimePicker } from "@/components/ui/timepicker";
import { FilterSearch } from "@/components/useFilterSearch";
import { Footer } from "@/components/useFooter";
import { IndicatorView } from "@/components/usePaginationB";
import { EventList } from "@/components/useTable";
import { ArrowDownUp, ArrowRight } from "lucide-react";

export default function DashboardEnterprise() {
  return (
    <main className="flex flex-col h-screen">
      <div>
        <Header />
        <Sidebar />

        <div className="flex flex-col w-full">

         
          <span className="text-4xl text-textblack text ml-15 font-bold m-8">
            TAGOUT
          
          </span>

          <div className="absolute m-8 ml-120 flex-row flex">
          <TimePicker/>

          <ArrowDownUp className="size-5 mt-3 ml-4"/>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row w-150 justify-between ml-30 items-center">
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
            <div className="w-150 ml-60 mt-20 relative">
              <h1 className="text-lg flex items-center font-bold">
                Todas manutenções em andamento   
                <FilterSearch/>
              </h1>

            

              <div className="absolute flex justify-center w-150">
                <EventList />

                {/* <a href="/" className="text-red">
                  <ArrowRight />
                </a> */}


                <div className="w-80 h-8 absolute bottom-0">
            <IndicatorView />
            </div>
            
              </div>
            </div>


           

    </div>

        </div>

          <div className="w-150 ml-30 mt-10 font-bold flex flex-row justify-between">
            <h1 className="text-lg flex items-center">
              Quantidade de tarefas em execução
            </h1>
            <span className="text-4xl">5</span>
          </div>

          <div className="h-50 w-150 mr-5 ml-30 justify-center items-center flex">
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

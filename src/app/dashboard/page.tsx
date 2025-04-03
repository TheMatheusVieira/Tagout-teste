"use client";
import { useState } from "react";

import { ChartTasksEx } from "@/components/ui/chart-tasks-ex";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { TimePicker } from "@/components/ui/timepicker";
import { FilterSearch } from "@/components/useFilterSearch";
import { Footer } from "@/components/useFooter";
import { IndicatorView } from "@/components/usePaginationB";

import { ArrowRight } from "lucide-react";
import { Dashboard } from "@/components/useDashboard";
import { DashFilter } from "@/components/dropDashFilter";
import { EventListWithFilter } from "@/components/useTable";

export default function DashboardEnterprise() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <main className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <Sidebar isOpen={isSidebarOpen} />

      <div className="flex flex-col w-full">
        <span className="text-4xl text-textblack text ml-20 font-bold m-8">
          TAGOUT
        </span>

        {/* FILTROS DO DASHBOARD DA EMPRESA */}
        <div className="absolute m-8 ml-110 flex-row flex">
          <TimePicker />
          <DashFilter />
        </div>

        {/* DASHBOARD DE VISÃO GERAL DA EMPRESA */}
        <div className="flex flex-row">
          <div className="flex flex-col">
            <Dashboard />

            {/* PARTE INFERIOR DASHBOARD - GRÁFICOS DE COLUNA */}
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

          {/* LISTA DE ATIVIDADES EM ANDAMENTO */}
          <div className="flex flex-col">
            <div className="w-150 ml-60 mt-20 relative">
              

             
                <EventListWithFilter />

                <a href="/" className="text-red">
                  <ArrowRight />
                </a>
                <div className="w-80 h-8 absolute bottom-0">
                  <IndicatorView />
                </div>
           
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

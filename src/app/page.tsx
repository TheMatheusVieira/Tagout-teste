"use client";
import { useState } from "react";

import { ChartTask } from "@/components/ui/chartask";
import { ChartBatery } from "@/components/ui/chartbatery";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { UseCard, UseMiniCard } from "../components/useCard";
import { Footer } from "@/components/useFooter";
import { TaskBlock } from "@/components/useTaskBlock";
import { PaginationComponent } from "@/components/usePagination";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [userImage, setUserImage] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="flex flex-col h-screen">
        <div>
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

          <Sidebar isOpen={isSidebarOpen} userImage={userImage} />

          <div className="flex flex-row gap-5 w-full ">
            {/* INFORMAÇÕES DE MANUTENÇÃO + BOTÃO  ACOMPANHAR */}
            <div className="ml-5">
              <TaskBlock />
            </div>

            <div className="mt-8 ml-10">
              <div className="bg-red h-35 w-0.5 flex" />
            </div>

            {/* GRÁFICOS BATERIA E PORCENTAGEM DE CONCLUSÃO */}
            <div className="ml-12 h-50 mt-3 flex flex-row gap-5 mr-10">
              <ChartTask />
              <ChartBatery />
            </div>

            <div className="ml-10 mt-5">
              <h1 className="text-textblack font-bold text-2xl">
                Outras atividades em andamento
              </h1>

              {/* OUTRAS ATIVIDADES RECENTES */}
              <div className="flex flex-row gap-8">
                <UseMiniCard />
                <UseMiniCard />
              </div>
            </div>
          </div>

          <h1 className="ml-10 mt-0 text-2xl text-red text font-bold">
            Colaboradores ativos
          </h1>

          {/* CARDS LINHA SUPERIOR */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row gap-8">
              <UseCard />
              <UseCard />
              <UseCard />
            </div>

            {/* CARDS LINHA INFERIOR */}
            <div className="flex flex-row gap-8">
              <UseCard />
              <UseCard />
              <UseCard />
            </div>
          </div>

          <div className="flex flex-row justify-center relative mt-1.5">
            <Footer />

            <div className="mt-4">
              <PaginationComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/useFooter";
import Sidebar from "@/components/ui/sidebar";
import { Info, Pause } from "lucide-react";
import { GraphColabAtivos } from "@/components/useColabGraph";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CurrentTask } from "@/components/currentTask";
import { CurrentInfos } from "@/components/currentInfos";

import ModalInfos from "@/components/ModalInfos";

export default function viewTask() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userImage, setUserImage] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <div>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <Sidebar isOpen={isSidebarOpen} userImage={userImage} />

        {/* TÍTULO + INFOS + PAUSE */}
        <div className="flex flex-row m-5">
          <h1 className=" text-2xl text-red text font-bold ml-5">
            Monitoramento de atividade
          </h1>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded duration-300 hover:text-red ml-10 hover:cursor-pointer"
          >
            <Info size="24" className="mt-1.5" />
          </button>
          <Pause size="24" className="mt-1.5 ml-5" />
        </div>

        <div className="flex flex-row gap-10 ml-15">
          {/* INFORMAÇÕES DE ATIVIDIDADE */}
          <div className="flex flex-col mt-8">
            <CurrentInfos />

            {/* GRÁFICO DAS ÁREAS DE ATUAÇÃO */}
            <div className="ml-3">
              <GraphColabAtivos />
            </div>
          </div>

          <div className="ml-2">
            {/* QUADRO DA MANUTENÇÃO ATUAL */}
            <CurrentTask />

            <div className="flex justify-between m-5">
              <div>
                {/* STATUS DA MANUTENÇÃO ATUAL */}
                <span className="ml-6 text-xl">Status da atividade:</span>
                <span className="text-green font-bold text-xl">Ativa</span>
              </div>
              {/* BOTÃO CONCLUIR TAREFA/ATIVIDADE */}
              <Button className="rounded-sm bg-red">CONCLUIR ATIVIDADE</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red h-80 w-2.5 rounded-t-md m-0 flex right-0 absolute bottom-70 [clip-path:polygon(0%_0%,100%_0%,100%_100%,10%_75%,0%_70%)]" />

      <div className="mt-auto">
        <div className="w-full h-1 bg-gray-100" />

        <div className="mt-5 mb-28">
          <Footer />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <ModalInfos onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </main>
  );
}

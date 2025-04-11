import Image from "next/image";

import Travamento from "@/assets/extravamento.svg";

import ModalHistTask from "./ModalHist";
import { useState } from "react";

export function HistLine() {
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<div   
    className="gap-5 ml-5"
    onClick={() => setIsModalOpen(true)}
    >
      <div className="flex flex-row">
        <div className="w-18 h-16 overflow-hidden rounded-md mr-5 mt-2.5">
          <Image
            src={Travamento}
            alt="Imagem do equipamento"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl text-irongray font-semibold">
            Painel elétrico X
          </h1>

          <div className="flex flex-row gap-25">
            <div className="flex flex-col">
              <span>Líder</span>{" "}
              <span className="text-textblack font-semibold">
                Matheus Vieira
              </span>
            </div>

            <div className="flex flex-col">
              <span>Empresa</span>{" "}
              <span className="text-textblack font-semibold">Tagout</span>
            </div>

            <div className="flex flex-col">
              <span className="text-green mt-1 font-semibold">Concluída</span>
              <span className="text-textblack font-semibold">22 Jan 2025</span>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center">
                <ModalHistTask onClose={() => setIsModalOpen(false)} />
              </div>
            )}
    </div>
  );
}

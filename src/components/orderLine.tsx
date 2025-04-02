import { useState } from "react";
import { Ellipsis } from "lucide-react";
import ModalOrdens from "./ModalOrdens";


export function OrderLine() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="gap-5 ml-10">
      <div className="flex flex-row">
        <h1 className="text-2xl text-irongray font-bold">Painel elétrico X</h1>
        <span className="text-red ml-60 mt-1">OS pendente !</span>
      </div>
      <div className="flex flex-row gap-10">
        <div>
          <span>Status:</span>{" "}
          <span className="text-textblack font-semibold">Em andamento</span>
        </div>
        <div>
          <span>Data de início:</span>{" "}
          <span className="text-textblack font-semibold">22/01/2025</span>
        </div>
        <div>
          <span>Horário de início:</span>{" "}
          <span className="text-textblack font-semibold">10:54</span>
        </div>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
            onClick={() => setIsModalOpen(true)}
            className="rounded duration-300 hover:text-red hover:cursor-pointer"
          >
        <Ellipsis />
        </button>
      </div>
       {isModalOpen && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center">
                <ModalOrdens onClose={() => setIsModalOpen(false)} />
              </div>
            )}
    </div>
  );
}

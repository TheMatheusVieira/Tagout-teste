import { ArrowLeft, ArrowRight, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { IndicatorView } from "./usePaginationB";

interface ModalProps {
  onClose: () => void;
}

export default function ModalColabAtivos({ onClose }: ModalProps) {
  // Fecha a modal ao pressionar a tecla "Esc"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
<div className="fixed inset-0 flex items-center justify-center bg-black/50">
<div className="bg-white p-6 rounded-sm shadow-lg w-96 relative">

<h2 className="text-xl font-bold text-left">Colaboradores conectados</h2>
<h1>Painel elétrico X</h1>
  {/* Botão de fechar modal */}

<button
type="button"
    onClick={onClose}
    className="absolute top-2 right-2 text-gray-500"
  >
    &times;
  </button>

  <div className="mt-2 space-y-3">

<div className="w-[30%] h-0.5 bg-red"/>
  <div className="m-2">
              <h1 className="block text-sm font-medium text-gray-700">Líder</h1>
              <div className="flex flex-col sm:flex-row">
                <span className="w-full">José Santos</span>
              </div>
            </div>

<div className="ml-15 w-[30%] h-0.5 bg-red"/>

<div className="flex flex-row justify-between m-2">

  <div className="flex flex-col gap-4">
    <div>
              <h1 className="block text-sm font-medium text-gray-700">Colaborador</h1>
              <div className="flex flex-col sm:flex-row">
                <span className="w-full">José Santos</span>
              </div>
    </div>

    <div>
              <h1 className="block text-sm font-medium text-gray-700">Colaborador</h1>
              <div className="flex flex-col sm:flex-row">
                <span className="w-full">José Santos</span>
              </div>
    </div>            
    
            </div>

  <div className="flex flex-col gap-4">
    <div>
              <h1 className="block text-sm font-medium text-gray-700">Atuação</h1>
              <div className="flex flex-col sm:flex-row">
                <span className="w-full">Mecânica</span>
                  </div>
    </div>

    <div>
              <h1 className="block text-sm font-medium text-gray-700">Atuação</h1>
              <div className="flex flex-col sm:flex-row">
                <span className="w-full">Mecânica</span>
              </div>
            </div>
    </div>


            <div className="flex flex-col gap-4">
    <div>
              <h1 className="block text-sm font-medium text-gray-700">Status</h1>
              <div className="flex flex-col sm:flex-row">
                <span className="w-full">Atuando</span>
              </div>
    </div>

    <div>
              <h1 className="block text-sm font-medium text-gray-700">Status</h1>
              <div className="flex flex-col sm:flex-row">
                <span className="w-full">Atuando</span>
              </div>
    </div>

              </div>
            </div>


  
  </div>

<div className="mt-5 flex text-red items-center">
  <ArrowLeft/>
<IndicatorView/>
<ArrowRight/>
</div>
</div>
</div>
  );
}

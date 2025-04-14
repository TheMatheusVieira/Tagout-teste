import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { IndicatorView } from "./usePaginationB";

interface ModalProps {
  onClose: () => void;
}

export default function ModalHistTask({ onClose }: ModalProps) {
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
      <div className="bg-white rounded-sm shadow-lg w-96 relative">
        <div className="p-6">
          <div className="flex flex-row justify-between">
            <h2 className="text-xl font-bold text-left">Histórico</h2>
            <span className="text-xs">22 Jan 2025</span>
          </div>

          <div className="top-10 flex flex-row justify-between font-semibold text-red text-sm">
            <h1>GERAR RELATÓRIO</h1>
            {/* Botão de fechar modal */}

            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={onClose}
              className="hover:cursor-pointer hover:text-red-900"
            >
              SAIR
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between ml-0.5 mr-0.5">
          <div className="flex flex-col gap-1 w-full">
            <div className="border p-2 rounded-sm">
              <div className="flex flex-row justify-between w-full text-sm items-center gap-2">
                <h1 className="block text-sm font-medium text-textblack">
                  Colaborador 1
                </h1>
                <span>20/01/2021</span>
              </div>

              <div className="flex flex-row justify-between w-full text-sm items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="w-full">O líder iniciou a atividade</span>
                <span>15:01</span>
              </div>
            </div>

            <div className="border p-2 rounded-sm">
              <div className="flex flex-row justify-between w-full text-sm items-center gap-2">
                <h1 className="block text-sm font-medium text-textblack">
                  Colaborador 2
                </h1>
                <span>20/01/2021</span>
              </div>

              <div className="flex flex-row justify-between w-full text-sm items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="w-full">Pausou a atividade</span>
                <span>15:01</span>
              </div>
            </div>
          </div>
        </div>

        <div className="m-4 items-center">
          <div className="mt-5 flex text-red items-center">
            <ArrowLeft />
            <IndicatorView />
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

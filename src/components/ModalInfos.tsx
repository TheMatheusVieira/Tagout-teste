import { useEffect } from "react";
import Image from "next/image";

import ImgCaixa from "@/assets/Caixa de travamento TagOut.png";

interface ModalProps {
  onClose: () => void;
}

export default function ModalInfos({ onClose }: ModalProps) {
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
      <div className="bg-gray-100 p-6 rounded-sm shadow-lg w-full max-w-lg mx-4 md:w-1/2 lg:w-1/3 relative">
        <h2 className="text-xl font-bold text-left">Painel elétrico X</h2>
        <h3 className="text-lg font-semibold text-left text-gray-700">
          Manutenção em painel elétrico
        </h3>

        {/* Botão de fechar modal */}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          &times;
        </button>

        <div className="mt-6 space-y-3 flex flex-col sm:flex-row">
          <div className="flex flex-col gap-8 w-full sm:w-2/5">
            <div>
              <h1 className="block text-sm font-medium text-gray-700">
                Caixas de bloqueio
              </h1>
              <span className="w-full">XXXXXX, XXXXXX</span>
            </div>

            <div>
              <h1 className="block text-sm font-medium text-gray-700">
                Localização
              </h1>
              <span className="w-full">XXXX</span>
            </div>

            <div>
              <h1 className="block text-sm font-medium text-gray-700">Líder</h1>
              <div className="flex flex-col sm:flex-row">
                <span className="w-full">José Santos</span>
                <a
                  href="/"
                  className="font-bold underline sm:absolute sm:right-4 mt-2 sm:mt-0"
                >
                  VISUALIZAR PARTICIPANTES
                </a>
              </div>
            </div>
          </div>

          <div className="flex w-full sm:w-3/5 relative mt-8 sm:mt-0">
            <div className="flex flex-col gap-8 w-full">
              <div>
                <h1 className="block text-sm font-medium text-gray-700">
                  Máquina
                </h1>
                <span className="w-full">142</span>
              </div>

              <div>
                <h1 className="block text-sm font-medium text-gray-700">
                  Setor
                </h1>
                <span className="w-full">14-C</span>
              </div>
            </div>

            <div className="bg-gray-50/30 rounded-md absolute w-40 h-50 sm:w-40 sm:h-50 right-0 bottom-15 flex items-center justify-center">
              <Image
                src={ImgCaixa}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <div className="fixed inset-0 flex items-center justify-center bg-black/50">
<div className="bg-gray-100 p-6 rounded-sm shadow-lg w-[30%] relative">
  <h2 className="text-xl font-bold text-left">Painel elétrico X</h2>
  <h3 className="text-lg font-semibold text-left text-gray-700">
    Manutenção em painel elétrico
  </h3>

  {/* Botão de fechar modal */
/* <button
    onClick={onClose}
    className="absolute top-2 right-2 text-gray-500"
  >
    &times;
  </button>

  <div className="mt-6 space-y-3 flex flex-row ">
    <div className="flex flex-col gap-8 w-[40%] ">
   
   <div>
        <h1 className="block text-sm font-medium text-gray-700">
            Caixas de bloqueio
        </h1>
        <span className="w-full">XXXXXX, XXXXXX</span>
    </div>

    <div>
        <h1 className="block text-sm font-medium text-gray-700">
            Localização
        </h1>
        <span className="w-full">XXXX</span>
    </div>

    <div>
        <h1 className="block text-sm font-medium text-gray-700">
            Líder
        </h1>
        <div className="flex flex-row">
        <span className="w-full">José Santos</span>
        <a href="/" className="font-bold underline flex absolute right-10">VISUALIZAR PARTICIPANTES</a>
        </div>
    </div>

</div>

<div className="flex w-[70%] relative ">
    <div className="flex flex-col gap-8">
     <div>
        <h1 className="block text-sm font-medium text-gray-700">
            Máquina
        </h1>
        <span className="w-full">142</span>
     </div>

      <div>
        <h1 className="block text-sm font-medium text-gray-700">
            Setor
        </h1>
        <span className="w-full">14-C</span>
      </div>

    </div>

<div className="bg-gray-50/90 rounded-md absolute w-40 h-50 right-5 items-center flex bottom-15">
    <Image src={ImgCaixa} alt="" className=""/>
</div>

    </div>

  </div> */

// </div>
// </div>

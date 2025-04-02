import { Trash2 } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
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
<div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
   

  {/* Botão de fechar modal */}
  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
    onClick={onClose}
    className="absolute top-2 right-2 text-gray-500"
  >
    &times;
  </button>

  <div className="mt-2 space-y-3">
    <div>
      {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label className="block text-sm font-medium text-textblack">
Nome da atividade
      </label>
      <input type="text" className="w-full border p-2 rounded-md" value="Painel elétrico X" readOnly />
    </div>
    <div>
      {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label className="block text-sm font-medium text-textblack">Ordem de serviço</label>
      <input type="text" className="w-full border p-2 rounded-md " value="1739873973917" readOnly />
    </div>

<div className="flex flex-row gap-10">
    <div>  
<h1 className="block text-sm font-medium text-textblack">Setor</h1>
     <span className="text-irongray">Logística 2</span>
    </div>

    <div>  
<h1 className="block text-sm font-medium text-textblack">Máquina</h1>
     <span className="text-irongray">142</span>
    </div>

    <div>  
<h1 className="block text-sm font-medium text-textblack">Cadeado</h1>
     <span className="text-irongray">XXXXX</span>
    </div>
    </div>

    <div className="flex space-x-4">
      <div className="flex-1">
        <span>Manutenção corretiva - Máquina</span>
      </div>

      <div className="flex p-1 flex-row border items-center border-red rounded-md gap-2 m-1 text-red hover:text-red-900">
<button type="button" className="font-semibold text-lg hover:cursor-pointer">Excluir ordem</button>
    <Trash2 className=""/>
      </div>

    </div>
  </div>

<div className="mt-5 text-red">
    <span>Insira o código de sua ordem de serviço para que possa finalizar sua atividade!</span>
</div>
</div>
</div>
  );
}

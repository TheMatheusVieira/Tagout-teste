import { useEffect } from "react";
import { Label } from "recharts";

interface ModalProps {
  onClose: () => void;
}

export default function ModalEditUser({ onClose }: ModalProps) {
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
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Botão de fechar modal */}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          &times;
        </button>

        <div className="space-y-3">
          {/* NOME COLABORADOR */}
          <div>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="block text-sm font-medium text-gray-700">
              Nome do colaborador
            </label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value="Colaborador 1"
              readOnly
            />
          </div>

          <div className="flex space-x-4">
            {/* FREQUÊNCIA DO COLABORADOR */}
            <div className="flex-1">
              <label
                htmlFor="idioma"
                className="block text-sm font-medium text-gray-700"
              >
                Situação
              </label>
              <select id="idioma" className="w-full border p-2 rounded">
                <option value=""> </option>
                <option value="">Ativo</option>
                <option value="">Inativo</option>
              </select>
            </div>

            {/* EMPRESA DO COLABORADOR */}
            <div className="flex-1">
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
              <label className="block text-sm font-medium text-gray-700">
                Empresa
              </label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value="TagOut"
                readOnly
              />
            </div>
          </div>

          {/* E-MAIL DO COLABORADOR */}
          <div>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="block text-sm font-medium text-gray-700">
              E-mail do convidado
            </label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              value="email@gmail.com"
              readOnly
            />
          </div>

          <div className="flex space-x-4">

            {/* FUNÇÃO */}
            <div className="flex-1">
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
              <label className="block text-sm font-medium text-gray-700">
                Função
              </label>
              <select className="w-full border p-2 rounded">
                <option>Operador</option>
              </select>
            </div>

            {/* SENHA */}
            <div className="flex-1">
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
              <label className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <select className="w-full border p-2 rounded">
                <option>*****</option>
              </select>
            </div>
          </div>
        </div>

    <div className="flex flex-row gap-4 items-center w-full justify-between ">
        <div className="mt-4 w-[40%] flex justify-center border border-red rounded-sm gap-2 m-1 text-red hover:text-red-900">
<button type="button" className=" font-semibold text-lg hover:cursor-pointer">Excluir ordem</button>
      </div>

<div className="flex gap-3">
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={onClose}
          className="mt-3 text-red font-semibold hover:text-red-900 hover:cursor-pointer"
        >CANCELAR</button>

{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={onClose}
          className="mt-3 text-red font-semibold hover:text-red-900 hover:cursor-pointer"
        >SALVAR</button>
</div>
</div>
      </div>
    </div>
  );
}

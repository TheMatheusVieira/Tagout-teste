import { useState } from "react";

interface AccessModalProps {
  onClose: () => void;
}

export default function AccessModal({ onClose }: AccessModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose(); // Chama a função para fechar a modal na página
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          <h2 className="text-xl font-bold text-center">Gerar acesso</h2>
          <h3 className="text-lg font-semibold text-center text-gray-700">
            Prestador de serviço
          </h3>

          {/* Botão de fechar modal */}
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500"
          >
            &times;
          </button>

          <div className="mt-4 space-y-3">
            <div>
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label className="block text-sm font-medium text-gray-700">
                Convidado
              </label>
              <input type="text" className="w-full border p-2 rounded" value="Matheus Vieira" readOnly />
            </div>
            <div>
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label className="block text-sm font-medium text-gray-700">CPF</label>
              <input type="text" className="w-full border p-2 rounded" value="123.456.789-10" readOnly />
            </div>
            <div>
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label className="block text-sm font-medium text-gray-700">E-mail de convite</label>
              <input type="email" className="w-full border p-2 rounded" value="email@gmail.com" readOnly />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label className="block text-sm font-medium text-gray-700">Duração</label>
                <select className="w-full border p-2 rounded">
                  <option>2 dias</option>
                </select>
              </div>
              <div className="flex-1">
                {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label className="block text-sm font-medium text-gray-700">Empresa</label>
                <select className="w-full border p-2 rounded">
                  <option>Tagent</option>
                </select>
              </div>
            </div>
          </div>

          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button className="mt-4 w-full bg-red-600 text-white py-2 rounded text-lg font-semibold hover:bg-red-700">
            GERAR ACESSO
          </button>
        </div>
      </div>
    )
  );
}

import { ListChecks, SquarePen } from "lucide-react";
import { useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void;
}

export default function ModalEditUser({ onClose }: ModalProps) {
  const [showPermissions, setShowPermissions] = useState(false);

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
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg z-[9999] shadow-lg w-96 relative">
        {/* Botão de fechar modal */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          &times;
        </button>

        {/* Botão de permissões */}
        <div className="absolute -left-8 top-2 z-[9998] flex flex-col gap-0.5">
          <button
            type="button"
            onClick={() => setShowPermissions(!showPermissions)}
            disabled={showPermissions}
            className={`flex justify-center items-center text-white w-8 h-10 rounded-l-md transition-colors ${
              showPermissions ? 'bg-gray-200' : 'bg-red hover:bg-red-900'
            }`}
          >
            <ListChecks size={25} />
          </button>


{/* Botão de edição (visível apenas quando em permissões) */}
{showPermissions && (
            <button
              type="button"
              onClick={() => setShowPermissions(false)}
              className="flex justify-center items-center text-white bg-red w-8 h-10 rounded-l-md hover:bg-red-900 transition-colors"
            >
              <SquarePen size={25} />
            </button>
          )}
          
        </div>

        {showPermissions ? (
          /* Conteúdo de Permissões */
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-4">Permissões</h2>

            {[
              "Deve registrar os pontos de bloqueios",
              "Permitir troca presencial de líderes",
              "Acesso total de administrador",
              "Pode adicionar ou remover colaboradores",
              "Pode adicionar novas atividades",
            ].map((permission, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm">{permission}</span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name={`permission-${index}`}
                      className="h-4 w-4 text-red"
                    />
                    SIM
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name={`permission-${index}`}
                      className="h-4 w-4 text-red"
                    />
                    NÃO
                  </label>
                </div>
              </div>
            ))}

            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="text-red font-semibold hover:text-red-900 hover:cursor-pointer"
              >
                CANCELAR
              </button>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button
                onClick={() => setShowPermissions(false)}
                className="text-red font-semibold hover:text-red-900 hover:cursor-pointer"
              >
                CONTINUAR
              </button>
            </div>
          </div>
        ) : (
          /* Conteúdo original de edição do usuário */
          <>
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
                {/* SITUAÇÃO */}
                <div className="flex-1">
                  {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                  <label className="block text-sm font-medium text-gray-700">
                    Situação
                  </label>
                  <select className="w-full border p-2 rounded">
                    <option value=""> </option>
                    <option value="">Ativo</option>
                    <option value="">Inativo</option>
                  </select>
                </div>

                {/* EMPRESA */}
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

              {/* E-MAIL */}
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

            <div className="flex flex-row gap-4 items-center w-full justify-between mt-4">
              <div className="w-[40%] flex justify-center border border-red rounded-sm gap-2 m-1 text-red hover:border-red-900 hover:text-red-900">
                <button
                  type="button"
                  className="font-semibold text-lg hover:cursor-pointer"
                >
                  Excluir usuário
                </button>
              </div>

              <div className="flex gap-3">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  onClick={onClose}
                  className="text-red font-semibold hover:cursor-pointer hover:text-red-900"
                >
                  CANCELAR
                </button>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  onClick={onClose}
                  className="text-red font-semibold hover:cursor-pointer hover:text-red-900"
                >
                  SALVAR
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

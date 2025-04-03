"use client";
import { useState } from "react";
import { ArrowDownUp } from "lucide-react"; // ou seu ícone equivalente

export function DashFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Mais recente");

  const options = [
    "Geral",
    "Mais recente",
    "Manhã (06:00 - 12:00)",
    "Tarde (12:00 - 18:00)",
    "Noite (18:00 - 00:00)",
    "Madrugada (00:00 - 06:00)",
  ];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Adicione aqui a lógica de ordenação
    console.log("Ordenar por:", option);
  };

  return (
    <div className="relative ml-4">
      {/* Botão do dropdown */}
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <ArrowDownUp className="size-5" />
        <span className="text-sm hidden md:inline-block">{selectedOption}</span>
      </button>

      {/* Lista de opções */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 border border-gray-200 dark:border-gray-700">
          {options.map((option) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 text-sm cursor-pointer ${
                selectedOption === option
                  ? "bg-bbrose dark:bg-blue-900/50 text-red dark:text-blue-300"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

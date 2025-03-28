"use client";

import { useState } from "react";
import Modal from "@/components/Modal";

export default function Teste() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Minha Página</h1>

      {/* Botão para abrir a modal */}
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Abrir Modal
      </button>

      {/* Exibe a modal apenas quando isModalOpen for true */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

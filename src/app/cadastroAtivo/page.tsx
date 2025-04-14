"use client";
import { useState } from "react";

import { ConjCadastrar } from "@/components/useRegister";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Footer } from "@/components/useFooter";
import { InputAtivoMedio } from "@/components/useInput";

export default function CadastrarAtivo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [userImage, setUserImage] = useState<string | null>(null);

  return (
    <main className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <Sidebar isOpen={isSidebarOpen} userImage={userImage} />

        <div className="flex-1 flex flex-row w-full justify-center items-center">
          <div className="flex flex-col m-5">
            <h1 className="flex justify-center text-3xl text-red text font-medium mt-2 mb-5">
              Cadastro de ativo
            </h1>

            <div className="flex flex-row gap-10">
              <InputAtivoMedio label="Identificação da máquina *" />
              <InputAtivoMedio label="ID da máquina *" />
            </div>

            <div className="flex flex-row gap-10">
              <InputAtivoMedio label="Tipo de máquina *" />
              <InputAtivoMedio label="Localização / Setor *" />
            </div>

            <div className="flex flex-row gap-10">
              <InputAtivoMedio label="Status atual *" />
              <InputAtivoMedio label="Fabricante" />
            </div>

            <div className="flex flex-row mt-10 mb-8">
              <div className="w-[50%] h-1 bg-red" />
              <div className="w-[50%] h-1 bg-gray-100" />
            </div>

            <div>
              <InputAtivoMedio label="Responsável pelo ativo" size="resp" />
              <InputAtivoMedio label="Notas adicionais" size="note" />
            </div>

            <ConjCadastrar />
          </div>
        </div>
      </div>

      <div className="mt-auto">
        {/* //Linha ou pagination */}
        <div className="w-full h-1 bg-gray-100" />

        <div className="mt-5 mb-28">
          <Footer />
        </div>
      </div>
    </main>
  );
}

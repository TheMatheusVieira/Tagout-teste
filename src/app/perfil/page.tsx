"use client";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { CardUser } from "@/components/useCard";
import { Footer } from "@/components/useFooter";
import {
  InputPerfilCidade,
  InputPerfilEmail,
  InputPerfilEmpresa,
  InputPerfilIdioma,
  InputPerfilPais,
  InputPerfilSenha,
} from "@/components/useInput";
import { useState } from "react";

export default function Perfil() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [userImage, setUserImage] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="flex flex-col h-screen">
      <div>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <Sidebar isOpen={isSidebarOpen} userImage={userImage} />

        <div className="flex flex-row gap-25 w-full">
          <CardUser onImageUpload={setUserImage} />

          <div className="mt-20">
            <div className="flex items-center flex-row gap-20 mb-10">
              <InputPerfilEmail />
              <InputPerfilSenha />
            </div>

            <div className="flex items-center flex-row gap-20 mb-10">
              <InputPerfilPais />
              <InputPerfilCidade />
            </div>

            <div className="flex items-center flex-row gap-20">
              <InputPerfilEmpresa />
              <InputPerfilIdioma />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        {/* BOTÃO SALVAR INFORMAÇÕES */}
        <div className="flex right-35 bottom-35 absolute ">
          <Button>SALVAR</Button>
        </div>

        <div className="w-full h-1 bg-gray-100" />

        <div className="mt-5 mb-28">
          <Footer />
        </div>
      </div>
    </main>
  );
}

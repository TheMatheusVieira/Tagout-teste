"use client";
import { useState } from "react";

import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Footer } from "@/components/useFooter";

import Image from "next/image";

import logo from "@/assets/logo.svg";
import { MapPin, PhoneCall, Smartphone } from "lucide-react";

export default function CadastrarSetor() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <main className="flex flex-col h-screen">
      <div>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex flex-row w-full justify-center items-center">
          <div className="flex flex-col m-5 items-center">
            <Image src={logo} alt="logo TAGOUT" className="w-80 mt-15 mb-8" />

            <div className="flex flex-col gap-6 font-bold text-lg items-stretch">
              <div className="flex flex-row gap-5">
                <PhoneCall />
                <h1>+55 19 3500 8210</h1>
              </div>

              <div className="flex flex-row gap-5">
                <Smartphone />
                {/*  whatsapp */}
                <h1>+55 19 99407 3970</h1>
              </div>

              <div className="flex flex-row gap-5">
                <MapPin />
                <h1>
                  Rua José Gallo, 258
                  <br />
                  Vista Alegre - Vinhedo/SP
                  <br />
                  Brasil - CEP 13285-332
                </h1>
              </div>
            </div>

            <a
              href="/"
              className="mt-6 pb-1 w-50 h-10 border-red border text-center justify-center items-center align-center flex rounded-sm text-red text-2xl font-semibold"
            >
              Acessar tutorial
            </a>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <p className="m-5 text-sm">
          TAGOUT TREINAMENTO E COMERCIO DE EQUIPAMENTOS DE
          <br />
          PROTECAO DE SEGURANCA
          <br />
          INDUSTRIAL LTDA
          <br />
          14.600.552/0001-45
        </p>

        {/* //Linha ou pagination */}
        <div className="w-full h-1 bg-gray-100" />

        <div className="mt-5 mb-28">
          <Footer />
        </div>
      </div>
    </main>
  );
}

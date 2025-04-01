"use client"
import { ConjCadastrar } from "@/components/useRegister";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Footer } from "@/components/useFooter";
import { InputAtivoMedio, InputNovoColaborador } from "@/components/useInput";
import { useState } from "react";




export default function CadastrarAtivo() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
      <main className="flex flex-col h-screen">
        <div>
        <Header  
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}/>

          <Sidebar isOpen={isSidebarOpen}/>
  
      <div className="flex flex-col w-full justify-center items-center mt-5">
           
            <h1 className="flex justify-center text-3xl text-red text font-medium mb-2 mt-2">
               Cadastrar novo colaborador
              </h1>

            <div className="flex flex-row gap-40 m-5 items-start ">

    
              <div className="flex flex-col gap-2 mt-5">
                <InputAtivoMedio label="Nome completo *" size="lg"/>
                <InputAtivoMedio label="Empresa *" size="lg"/>
            
                <InputAtivoMedio label="Nível de acesso *" size="lg"/>
                <InputAtivoMedio label="Área de atuação *" size="lg"/>
              </div>

            
       <div className="flex flex-col gap-2 mt-5">
          <InputNovoColaborador label="Email *" size="lg"/>
          <InputNovoColaborador label="Senha *" size="lg" />


          <ConjCadastrar/>

        </div> 



            </div>




          </div>

  
  
       
        </div>
  
    <div className="mt-auto">
  
  
        {/* //Linha ou pagination */}
        <div className="w-full h-1 bg-gray-100"/>
  
  
        <div className="mt-5 mb-28">
            <Footer />
        </div>
  
    </div>
      </main>
    );
  }
  
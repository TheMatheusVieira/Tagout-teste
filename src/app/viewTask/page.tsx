"use client"
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/useFooter";
import Sidebar from "@/components/ui/sidebar";
import { Clock10, Info, LockKeyhole, Pause } from "lucide-react";
import { GraphColabAtivos } from "@/components/useColabGraph";
import { Card } from "@/components/ui/card";

import Image from "next/image";
import extravamento from "@/assets/extravamento.svg"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function viewTask() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
      return (
<main>
    <div>
    <Header  
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}/>

          <Sidebar isOpen={isSidebarOpen}/>

        {/* TÍTULO + INFOS + PAUSE */}
        <div className="flex flex-row m-5">
            <h1 className=" text-2xl text-red text font-bold ml-5">
              Monitoramento de atividade
            </h1>
            <Info size="24" className="mt-1.5 ml-10"/>
            <Pause size="24" className="mt-1.5 ml-5"/>
        </div>


<div className="flex flex-row gap-10 ml-15">
        <div className="flex flex-col mt-8">

        <div className="flex flex-row gap-15 text-xl">
            <div className="flex flex-col gap-4">
            <span>Início da atividade: 11 / 12 / 24</span>
            <span>Código do cadeado: XXXXX</span>
            </div>

            <div className="flex flex-col gap-5">
            <span>Horário de início: 16:17</span>
            <span>Código da caixa: XXXXX</span>
            </div>
        </div>

<div className="ml-5">
            <GraphColabAtivos />
</div>
        </div>

    <div className="ml-2">
        <Card className="h-135 w-170 relative pt-4">
            <div className="m-4 mt-0">

            <div className="w-full h-16 bg-red rounded-t-md text-white font-bold text-2xl flex justify-center text-center items-center mb-2">
                <h1>MANUTENÇÃO:</h1>
                <span className="m-2">PAINEL ELÉTRICO X</span>
            </div>
                    
            <Image src={extravamento} alt={"Imagem da manutenção"} /> 

        <div className="mt-2">
            <div className="flex flex-row justify-between font-bold text-md">
                <span className="ml-1 text-lg">Meu tempo de bloqueio</span>
                <div>
                <div className="flex flex-row gap-5">
                <span className="text-2xl font-semibold">1:14:56</span>
                <div className="mt-1.5 mr-1">
                <Clock10/>
                </div>
                </div>
                </div>
            </div>

            <div className="flex flex-row justify-between font-bold text-md">
                <span className="ml-1 text-lg">Número de bloqueadores</span>
                <div className="flex flex-row gap-5">
                <span className="text-2xl font-semibold">17</span>
                <div className="mt-1.5 mr-1">
                <LockKeyhole/>
                </div>
                </div>
            </div>
            
        </div>
            </div>  
        </Card>
        <div className="flex justify-between m-5">
        <div> <span className="ml-6 text-xl">Status da atividade:</span> <span className="text-green font-bold text-xl">Ativa</span></div>
        <Button className="rounded-sm bg-red">CONCLUIR ATIVIDADE</Button>
        </div>
        
        </div>
    </div>
</div>

<div className="bg-red h-80 w-2.5 rounded-t-md m-0 flex right-0 absolute bottom-70 [clip-path:polygon(0%_0%,100%_0%,100%_100%,10%_75%,0%_70%)]"/>

<div className="mt-auto">

    <div className="w-full h-1 bg-gray-100"/>

     <div className="mt-5 mb-28">
          <Footer />
      </div>

</div>
    </main>
      );
}
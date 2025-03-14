import { Header } from "@/components/ui/header";
import { Footer } from "@/components/useFooter";
import Sidebar from "@/components/ui/sidebar";
import { Clock10, Info, LockKeyhole, Pause } from "lucide-react";
import { GraphColabAtivos } from "@/components/useColabGraph";
import { Card } from "@/components/ui/card";

import Image from "next/image";
import extravamento from "@/assets/extravamento.svg"
import { Button } from "@/components/ui/button";

export default function viewTask() {
      return (
<main>
    <div>
     <Header />
     <Sidebar />
     
    <div className="flex flex-row gap-5 w-full">

        <div className="flex flex-row m-5">
            <h1 className=" text-2xl text-red text font-bold">
              Monitoramento de atividade
            </h1>
            <Info size="24" className="mt-1.5 ml-10"/>
            <Pause size="24" className="mt-1.5 ml-5"/>
        </div>

    </div>
          
<div className="flex flex-row gap-5 ml-15 mt-8">
        <div className="flex flex-col">

        <div className="flex flex-row gap-15">
            <div className="flex flex-col gap-4">
            <span>Início da atividade: 11 / 12 / 24</span>
            <span>Código do cadeado: XXXXX</span>
            </div>

            <div className="flex flex-col gap-5">
            <span>Horário de início: 16:17</span>
            <span>Código da caixa: XXXXX</span>
            </div>
        </div>

            <GraphColabAtivos />
        </div>

    <div>
        <Card className="h-120">
            <div className="m-3 mt-0">

            <div className="w-full h-16 bg-red rounded-t-md text-white font-bold text-2xl flex justify-center text-center items-center mb-2">
                <h1>MANUTENÇÃO:</h1>
                <span className="m-2">PAINEL ELÉTRICO X</span>
            </div>
                    
            <Image src={extravamento} alt={"Imagem da manutenção"} /> 

            <div className="flex flex-row justify-between font-bold text-md">
                <span>Meu tempo de bloqueio</span>
                <span>1:14:56</span>
                <Clock10/>
            </div>

            <div className="flex flex-row justify-between font-bold text-md">
                <span>Número de bloqueadores</span>
                <span>17</span>
                <LockKeyhole/>
            </div>

            </div>  
        </Card>
        <div className="flex justify-between">
        <span>Status da atividade:</span> <span>Ativa</span>
        <Button>CONCLUIR ATIVIDADE</Button>
        </div>
    </div>

</div>



<div className="flex flex-row justify-center relative">
<Footer />
</div>

    </div>
</main>
      )
}
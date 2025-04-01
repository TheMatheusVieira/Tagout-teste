import Image from "next/image";
import { Card } from "./ui/card";
import { Clock10, LockKeyhole } from "lucide-react";

import extratravamento from "@/assets/extravamento.svg";

export function CurrentTask() {
  return (
    <Card className="h-135 w-170 relative pt-4">
      <div className="m-4 mt-0">
        <div className="w-full h-16 bg-red rounded-t-md text-white font-bold text-2xl flex justify-center text-center items-center mb-2">
          <h1>MANUTENÇÃO:</h1>
          <span className="m-2">PAINEL ELÉTRICO X</span>
        </div>

        <Image src={extratravamento} alt={"Imagem da manutenção"} />

        <div className="mt-2">
          <div className="flex flex-row justify-between font-bold text-md">
            <span className="ml-1 text-lg">Meu tempo de bloqueio</span>
            <div>
              <div className="flex flex-row gap-5">
                <span className="text-2xl font-semibold">1:14:56</span>
                <div className="mt-1.5 mr-1">
                  <Clock10 />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between font-bold text-md">
            <span className="ml-1 text-lg">Número de bloqueadores</span>
            <div className="flex flex-row gap-5">
              <span className="text-2xl font-semibold">17</span>
              <div className="mt-1.5 mr-1">
                <LockKeyhole />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

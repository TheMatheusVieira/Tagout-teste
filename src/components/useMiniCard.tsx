import { ArrowRight } from "lucide-react";
import { MiniCard, SmCardDescription, SmCardHeader, SmCardTitle } from "./ui/minicards";

export function UseMiniCard() {
  return (
    <MiniCard>
      <SmCardHeader>
        <SmCardTitle>Caixa de bloqueio</SmCardTitle>
        <SmCardDescription>123145213</SmCardDescription>

        <div className="flex flex-row mt-8 justify-between">
          <h1 className="text-red font-bold">Visualizar</h1>
          <ArrowRight size={24} className="text-red" />
        </div>
      </SmCardHeader>
    </MiniCard>
  );
}

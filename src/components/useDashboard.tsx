import { ChartTotalBloqueios } from "./ui/chartlockstotal";

export function Dashboard() {
  return (
    <div className="flex flex-row w-150 justify-between ml-30 items-center">
      <div className="flex flex-col font-bold gap-5 justify-center items-center text-center">
        <div className="w-50">
          <h1>ATIVOS BLOQUEADOS ATUALMENTE</h1>
          <span className="text-6xl">12</span>
        </div>

        <div className="w-50">
          <h1>COLABORADORES EM ATIVIDADE</h1>
          <span className="text-6xl">190</span>
        </div>
      </div>

      <div className="h-full w-full ml-30">
        <ChartTotalBloqueios />
      </div>
    </div>
  );
}

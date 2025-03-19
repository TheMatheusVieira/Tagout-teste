import { ChartTask } from "@/components/ui/chartask";
import { ChartBatery } from "@/components/ui/chartbatery";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { UseCard } from "../components/useCard";
import { UseMiniCard } from "@/components/useMiniCard";
import { Footer } from "@/components/useFooter";
import { TaskBlock } from "@/components/useTaskBlock";
import { PaginationComponent } from "@/components/usePagination";

export default function Home() {
  return (
    <main>
      <main className="flex flex-col h-screen">
        <div>
          <Header />
          <Sidebar />

          <div className="flex flex-row gap-5 w-full">
            <div>
              <TaskBlock />
            </div>

            <div className="relative mt-8">
              <div className="bg-red h-35 w-0.5 flex absolute" />
            </div>

            <div className="ml-5 h-50 mt-3 flex flex-row gap-5 mr-10">
              <ChartTask />
              <ChartBatery />
            </div>

            <div className="ml-5 mt-5">
              <h1 className="text-textblack font-bold text-2xl">
                Outras atividades em andamento
              </h1>

              <div className="flex flex-row gap-8">
                <UseMiniCard />
                <UseMiniCard />
              </div>
            </div>
          </div>

          <h1 className="ml-5 mt-0 text-2xl text-red text font-bold">
            Colaboradores ativos
          </h1>

          <div className="flex flex-col">
            <div className="flex flex-row gap-4">
              <UseCard />
              <UseCard />
              <UseCard />
            </div>

            <div className="flex flex-row gap-4">
              <UseCard />
              <UseCard />
              <UseCard />
            </div>
          </div>

          <div className="flex flex-row justify-center relative mt-1.5">
            <Footer />

            <div className="mt-4">
              <PaginationComponent />
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}

import { HistLine } from "@/components/histLine";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Footer } from "@/components/useFooter";
import { PaginationComponent } from "@/components/usePagination";


export default function HistoricoAtividades() {
  return (
    <main className="flex flex-col h-screen">
      <div>
        <Header />
        <Sidebar />

        <div className="flex flex-col">
          <div className="flex flex-row m-5">
            <h1 className=" text-2xl text-red text font-bold">
            Histórico de atividades
            </h1>
          </div>

        <div className="w-full h-full flex flex-row gap-20">
          <div className="flex flex-col gap-10 mt-2 ml-2 ">
            <HistLine/>
            <div className="bg-gray-50 w-150 h-30 items-center rounded-md flex">
            <HistLine/>
            </div>
            <HistLine/>
            <HistLine/>
            <HistLine/>
          </div>

          <div className="flex flex-col gap-15 mt-2">
            <HistLine/>
            <HistLine/>
          </div>

          </div>
        </div>
      </div>

      <div className="mt-auto">

         <div className="mt-4">
                      <PaginationComponent />
                    </div>

        <div className="mt-5 mb-28">
          <Footer />

          
        </div>
      </div>
    </main>
  );
}

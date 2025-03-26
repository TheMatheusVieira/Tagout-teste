import { HistLine } from "@/components/histLine";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Footer } from "@/components/useFooter";


export default function OrdensAndamento() {
  return (
    <main className="flex flex-col h-screen">
      <div>
        <Header />
        <Sidebar />

        <div className="flex flex-col">
          <div className="flex flex-row m-5">
            <h1 className=" text-2xl text-red text font-bold">
              Todas as minhas ordens
            </h1>
          </div>

          <div className="w-full h-full">
            <div className="flex flex-col gap-15 mt-2">
            <HistLine/>
            <HistLine/>
            <HistLine/>
            <HistLine/>
            <HistLine/>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="w-full h-1 bg-gray-100" />

        <div className="mt-5 mb-28">
          <Footer />
        </div>
      </div>
    </main>
  );
}

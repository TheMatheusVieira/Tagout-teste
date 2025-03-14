import { ChartTask } from "@/components/ui/chartask";
import { ChartBatery } from "@/components/ui/chartbatery";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Header } from "@/components/ui/header";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Sidebar from "@/components/ui/sidebar";

import { UseCard } from "../components/useCard";
import { UseMiniCard } from "@/components/useMiniCard";
import { Footer } from "@/components/useFooter";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
         <Sidebar />

        <div className="flex flex-row gap-5 w-full">
          <div>
            <h1 className="m-5 text-2xl text-red text font-bold">
              Manutenção atual: Painel elétrico X
            </h1>

            <div>
              <span className="bg-red text-white text-2xl font-bold rounded-sm px-5 py-2 ml-5 ">
                SEGUNDA-FEIRA <span>9</span>
              </span>
            </div>
          
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-bold transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
            <a href="/viewTask" className="flex justify-center items-center ml-5 mt-5 w-50 h-12 text-2xl bg-gray-700 text-primary-foreground shadow-xs hover:bg-primary/90 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5">
              ACOMPANHAR
            </a>
          </div>
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

        <div className="flex flex-row justify-center relative">

          <Footer />

          <div className="mt-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

      </div>
    </main>
  );
}

import { DataTableDemo } from "@/components/ui/dataTable";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Footer } from "@/components/useFooter";

export default function ManageUsers() {
  return (
    <main className="flex flex-col h-screen">
      <div>
        <Header />
        <Sidebar />

        <div className="flex flex-row w-full">
          <div className="flex flex-col m-5">
            <div className="flex-row flex gap-4">
              <h1 className=" text-2xl text-textblack text font-bold">
                Total de registros:
              </h1>
              <div className="bg-red w-8 h-8 rounded-full text-white font-bold text-2xl text-center flex justify-center items-center">
                <span className="mb-0.5">9</span>
              </div>
            </div>
            <div className="ml-15 mt-2 w-400">
              <DataTableDemo />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex flex-row">
          <div className="w-[90%] h-0.5 bg-red" />
          <div className="w-[10%] h-0.5 bg-gray-100" />
        </div>

        <div className="text-irongray mt-15 text-xl font-bold gap-10 flex flex-row underline justify-center items-center">
          <a href="/cadastroAtivo">CADASTRAR ATIVO</a>

          <a href="/cadastroColab">ADICIONAR NOVO COLABORADOR</a>

          <a href="/cadastroEmpresa">CADASTRAR NOVA EMPRESA</a>

          <a href="/cadastroSetor">CADASTRAR SETOR</a>
        </div>

        <div className="mt-5 mb-28">
          <Footer />
        </div>
      </div>
    </main>
  );
}

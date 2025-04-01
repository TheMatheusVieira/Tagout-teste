import { ConjCadastrar } from "@/components/useRegister";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Footer } from "@/components/useFooter";
import { InputAtivoMedio } from "@/components/useInput";



export default function CadastrarSetor() {
    return (
      <main className="flex flex-col h-screen">
        <div>
          <Header />
           <Sidebar />
  
  
      <div className="flex flex-row w-full justify-center">
           
     
            <div className="flex flex-col m-5 ">

    
              <h1 className="flex justify-center text-3xl text-red text font-medium mt-2 mb-5">
               Cadastro de setores
              </h1>


              <div className="flex flex-col gap-5 items-center">
                <InputAtivoMedio label="Nome do setor *" size="lg"/>
                <InputAtivoMedio label="Localização *" size="lg"/>
                <InputAtivoMedio label="Código do setor *" size="lg"/>
                <InputAtivoMedio label="Tipo do setor *" size="lg"/>
                <InputAtivoMedio label="Responsável pelo setor" size="lg"/>
              </div>


    

        <ConjCadastrar/>

            </div>




          </div>

  
  
       
        </div>
  
    <div className="mt-auto">
  
  
        {/* //Linha ou pagination */}
        <div className="w-full h-1 bg-gray-100"/>
  
  
        <div className="mt-5 mb-28">
            <Footer />
        </div>
  
    </div>
      </main>
    );
  }
  
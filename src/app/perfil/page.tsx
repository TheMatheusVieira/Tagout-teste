import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Footer } from "@/components/useFooter";
import { InputPerfilEmail, InputPerfilSenha } from "@/components/useInput";
import { UserCircle2 } from "lucide-react";

export default function Perfil() {
  return (
    <main className="flex flex-col h-screen">
      <div>
        <Header />
         <Sidebar />


        <div className="flex flex-row gap-5 w-full">
          

    
<div className="w-130 h-50 m-15 mt-20 rounded-xl flex flex-row border-1">
  <div className="m-5 flex flex-col font-semibold text-xl gap-2">
  <span>Nome colaborador</span>
  <span>ADM</span>
  <span>ID</span>

  <a href="/" className="font-bold mt-2">GERENCIAR USUÁRIOS</a>
  </div>

  <div className="flex items-center ml-20">
    <UserCircle2 size={150} />
  </div>
  
</div>

<div className="mt-20">
         <div className="flex items-center flex-row gap-20 mb-10">
          <InputPerfilEmail/>
          <InputPerfilSenha/>
         </div>

         <div className="flex items-center flex-row gap-20 mb-10">
          <InputPerfilEmail/>
          <InputPerfilSenha/>
         </div>

         <div className="flex items-center flex-row gap-20">
          <InputPerfilEmail/>
          <InputPerfilSenha/>
         </div>

      </div>
    </div>


     
      </div>
      
      <div className="mt-auto flex right-0 ">
      <Button>SALVAR</Button>
      </div>

      <div className="w-full h-1 bg-gray-100"/>

      <div className="mt-5 mb-28">
          <Footer />
        </div>
    </main>
  );
}

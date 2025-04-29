import Image from "next/image";
import logo from "../../assets/logo.svg";
import { InputRecuCPF, InputRecuEmail } from "@/components/useInput";
import SigninForm from "../login/components/SigninForm";

export default function ResetSenha() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Conteúdo principal */}
      <div className="flex flex-1 flex-col items-center justify-center gap-5 p-4">
        <div className="z-10">
          <h1 className="mb-5 mt-10 text-3xl font-bold text-textblack">RECUPERAÇÃO DE SENHA</h1>
        </div>

        <SigninForm>
          <InputRecuEmail />
          <InputRecuCPF />
          
          <button  
            type="button"
            className="mt-8 bg-red hover:bg-red-900 hover:cursor-pointer text-white font-semibold text-xl w-50 h-10 rounded-md z-10"
          >
            CONFIRMAR
          </button>
        </SigninForm>

        <a href="/login" className="text-red text-sm">Fazer login</a>
      </div>


      {/* Linha de divisão e footer */}
      <div className="w-full border-t border-gray-100 mt-auto">
        <div className="flex justify-center py-12 mb-5">
          <Image src={logo} alt="Logo da Tagout" className="w-80" />
        </div>
      </div>
    </div>
  );
}
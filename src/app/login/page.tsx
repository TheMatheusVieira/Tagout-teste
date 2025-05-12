import Image from "next/image";
import logo from "../../assets/logo.svg";
import { InputLoginEmail, InputLoginSenha } from "@/components/useInput";
import SigninForm from "./components/SigninForm";

export default function Login() {
  return (
    
    <div className="flex relative flex-col items-center justify-center gap-5 min-h-screen overflow-hidden">
      {" "}
      {/* DETALHE - Versão corrigida */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-45 h-full bg-gray-50 absolute rotate-20 origin-top-right border-l-2 border right-0 scale-x-150 scale-y-125" />
      </div>
      <Image src={logo} alt="Logo da Tagout" className="w-80 z-10" />
      <div className="z-10">
        <h1 className="m-2 text-2xl font-bold text-textblack">LOGIN</h1>
      </div>
      
      <SigninForm>
      <InputLoginEmail />
      <InputLoginSenha />
     
      <button
        type="button"
        className="bg-red hover:bg-red-900 hover:cursor-pointer text-white font-semibold text-xl w-40 h-10 rounded-md z-10"
      >
        ENTRAR
      </button>

      </SigninForm>

      <a href="/resetSenha" className="text-red text-sm z-10">
        Esqueceu a senha?
      </a>
      <div className="mt-10" />
    </div>
  );
}

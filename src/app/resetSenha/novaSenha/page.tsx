import Image from "next/image";
import logo from "../../../assets/logo.svg";
import { InputRecuConfirmSenha, InputRecuNovaSenha } from "@/components/useInput";
import SigninForm from "@/app/login/components/SigninForm";


export default function NovaSenha() {
  return (
    <div className="flex relative flex-col items-center justify-center gap-5 min-h-screen overflow-hidden">
       
      <Image src={logo} alt="Logo da Tagout" className="w-80 z-10" />
      <div className="z-10">
        <h1 className="m-2 mt-8 text-2xl font-bold text-textblack">ALTERAR SENHA</h1>
      </div>
      <SigninForm>
      <InputRecuNovaSenha />
      <InputRecuConfirmSenha />
     
      <button
        type="button"
        className="mt-8 bg-red hover:bg-red-900 hover:cursor-pointer text-white font-semibold text-xl w-50 h-10 rounded-md z-10"
      >
        CONFIRMAR
      </button>
      </SigninForm>


      <div className="mt-10" />
    </div>
  );
}

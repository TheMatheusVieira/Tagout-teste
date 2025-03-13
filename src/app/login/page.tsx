import Image from "next/image";
import logo from "../../assets/logo.svg";
import { InputLoginEmail, InputLoginSenha } from "@/components/useInputLogin";


export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-screen">

    <div className="min-h-screen w-80 bg-gray-50 absolute rotate-25 right-0 border-l-2 overflow-hidden"></div>


    <Image src={logo} alt="Logo da Tagout" className="w-80" />
  
    <div>
      <h1 className="m-5 text-2xl font-bold text-textblack">LOGIN</h1>
    </div>
    <InputLoginEmail />

    <InputLoginSenha/>

    <a href="#" className="text-red text-sm">Esqueceu a senha?</a>

    <button className="bg-red text-white font-semibold text-xl w-40 h-10 rounded-md">ENTRAR</button>
    </div>
        )
        }
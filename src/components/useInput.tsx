import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"



export function InputPerfilEmail() {
  return (
    <div className="grid w-100 items-center gap-1.5">
      <Label htmlFor="email" className="font-bold text-md">E-mail</Label>
      <Input type="email" id="email" className="border rounded-sm h-10" />
    </div>
  )
}

export function InputPerfilSenha() {
  return (
    <div className="grid w-100 items-center gap-1.5">
      <Label htmlFor="email" className="font-bold text-md">Senha</Label>
      <Input type="password" id="senha" className="border rounded-sm h-10" />
    </div>
  )
}


  

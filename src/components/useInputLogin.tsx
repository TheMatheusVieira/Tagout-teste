import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"



export function InputLoginEmail() {
  return (
    <div className="grid w-full max-w-xs items-center gap-1.5">
      <Label htmlFor="email">E-mail</Label>
      <Input type="email" id="email" className="border-red bg-bbrose" />
    </div>
  )
}

export function InputLoginSenha() {
    return (
      <div className="grid w-full max-w-xs items-center gap-1.5">
        <Label htmlFor="senha">Senha</Label>
        <Input type="password" id="senha" className="border-red bg-bbrose" />
      </div>
    )
  }
  

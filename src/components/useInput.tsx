import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"



export function InputPerfilEmail() {
  return (
    <div className="grid w-100 items-center gap-1.5">
      <Label htmlFor="email" className="font-bold text-md">E-mail</Label>
      <Input type="email" id="email" className="border rounded-sm h-10" placeholder="Seu e-mail" />
    </div>
  )
}


export function InputPerfilSenha() {
  return (
    <div className="grid w-100 items-center gap-1.5">
      <Label htmlFor="email" className="font-bold text-md">Senha</Label>
      <Input type="password" id="senha" className="border rounded-sm h-10" placeholder="Sua senha" />
    </div>
  )
}


export function InputPerfilPais() {
  return (
    <div className="grid w-100 items-center gap-1.5">
      <Label htmlFor="pais" className="font-bold text-md">País</Label>
      <select id="pais" className="border rounded-sm h-10 px-2">
        <option value="">Selecione seu país</option>
        <option value="brasil">Brasil</option>
        <option value="eua">Estados Unidos</option>
        <option value="portugal">Portugal</option>
        <option value="espanha">Espanha</option>
        <option value="japao">Japão</option>
      </select>
    </div>
  )
}


export function InputPerfilCidade() {
  return (
    <div className="grid w-100 items-center gap-1.5">
      <Label htmlFor="cidade" className="font-bold text-md">Cidade</Label>
      <select id="cidade" className="border rounded-sm h-10 px-2">
        <option value="">Selecione sua cidade</option>
        <option value="brasil">São Bernardo do Campo</option>
        <option value="eua">Santo André</option>
        <option value="portugal">Mauá</option>
        <option value="espanha">São Paulo</option>
      </select>
    </div>
  )
}


export function InputPerfilEmpresa() {
  return (
    <div className="grid w-100 items-center gap-1.5">
      <Label htmlFor="empresa" className="font-bold text-md">Empresa</Label>
      <Input disabled type="text" id="empresa" className="border rounded-sm h-10 px-2 disabled" placeholder="Sua organização" />
    </div>
  )
}


export function InputPerfilIdioma() {
  return (
    <div className="grid w-100 items-center gap-1.5">
      <Label htmlFor="idioma" className="font-bold text-md">Idioma</Label>
      <select id="idioma" className="border rounded-sm h-10 px-2">
        <option value="">Selecione seu idioma</option>
        <option value="brasil">Português - BR</option>
        <option value="eua">Inglês</option>
        <option value="portugal">Espanhol</option>
      </select>
    </div>
  )
}

  

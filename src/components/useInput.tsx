import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

interface InputAtivoProps {
  label: string; // Prop para o rótulo
  id?: string; // ID opcional para o input
  disabled?: boolean; // Se o input deve ser desativado
  size?: "sm" | "md" | "lg" | "note"; //Definição de tamanhos
}




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

  
//CADASTRO DE ATIVO

export function InputAtivoMedio({ label, id = "input-id", disabled = false, size = "md" }: InputAtivoProps) {
  // Definição de classes de tamanho
  const sizeClasses = {
    sm: "h-8 px-2 text-sm", // Pequeno
    md: "h-10 px-3 text-base", // Médio (padrão)
    lg: "h-12 px-4 text-lg", // Grande



    note: "w-full h-300"
    
  };

  
  return (
    <div className="grid w-full items-center gap-1.5 m-2">
      <Label htmlFor={id} className="text-sm">{label}</Label>
      <Input
        type="text"
        id={id}
        disabled={disabled} // Permite desativar via prop
        className="bg-gray-100 w-90 border rounded-sm h-10 px-2"
      />
    </div>
  );
}
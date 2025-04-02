import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

import i18nCountries from 'i18n-iso-countries';
import ptLocale from 'i18n-iso-countries/langs/pt.json';
// Registrar a localização em português
i18nCountries.registerLocale(ptLocale);



interface InputAtivoProps {
  label: string; // Prop para o rótulo
  id?: string; // ID opcional para o input
  disabled?: boolean; // Se o input deve ser desativado
  size?: "sm" | "md" | "lg" | "resp" | "note"; //Definição de tamanhos
}



//LOGIN
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
  

//PERFIL DO USUÁRIO
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
  // Obter países em português
  const countriesPT = i18nCountries.getNames('pt');
  
  const countryList = Object.entries(countriesPT)
    .map(([code, name]) => ({
      code,
      name
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="grid w-100 items-center gap-1.5">
      <Label htmlFor="pais" className="font-bold text-md">País</Label>
      <select id="pais" className="border rounded-sm h-10 px-2">
        <option value="">Selecione seu país</option>
        {countryList.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export function InputPerfilCidade() {
  return (
    <div className="grid w-100 items-center gap-1.5">
      <Label htmlFor="cidade" className="font-bold text-md">Cidade</Label>
      <Input type="text" id="cidade" className="border rounded-sm h-10" placeholder="Digite sua cidade"/>
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

export const sizeClasses = {
  sm: "h-8 w-70 px-2 text-sm", // Pequeno
  md: "h-10 w-80 px-3 text-md", // Médio (padrão)
  lg: "h-10 w-120 px-4 text-md", // Grande

  resp: "h-10 w-full mb-2 px-3 text-lg",
  note: "h-30 w-full text-start pt-2 flex items-start",

};

//CADASTRO DE ATIVO

export function InputAtivoMedio({ label, id = "input-id", disabled = false, size}: InputAtivoProps) {
  const isTextArea = size === "note"; // Verifica se é uma nota
  
  return (
    <div className="grid w-full items-center gap-1.5 m-2">
      <Label htmlFor={id} className="text-sm">{label}</Label>
      {isTextArea ? (
      <textarea
        id={id}
        disabled={disabled}
        className={`bg-gray-100 border border-[#AFAFAF] rounded-sm ${sizeClasses[size] || sizeClasses.md} p-2 resize-none`}
      />
      ) : (
      <Input
        type="text"
        id={id}
        disabled={disabled}
        className={`bg-gray-100 border border-[#AFAFAF] rounded-sm ${sizeClasses[size ?? "md"]}`}
      />
      )}
    </div>
  );
}

//CADASTRO NOVO COLABORADOR
export function InputNovoColaborador({label, size = "lg"}: InputAtivoProps) {
  return (
    <div className="grid items-center gap-1.5 m-2">
      <Label htmlFor="empresa" className="text-sm">{label}</Label>
      <Input type="text" id="empresa" className={`bg-bbrose border border-red rounded-sm h-10" ${sizeClasses[size ?? "lg"]}`}/>
    </div>
  )
}
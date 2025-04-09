import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardDetail,
} from "./ui/card";
import { ArrowRight, CalendarDays, Clock, UserCircle2 } from "lucide-react";
import {
  MiniCard,
  SmCardDescription,
  SmCardHeader,
  SmCardTitle,
} from "./ui/minicards";
import { useRef, useState } from "react";

//CARDS DE COLABOTADORES DA ATIVIDADE
export function UseCard() {
  return (
    <Card className="relative z-0"> 
      <div className="relative">
        <CardHeader>
          <CardTitle>Nome do colaborador</CardTitle>
          <CardDescription>Cargo do colaborador</CardDescription>
          <CardDetail className="absolute right-0 top-0" />
        </CardHeader>
      </div>

      <div className="flex flex-row gap-8">
        <div className="text-irongray">
          <CardContent>
            <div className="justify-items-start">
              <p className="mb-4">Hora início</p>
              <div className="flex flex-row gap-2">
                <Clock size={24} className="mt-0.5" />
                <h1 className="font-medium text-lg ml-1">16:00</h1>
              </div>
            </div>
          </CardContent>
        </div>

        <div className="text-irongray">
          <CardContent>
            <p className="mb-4">Data início</p>
            <div className="flex flex-row gap-2">
              <CalendarDays size={24} className="mt-0.5" />
              <h1 className="font-medium text-lg ml-1">09 / 12 / 24</h1>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

//CARDS PARA OUTRAS ATIVIDADES RECENTES
export function UseMiniCard() {
  return (
    <MiniCard>
      <SmCardHeader>
        <SmCardTitle>Caixa de bloqueio</SmCardTitle>
        <SmCardDescription>123145213</SmCardDescription>

        <div className="flex flex-row mt-8 justify-between">
          <h1 className="text-red font-bold">Visualizar</h1>
          <ArrowRight size={24} className="text-red" />
        </div>
      </SmCardHeader>
    </MiniCard>
  );
}

//CARD PERFIL DO USUÁRIO
// export function CardUser(){
//   return (
//     <div className="w-130 h-50 m-15 mt-20 rounded-xl flex flex-row border-1">
//       <div className="m-5 flex flex-col font-semibold text-xl gap-2">
//       <span>Nome colaborador</span>
//       <span>ADM</span>
//       <span>ID</span>

//       <a href="/manageUsers" className="font-bold mt-2 underline">GERENCIAR USUÁRIOS</a>
//     </div><div className="flex items-center ml-20">
//         <UserCircle2 size={150} />
//       </div>
//       </div>
//   );
// }
export function CardUser({ onImageUpload }: { onImageUpload: (image: string) => void }) {
  const [userImage, setUserImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = event.target?.result as string;
        setUserImage(image);
        onImageUpload(image); // Envia a imagem para o componente pai
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="w-130 h-50 m-15 mt-20 rounded-xl flex flex-row border-1">
      <div className="m-5 flex flex-col font-semibold text-xl gap-2">
        <span>Nome colaborador</span>
        <span>ADM</span>
        <span>ID</span>
        <a href="/manageUsers" className="font-bold mt-2 underline">
          GERENCIAR USUÁRIOS
        </a>
      </div>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<div className="flex items-center ml-20 cursor-pointer" onClick={handleImageClick}>
        {userImage ? (
          <img 
            src={userImage} 
            alt="User" 
            className="w-[150px] h-[150px] rounded-full object-cover" 
          />
        ) : (
          <UserCircle2 size={150} />
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
}
import { CircleUser, House } from "lucide-react";


export function Footer() {
  return <div className="flex-row flex gap-20 ml-20 mt-2 absolute left-0 ">

            <div className="text-irongray justify-items-center">
              <House size={45} />
              <span>Home</span>
            </div>

            <div className="text-irongray justify-items-center">
              <CircleUser size={45} />
              <span>Perfil</span>
            </div>

          </div>
}
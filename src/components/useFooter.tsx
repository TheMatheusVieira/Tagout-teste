import { CircleUser, House } from "lucide-react";


export function Footer() {
  return <div className="flex-row flex gap-20 ml-20 mt-2 absolute left-0 justify-baseline">

            <a href="/" className="text-irongray justify-items-center hover:text-red">
              <House size={45} />
              <span>Home</span>
            </a>

            <a href="/perfil" className="text-irongray justify-items-center hover:text-red">
              <CircleUser size={45} />
              <span>Perfil</span>
            </a>

          </div>
}
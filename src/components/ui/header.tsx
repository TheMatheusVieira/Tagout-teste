import type { ComponentProps, ReactNode } from "react";
import Image from "next/image";

import Vector from "@/assets/Vector.svg";
import { BellDot, Menu } from "lucide-react";
interface HeaderProps extends ComponentProps<"header"> {
    children?: ReactNode;
}

export function Header(props: HeaderProps) {
    return (
        <header className="flex justify-between items-center w-full h-18 bg-red">
        <Image src={Vector} className="absolute m-0 p-0" alt="brilho-header" width={200} height={30}/>
        {props.children}

        <div className="absolute right-35 text-white flex flex-row gap-10">
            <BellDot size={40}/>
            <Menu size={40}/>
        </div>

        </header>
    );
    }
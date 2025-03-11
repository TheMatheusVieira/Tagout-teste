import type { ComponentProps, ReactNode } from "react";
import Image from "next/image";

import Vector from "@/assets/Vector.svg";
interface HeaderProps extends ComponentProps<"header"> {
    children?: ReactNode;
}

export function Header(props: HeaderProps) {
    return (
        <header className="flex justify-between items-center w-full h-18 bg-red">
        <Image src={Vector} className="absolute m-0 p-0" alt="brilho-header" width={200} height={30}/>
        {props.children}
        </header>
    );
    }
import type { ComponentProps, ReactNode } from "react";

interface HeaderProps extends ComponentProps<"header"> {
    children?: ReactNode;
}

export function Header(props: HeaderProps) {
    return (
        <header className="flex justify-between items-center p-7 bg-red">
        {props.children}
        </header>
    );
    }
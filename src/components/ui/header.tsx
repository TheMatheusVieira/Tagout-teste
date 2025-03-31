// components/ui/header.tsx
"use client";

import { BellDot, Menu } from "lucide-react";
import Image from "next/image";
import Vector from "@/assets/Vector.svg";

interface HeaderProps {
  children?: React.ReactNode;
  toggleSidebar: () => void;
  isSidebarOpen: boolean; // Adicionamos esta prop para sincronizar o estado
}

export function Header({ children, toggleSidebar, isSidebarOpen }: HeaderProps) {
  return (
    <header className="flex justify-between items-center w-full h-18 bg-red relative">
      {/* Brilho do header */}
      <Image 
        src={Vector} 
        className="absolute m-0 p-0" 
        alt="brilho-header" 
        width={200} 
        height={30}
      />
      
      {/* Conteúdo children */}
      {children}

      {/* Ícones à direita - agora com transição sincronizada */}
      <div className={`absolute right-30 text-white flex flex-row gap-10 items-center 
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-[-15px]' : 'translate-x-25'}`}>
        
        <button 
          type="button"
          className="hover:opacity-80 transition-opacity hover:cursor-pointer"
        >
          <BellDot size={40} />
        </button>
        
        <button 
          type="button"
          onClick={toggleSidebar}
          className="hover:opacity-80 hover:cursor-pointer"
          aria-label="Abrir menu"
        >
          <Menu size={40} />
        </button>
      </div>
    </header>
  );
}
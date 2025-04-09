"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Vector from "@/assets/Vector.svg";
import { NotificationDropdown } from "@/components/useNotification";

interface HeaderProps {
  children?: React.ReactNode;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export function Header({ children, toggleSidebar, isSidebarOpen }: HeaderProps) {
  return (
    <header className="flex justify-between items-center w-full h-18 bg-red relative z-[9999]">
      <Image 
        src={Vector} 
        className="absolute m-0 p-0" 
        alt="brilho-header" 
        width={200} 
        height={30}
      />
      
      {children}

      <div className={`absolute right-30 text-white flex flex-row gap-10 items-center 
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-[-15px]' : 'translate-x-25'}`}>
        
        <NotificationDropdown />
        
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
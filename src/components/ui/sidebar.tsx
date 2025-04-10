"use client";
import type { LucideProps } from "lucide-react";

import type { IconType } from "react-icons";
import {
  FaChartBar,
  FaFileAlt,
  FaHistory,
  FaKey,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import Modal from "../Modal";
import { useState } from "react";

interface Item {
  title: string;
  icon: IconType;
  href: string;
  onClick?: () => void;
}

const menuItems: Item[] = [
  { title: "Dashboard", icon: FaChartBar, href: "/dashboard" },
  { title: "Page", icon: FaFileAlt, href: "/ordens" },
  { title: "Time past", icon: FaHistory, href: "/history" },
];

const othersItems: Item[] = [
  { title: "Help", icon: FaQuestionCircle, href: "/ajuda" },
  { title: "Logout", icon: FaSignOutAlt, href: "/login" },
];

const Sidebar = ({ isOpen, userImage }: { isOpen: boolean; userImage: string | null }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isActive = false;

  return (
    <>
      {/* Overlay para fechar a sidebar ao clicar fora */}
      {isOpen && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => {
            /* fechar via toggle do parent */
          }}
        />
      )}

      <aside
        className={`fixed right-0 top-0 h-dvh w-[110px] bg-white shadow-md border-r-2 border-[#AE080B] 
			transform transition-transform duration-300 ease-in-out z-[9999]
			${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="text-center border-b-2 border-[#AE080B] m-5 pb-5">
          {userImage ? (
            <img 
              src={userImage} 
              alt="Logo" 
              className="w-15 h-15 mx-auto rounded-md border-[#AE080B] border object-cover" 
            />
          ) : ( 
            <h1 className="text-2xl font-bold text-[#AE080B]">IMG</h1>
          )}
        </div>

        <nav className="p-4 md:p-5 relative h-[calc(100%-130px)]">
          <SidebarSection title="TAGOUT" items={menuItems} />

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className={`group flex justify-center items-center gap-3 rounded px-4 py-3 transition-all duration-300 hover:bg-[#FBF2F2] md:px-5 w-full ${
              isActive
                ? "bg-[#DEE1F4] font-medium text-bbrose"
                : "font-normal text-bbrose"
            }`}
          >
            <FaKey
              size={25}
              className={`${
                isActive ? "#5A6ACF" : "#A6ABC8"
              } text-irongray transition-all duration-300 group-hover:text-textblack`}
            />
          </button>

          <div className="absolute bottom-0 w-[calc(100%-32px)]">
            <SidebarSection title="1.0" items={othersItems} />
          </div>
        </nav>
      </aside>

      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <Modal onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </>
  );
};

const SidebarSection = ({ title, items }: { title: string; items: Item[] }) => (
  <>
    <h3 className="text-center mb-3 text-xs text-[#AE080B]">{title}</h3>
    {items.map((item, idx) => (
      <SidebarItem
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={idx}
        icon={item.icon}
        href={item.href}
        onClick={item.onClick}
      />
    ))}
  </>
);

interface PropsType extends Omit<LucideProps, "ref"> {
  icon: IconType;
  href: string;
}
const SidebarItem: React.FC<PropsType> = ({ icon: Icon, href }) => {
  const isActive = false;
  return (
    <div>
      <a
        href={href}
        className={`group flex justify-center items-center gap-3 rounded px-4 py-3 transition-all duration-300 hover:bg-[#FBF2F2] md:px-5 ${
          isActive
            ? "bg-[#DEE1F4] font-medium text-bbrose"
            : "font-normal text-bbrose"
        }`}
      >
        <Icon
          size={25}
          className={`${
            isActive ? "#5A6ACF" : "#A6ABC8"
          } text-irongray transition-all duration-300 group-hover:text-textblack`}
        />
      </a>
    </div>
  );
};

export default Sidebar;

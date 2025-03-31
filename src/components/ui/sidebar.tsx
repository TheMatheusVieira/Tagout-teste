// "use client"
// import type { LucideProps } from "lucide-react";
// import { lazy, Suspense } from "react";
// import dynamicIconImports from "lucide-react/dynamicIconImports";
// import { Button } from "./button";

// interface Item {
// 	title: string;
// 	iconName: keyof typeof dynamicIconImports;
// 	href?: string;
// 	onClickButton: ()=>void

// }

// const menuItems: Item[] = [
// 	{ title: "Dashboard", iconName: "chart-no-axes-combined", href: "/dashboard",onClickButton: ()=>{console.log("dashboard")} },
// 	{ title: "Page", iconName: "file-text", href: "/ordens" ,onClickButton: ()=>{console.log("ordens")} },
// 	{ title: "Time past", iconName: "history", href: "/history" ,onClickButton: ()=>{console.log("history")} },
// 	{ title: "Key", iconName: "key-round",href:'',onClickButton: ()=>{console.log("key")} }

// ];

// const othersItems: Item[] = [
// 	{ title: "Help", iconName: "circle-help", href: "/ajuda",onClickButton: ()=>{console.log("ajuda")}  },
// 	{ title: "Logout", iconName: "log-out", href: "/login",onClickButton: ()=>{console.log("login")}  },
// ]

// const Sidebar = () => (
// 	<aside className="justify-center fixed right-0 top-0 h-dvh max-w-[110px] bg-[#FFFFFF] shadow-md border-r-2 border-[#AE080B]">
// 		<h1 className="text-center border-b-2 border-[#AE080B] m-5 pb-5 text-2xl font-bold text-[#AE080B]">
// 			LOGO
// 		</h1>
// 		<nav className="p-4 md:p-5 ">
// 			<SidebarSection title="TAGOUT" items={menuItems} />

// 			<div className="bottom-0 absolute mb-5">
// 			<SidebarSection title="1.0" items={othersItems} />
// 			</div>
// 		</nav>
// 	</aside>
// );

// const SidebarSection = ({ title, items }: { title: string; items: Item[] }) => (
// 	<>
// 		<h3 className="text-center mb-3 text-xs text-[#AE080B]">{title}</h3>
// 		{items.map((item, idx) => (
// 			<SidebarItem
//                 // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
//                 key={idx}
//                 iconName={item.iconName}
//                 href={item.href}
// 				// onClick={()=>{console.log("testes")}}

// 				onClickButton={item.onClickButton}
// 				/>
// 		))}
// 	</>
// );

// interface PropsType extends Omit<LucideProps, "ref"> {
// 	iconName: keyof typeof dynamicIconImports;
// 	href?: string;
// 	 onClickButton: ()=> void
// }

// const SidebarItem: React.FC<PropsType> = ({ iconName, href ,onClickButton}) => {
// 	const Icon = lazy(dynamicIconImports[iconName]);

// 	const isActive = false;

// 	return (
// 		<button type="button" onClick={()=>{onClickButton}}>
// 			<Icon
// 					size={25}
// 					className={`${isActive ? "#5A6ACF" : "#A6ABC8"} text-irongray transition-all duration-300 group-hover:text-textblack`}
// 				/>
// 			 </button>
// 	)

// };

// export default Sidebar;

// import type { LucideProps } from "lucide-react";
// import { lazy, Suspense } from "react";
// import dynamicIconImports from "lucide-react/dynamicIconImports";

// interface Item {
// 	title: string;
// 	iconName: keyof typeof dynamicIconImports;
// 	href: string;
// 	onClick?: () => void
// }

// const menuItems: Item[] = [
// 	{ title: "Dashboard", iconName: "chart-no-axes-combined", href: "/dashboard" },
// 	{ title: "Page", iconName: "file-text", href: "/ordens" },
// 	{ title: "Time past", iconName: "history", href: "/history" },

// 	{
// 		title: "Key", iconName: "key-round", onClick: () => { console.log("key"); },
// 		href: ""
// 	},

// ];

// const othersItems: Item[] = [
// 	{ title: "Help", iconName: "circle-help", href: "/ajuda" },
// 	{ title: "Logout", iconName: "log-out", href: "/login" },
// ]

// const Sidebar = () => (
// 	<aside className="justify-center fixed right-0 top-0 h-dvh max-w-[110px] bg-[#FFFFFF] shadow-md border-r-2 border-[#AE080B]">
// 		<h1 className="text-center border-b-2 border-[#AE080B] m-5 pb-5 text-2xl font-bold text-[#AE080B]">
// 			LOGO
// 		</h1>
// 		<nav className="p-4 md:p-5 ">
// 			<SidebarSection title="TAGOUT" items={menuItems} />

// 			<div className="bottom-0 absolute mb-5">
// 			<SidebarSection title="1.0" items={othersItems} />
// 			</div>
// 		</nav>
// 	</aside>
// );

// const SidebarSection = ({ title, items }: { title: string; items: Item[] }) => (
// 	<>
// 		<h3 className="text-center mb-3 text-xs text-[#AE080B]">{title}</h3>
// 		{items.map((item, idx) => (
// 			<SidebarItem
//                 // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
//                 key={idx}
//                 iconName={item.iconName}
//                 href={item.href}/>
// 		))}
// 	</>
// );

// interface PropsType extends Omit<LucideProps, "ref"> {
// 	iconName: keyof typeof dynamicIconImports;
// 	href: string;
// }

// const SidebarItem: React.FC<PropsType> = ({ iconName, href }) => {
// 	const Icon = lazy(dynamicIconImports[iconName]);

// 	const isActive = false;

// 	return (
// 		<a
// 			href={href}
// 			className={`group flex justify-center items-center gap-3 rounded px-4 py-3 transition-all duration-300 hover:bg-[#FBF2F2] md:px-5 ${isActive ? "bg-[#DEE1F4] font-medium text-bbrose" : "font-normal text-bbrose"}`}
// 		>

// 				<Icon
// 					size={25}
// 					className={`${isActive ? "#5A6ACF" : "#A6ABC8"} text-irongray transition-all duration-300 group-hover:text-textblack`}
// 				/>

// 		</a>
// 	);
// };

// export default Sidebar;

// import type { IconType } from "react-icons";
// import { FaChartBar, FaFileAlt, FaHistory, FaKey, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

// interface Item {
// 	title: string;
// 	icon: IconType;
// 	href: string;
// 	onClick?: () => void;
// }

// const menuItems: Item[] = [
// 	{ title: "Dashboard", icon: FaChartBar, href: "/dashboard" },
// 	{ title: "Page", icon: FaFileAlt, href: "/ordens" },
// 	{ title: "Time past", icon: FaHistory, href: "/history" },
// 	{
// 		title: "Key", icon: FaKey, onClick: () => { console.log("key"); },
// 		href: ""
// 	},
// ];

// const othersItems: Item[] = [
// 	{ title: "Help", icon: FaQuestionCircle, href: "/ajuda" },
// 	{ title: "Logout", icon: FaSignOutAlt, href: "/login" },
// ];

// const Sidebar = () => (
// 	<aside className="justify-center fixed right-0 top-0 h-dvh max-w-[110px] bg-[#FFFFFF] shadow-md border-r-2 border-[#AE080B]">
// 		<h1 className="text-center border-b-2 border-[#AE080B] m-5 pb-5 text-2xl font-bold text-[#AE080B]">
// 			LOGO
// 		</h1>
// 		<nav className="p-4 md:p-5 ">
// 			<SidebarSection title="TAGOUT" items={menuItems} />

// 			<div className="bottom-0 absolute mb-5">
// 				<SidebarSection title="1.0" items={othersItems} />
// 			</div>
// 		</nav>
// 	</aside>
// );

// const SidebarSection = ({ title, items }: { title: string; items: Item[] }) => (
// 	<>
// 		<h3 className="text-center mb-3 text-xs text-[#AE080B]">{title}</h3>
// 		{items.map((item, idx) => (
// 			<SidebarItem
// 				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
// 				key={idx}
// 				icon={item.icon}
// 				href={item.href}
// 				onClick={item.onClick}
// 			/>
// 		))}
// 	</>
// );

// interface PropsType {
// 	icon: IconType;
// 	href: string;
// 	onClick?: () => void;
// }

// const SidebarItem: React.FC<PropsType> = ({ icon: Icon, href, onClick }) => {
// 	const isActive = false;

// 	return (
// 		<button
// 			type="button"
// 			onClick={onClick}
// 			className={`group flex justify-center items-center gap-3 rounded px-4 py-3 transition-all duration-300 hover:bg-[#FBF2F2] md:px-5 ${isActive ? "bg-[#DEE1F4] font-medium text-bbrose" : "font-normal text-bbrose"}`}
// 		>
// 			<Icon
// 				size={25}
// 				className={`${isActive ? "#5A6ACF" : "#A6ABC8"} text-irongray transition-all duration-300 group-hover:text-textblack`}
// 			/>
// 		</button>
// 	);
// };

// export default Sidebar;

// "use client";

// import { useState } from "react";
// import Modal from "@/components/Modal";

// import type { LucideProps } from "lucide-react";
// // import { lazy, Suspense } from "react";
// // import dynamicIconImports from "lucide-react/dynamicIconImports";

// import type { IconType } from "react-icons";
// import { FaChartBar, FaFileAlt, FaHistory, FaKey, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

// interface Item {
// 	title: string;
// 	icon: IconType;
// 	href: string;
// 	onClick?: () => void
// }

// const menuItems: Item[] = [

// 	{ title: "Dashboard", icon: FaChartBar, href: "/dashboard" },
// 	{ title: "Page", icon: FaFileAlt, href: "/ordens" },
// 	{ title: "Time past", icon: FaHistory, href: "/history" },
// 	{
// 		title: "Key", icon: FaKey, onClick: () => { setIsModalOpen(true); },
// 		href: ""
// 	},

// ];

// const othersItems: Item[] = [
// 	{ title: "Help", icon: FaQuestionCircle, href: "/ajuda" },
// 	{ title: "Logout", icon: FaSignOutAlt, href: "/login" },
// ]

// const Sidebar = () => (
// 	<aside className="justify-center fixed right-0 top-0 h-dvh max-w-[110px] bg-[#FFFFFF] shadow-md border-r-2 border-[#AE080B]">
// 		<h1 className="text-center border-b-2 border-[#AE080B] m-5 pb-5 text-2xl font-bold text-[#AE080B]">
// 			LOGO
// 		</h1>
// 		<nav className="p-4 md:p-5 ">
// 			<SidebarSection title="TAGOUT" items={menuItems} />

// 			<div className="bottom-0 absolute mb-5">
// 			<SidebarSection title="1.0" items={othersItems} />
// 			</div>
// 		</nav>
// 	</aside>
// );

// const SidebarSection = ({ title, items }: { title: string; items: Item[] }) => (
// 	<>
// 		<h3 className="text-center mb-3 text-xs text-[#AE080B]">{title}</h3>
// 		{items.map((item, idx) => (
// 			<SidebarItem
//                 // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
//                 key={idx}
//                 icon={item.icon}
//                 href={item.href}/>
// 		))}
// 	</>
// );

// interface PropsType extends Omit<LucideProps, "ref"> {
// 	icon: IconType;
// 	href: string;
// }

// const SidebarItem: React.FC<PropsType> = ({ icon: Icon, href }) => {

// 	const isActive = false;

// 	return (
// 		<a
// 			href={href}
// 			className={`group flex justify-center items-center gap-3 rounded px-4 py-3 transition-all duration-300 hover:bg-[#FBF2F2] md:px-5 ${isActive ? "bg-[#DEE1F4] font-medium text-bbrose" : "font-normal text-bbrose"}`}
// 		>

// 				<Icon
// 					size={25}
// 					className={`${isActive ? "#5A6ACF" : "#A6ABC8"} text-irongray transition-all duration-300 group-hover:text-textblack`}
// 				/>

// 		</a>
// 	);
// };

// export default Sidebar;

"use client";
import { Key, KeyRound, type LucideProps } from "lucide-react";

import type { IconType } from "react-icons";
import {
  FaChartBar,
  FaFileAlt,
  FaHistory,
  FaKey,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { Button } from "./button";
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

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
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
			transform transition-transform duration-300 ease-in-out z-50
			${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <h1 className="text-center border-b-2 border-[#AE080B] m-5 pb-5 text-2xl font-bold text-[#AE080B]">
          LOGO
        </h1>

        <nav className="p-4 md:p-5 relative h-[calc(100%-120px)]">
          <SidebarSection title="TAGOUT" items={menuItems} />

          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
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
        // onClick={()=>{console.log("testes")}}

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
  //   const [isModalOpen, setIsModalOpen] = useState(false);
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
      {/* {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />} */}

      {/* <button
        onClick={() => setIsModalOpen(true)}
        className="text-irongray px-4 py-2 rounded hover:bg-bbrose transition repeat-0"
      >
        <KeyRound/>
      </button> */}
    </div>
  );
};

export default Sidebar;

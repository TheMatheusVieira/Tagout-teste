import type { LucideProps } from "lucide-react";
import { lazy, Suspense } from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface Item {
	title: string;
	iconName: keyof typeof dynamicIconImports;
	href: string;
}

const menuItems: Item[] = [
	{ title: "Dashboard", iconName: "chart-no-axes-combined", href: "/dashboard" },
	{ title: "Page", iconName: "file-text", href: "/" },
	{ title: "Time past", iconName: "history", href: "/" },
	{ title: "Key", iconName: "key-round", href: "/" },
];

const othersItems: Item[] = [
	{ title: "Help", iconName: "circle-help", href: "/" },
	{ title: "Logout", iconName: "log-out", href: "/login" },
]

const Sidebar = () => (
	<aside className="justify-center fixed right-0 top-0 h-dvh max-w-[110px] bg-[#FFFFFF] shadow-md border-r-2 border-[#AE080B]">
		<h1 className="text-center border-b-2 border-[#AE080B] m-5 pb-5 text-2xl font-bold text-[#AE080B]">
			LOGO
		</h1>
		<nav className="p-4 md:p-5 ">
			<SidebarSection title="TAGOUT" items={menuItems} />

			<div className="bottom-0 absolute mb-5">
			<SidebarSection title="1.0" items={othersItems} />
			</div>
		</nav>
	</aside>
);

const SidebarSection = ({ title, items }: { title: string; items: Item[] }) => (
	<>
		<h3 className="text-center mb-3 text-xs text-[#AE080B]">{title}</h3>
		{items.map((item, idx) => (
			<SidebarItem
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={idx}
                iconName={item.iconName}
                href={item.href}/>
		))}
	</>
);


interface PropsType extends Omit<LucideProps, "ref"> {
	iconName: keyof typeof dynamicIconImports;
	href: string;
}

const SidebarItem: React.FC<PropsType> = ({ iconName, href }) => {
	const Icon = lazy(dynamicIconImports[iconName]);

	const isActive = false;

	return (
		<a
			href={href}
			className={`group flex justify-center items-center gap-3 rounded px-4 py-3 transition-all duration-300 hover:bg-[#FBF2F2] md:px-5 ${isActive ? "bg-[#DEE1F4] font-medium text-bbrose" : "font-normal text-bbrose"}`}
		>
		
				<Icon
					size={25}
					className={`${isActive ? "#5A6ACF" : "#A6ABC8"} text-irongray transition-all duration-300 group-hover:text-textblack`}
				/>
		
		</a>
	);
};

export default Sidebar;

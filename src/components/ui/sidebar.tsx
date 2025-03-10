import type { LucideProps } from "lucide-react";
import { lazy, Suspense } from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface Item {
	title: string;
	iconName: keyof typeof dynamicIconImports;
	href: string;
}

const menuItems: Item[] = [
	{ title: "Dashboard", iconName: "square-kanban", href: "/" },
	{ title: "Page", iconName: "paperclip", href: "/" },
	{ title: "Time past", iconName: "timer", href: "/" },
	{ title: "Key", iconName: "key", href: "/" },
];

const Sidebar = () => (
	<aside className="fixed right-0 top-0 h-dvh max-w-[240px] bg-[#FFFFFF] shadow-md border-r-2 border-[#AE080B]">
		<h1 className="border-b border-[#AE080B] p-5 pl-10 text-2xl font-bold text-[#AE080B]">
			LOGO
		</h1>
		<nav className="p-4 md:p-5">
			<SidebarSection title="TAGOUT" items={menuItems} />
		</nav>
	</aside>
);

const SidebarSection = ({ title, items }: { title: string; items: Item[] }) => (
	<>
		<h3 className="mx-5 mb-3 mt-10 text-xs text-[#AE080B]">{title}</h3>
		{items.map((item, idx) => (
			<SidebarItem
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={idx}
                iconName={item.iconName}
                href={item.href}/>
		))}
	</>
);

const fallback = <div style={{ background: "#ddd", width: 18, height: 18 }} />;

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
			className={`group flex items-center gap-3 rounded px-4 py-3 transition-all duration-300 hover:bg-[#DEE1F4] hover:text-[#5A6ACF] md:px-5 ${isActive ? "bg-[#DEE1F4] font-medium text-[#5A6ACF]" : "font-normal text-[#777da3]"}`}
		>
			<Suspense fallback={fallback}>
				<Icon
					size={25}
					className={`${isActive ? "#5A6ACF" : "#A6ABC8"} text-gray-300 transition-all duration-300 group-hover:text-textblack`}
				/>
			</Suspense>
		</a>
	);
};

export default Sidebar;

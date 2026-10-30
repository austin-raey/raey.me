import Link from "@wren-js/core/link";

import Glass from "#/components/glass.js";
import Icon from "#/components/icon";

export const BREADCRUMB = [
	{
		icon: "i-lucide:folder-bookmark",
		name: "Projects",
	},
];
export default function LayoutSubpages({ children }: { children: JSX.Children }) {
	return (
		<>
			<Glass
				as="nav"
				class=":uno: m-4.3 bottom-7.3 view-transition-breadcrumb [&>wren-link,&>span]:(p-2 flex) absolute left-0 z-2 inline-flex items-center gap-2 px-2"
			>
				<Link href="/">Home</Link>
				<Icon icon="i-lucide:chevron-right" />
				<span>
					{BREADCRUMB.map((crumb) => (
						<span class=":uno: flex items-center gap-1.5 font-semibold">
							<Icon icon={crumb.icon} />
							{crumb.name}
						</span>
					))}
				</span>
			</Glass>
			{children}
		</>
	);
}

import Link from "@wrenjs/core/link";

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
				class=":uno: m-4.3 px-2 inline-flex gap-2 items-center bottom-7.3 left-0 absolute z-2 view-transition-breadcrumb [&>wren-link,&>span]:(p-2 flex)"
			>
				<Link href="/">Home</Link>
				<Icon icon="i-lucide:chevron-right" />
				<span>
					{BREADCRUMB.map((crumb) => (
						<span class=":uno: font-semibold flex gap-1.5 items-center">
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

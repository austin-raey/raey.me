import "./__layout.css";

export default function Layout({ children }: { children: JSX.Children }) {
	return (
		<>
			<wren-card class=":uno: rounded-6 dsk:w-[520px] dsk:aspect-[86/54] relative isolate block aspect-[54/86] w-[326px] touch-manipulation perspective-[85dvw]">
				<div class=":uno: rotate rounded-inherit relative h-full overflow-hidden border border-solid border-black/20 bg-white shadow-lg dark:border-white/20 dark:bg-black">
					<div class=":uno: rounded-inherit absolute inset-0 size-full" inert="true">
						<img
							alt=""
							class=":uno: rounded-inherit blur-4 dark:blur-5 absolute inset-0 size-full bg-cover opacity-40"
							decoding="async"
							fetchpriority="high"
							src="/bg.avif"
						/>
						<img
							alt=""
							class=":uno: rounded-inherit absolute inset-0 size-full bg-cover opacity-25 mix-blend-luminosity"
							decoding="async"
							fetchpriority="high"
							src="/texture.avif"
						/>
					</div>
					<div class=":uno: shine absolute inset-0 mix-blend-hard-light" inert="true" />
					<div class=":uno: p-4.3 rounded-inherit relative h-full">{children}</div>
				</div>
			</wren-card>
			<script async src="./__layout.script.ts" type="module" />
		</>
	);
}

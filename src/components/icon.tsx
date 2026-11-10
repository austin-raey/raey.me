export default function Icon({ class: className, icon }: { class?: string; icon: string }) {
	return <i class={[icon, className].filter(Boolean).join(" ")} inert="true" />;
}

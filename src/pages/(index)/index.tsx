import Link from "@wren-js/core/link";

import Glass from "#/components/glass.js";
import Icon from "#/components/icon";

const SPECIALIZATIONS = ["Full-Stack", "Frontend", "DevOps"];
const PROFICIENCIES = [
	"JavaScript",
	"TypeScript",
	"JS Frameworks",
	"Meta Frameworks",
	"Node.js",
	"Docker",
	"CI / CD",
	"GraphQL",
	"CMS Specialist",
	"SEO",
	"Accessibility",
];
interface Link {
	alt: string;
	icon: string;
	isLocal?: boolean;
	label: string;
	url: string;
}
export const SOCIALS: Link[] = [
	{
		alt: "Austin's GitHub profile",
		icon: "i-simple-icons:github",
		label: "austin-raey",
		url: "https://github.com/austin-raey",
	},
	{
		alt: "Austin's LinkedIn profile",
		icon: "i-simple-icons:linkedin",
		label: "austin-raey",
		url: "https://www.linkedin.com/in/austin-raey/",
	},
	{
		alt: "Austin's Threads profile",
		icon: "i-simple-icons:threads",
		label: "austin.raey",
		url: "https://www.threads.net/@austin.raey",
	},
	{
		alt: "Austin's Instagram profile",
		icon: "i-simple-icons:instagram",
		label: "austin.raey",
		url: "https://www.instagram.com/austin.raey",
	},
];
export const SITE_LINKS: Link[] = [
	{
		alt: "Projects",
		icon: "i-lucide:folder-bookmark",
		isLocal: true,
		label: "Projects",
		url: "/projects",
	},
];
export const head = () => (
	<>
		<title>Austin Raey</title>
		<link href="https://raey.me/" rel="canonical" />
		<meta content="Austin Raey - Software Engineer, Developer" name="description" />
		<meta content="Austin Raey - Software Engineer, Developer" name="twitter:description" />
		<meta content="Austin Raey - Software Engineer, Developer" property="og:description" />
		<meta content="Austin Raey" name="twitter:title" />
		<meta content="Austin Raey" property="og:site_name" />
		<meta content="Austin Raey" property="og:title" />
		<meta content="https://raey.me/" property="og:url" />
		<meta content="summary" name="twitter:card" />
		<meta content="website" property="og:type" />
	</>
);
const NavLink = ({ link }: { link: Link }) => (
	<Glass
		as={Link}
		class=":uno: relative z-1 flex items-center px-2.5 py-1.75 font-semibold"
		href={link.url}
		rel={link?.isLocal ? undefined : "noopener noreferrer"}
		style={link.url === "/projects" ? "view-transition-name: breadcrumb" : undefined}
		target={link?.isLocal ? undefined : "_blank"}
		title={link.alt}
	>
		<Icon icon={link.icon} /> {link.label}
	</Glass>
);
export default function PageIndex() {
	return (
		<div class=":uno: text-4 relative flex h-full flex-col gap-2">
			<header>
				<figure>
					<img
						alt="Austin's profile picture"
						class=":uno: image-render-pixel absolute top-0 right-0 z-0 -mr-2 size-14 opacity-75 mix-blend-color-burn dark:mix-blend-overlay"
						fetchpriority="high"
						src="./pfp-bw.svg"
					/>
					<figcaption class=":uno: mix-blend-luminosity">
						<h1 class=":uno: text-9 view-transition-heading flex flex-col">
							<span class=":uno: text-7 leading-none font-normal tracking-tight">Austin</span>
							<span class=":uno: leading-none font-extrabold tracking-tight">Raey</span>
						</h1>
					</figcaption>
				</figure>
			</header>

			<main class=":uno: view-transition-description flex grow basis-full flex-col gap-2 mix-blend-luminosity">
				<section class=":uno: flex flex-col gap-2 font-semibold">
					<p>
						<i class=":uno: i-lucide-map-pin" inert="true" />
						<span class=":uno: sr-only">Located in:</span> United States
					</p>
					<p>
						<i class=":uno: i-lucide-briefcase" inert="true" />
						<span class=":uno: sr-only">Occupation:</span> Software Engineer
					</p>
				</section>
				<section class=":uno: flex flex-col gap-2">
					<dl class=":uno: flex flex-wrap gap-1">
						<dt class=":uno: sr-only">Specializing in:</dt>
						{SPECIALIZATIONS.map((specialization) => (
							<dd
								class=":uno: text-3 rounded-2.5 backdrop-blur-1 inline-block border border-solid border-black/20 bg-white/30 px-1.5 py-1 leading-tight dark:border-white/30 dark:bg-black/30"
								key={specialization}
							>
								{specialization}
							</dd>
						))}
						<dt class=":uno: sr-only">Proficient in:</dt>
						{PROFICIENCIES.map((proficiency) => (
							<dd
								class=":uno: text-3 rounded-2.5 backdrop-blur-1 inline-block border border-solid border-black/20 bg-white/30 px-1.5 py-1 leading-tight dark:border-white/30 dark:bg-black/30"
								key={proficiency}
							>
								{proficiency}
							</dd>
						))}
					</dl>
				</section>
			</main>

			<footer class=":uno: mb-8 flex grow basis-full items-end mix-blend-luminosity dark:mix-blend-luminosity">
				<nav class=":uno: inline-flex flex-wrap gap-2">
					<h2 class=":uno: sr-only">Social Links</h2>
					{SOCIALS.map((link) => (
						<NavLink link={link} />
					))}
					<h2 class=":uno: sr-only">Site Links</h2>
					{SITE_LINKS.map((link) => (
						<NavLink link={link} />
					))}
				</nav>
			</footer>
		</div>
	);
}

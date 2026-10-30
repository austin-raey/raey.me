import "./___root.css";
import "virtual:uno.css";

export default function RootLayout({ children }: { children: JSX.Children }) {
	return (
		<html class=":uno: h-dvh overflow-hidden text-black antialiased dark:text-white/90" lang="en">
			<head>
				<meta charset="utf-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta content="light dark" name="color-scheme" />
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
				<link href="/sitemap-index.xml" rel="sitemap" />
				<link as="image" fetchpriority="high" href="/bg.avif" rel="preload" type="image/avif" />
				<link
					as="image"
					fetchpriority="high"
					href="/texture.avif"
					rel="preload"
					type="image/avif"
				/>
				<link
					as="font"
					crossorigin="anonymous"
					href="/sans.woff2"
					rel="preload"
					type="font/woff2"
				/>
			</head>
			<body class=":uno: grid h-dvh touch-manipulation place-items-center-safe overflow-hidden antialiased">
				{children}
			</body>
		</html>
	);
}

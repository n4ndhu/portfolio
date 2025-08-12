import type { Metadata } from 'next';
import { Fira_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Noise } from '@/components/ui/noise';
// TODO: Fix the performance issue with the cursor
// import { CursorProvider, Cursor } from '@/components/ui/cursor';
import { CursorProvider } from '@/components/ui/cursor';
import ScrollToHash from '@/components/ui/scroll-to-hash';
import { Footer } from '@/components/layout/footer';
import { Intro } from '@/components/ui/intro';
import { SwissLines } from '@/components/ui/swiss-lines';
import { GoogleAnalytics } from '@next/third-parties/google';

const siteUrl = 'https://n4ndhu.me';

const title = 'N4ndhu - Web Developer';
const description = `I’m a web developer who loves creating clean, user-friendly websites that work well, look good, and make life easier.`;

const primaryFont = Fira_Mono({
	weight: ['400', '500', '700'],
	variable: '--font-primary',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title,
	description,
	keywords: [
		'Angular',
		'Svelte',
		'React',
		'Tailwind',
		'TypeScript',
		'JavaScript',
		'Web Development',
		'UI/UX',
		'Frontend Developer',
		'Portfolio',
	],
	creator: 'n4ndhu',
	metadataBase: new URL(siteUrl),
	authors: [{ name: 'Nandhu', url: 'https://github.com/n4ndhu' }],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		title,
		locale: 'en_IN',
		description,
		siteName: title,
		url: siteUrl,
		images: [
			{
				url: `${siteUrl}/og.png`,
				width: 1200,
				height: 630,
				alt: title,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: [`${siteUrl}/og.png`],
		creator: 'n4ndhu',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${primaryFont.variable} bg-neutral-950 text-neutral-50 font-primary overflow-x-hidden dark max-w-full`}
			>
				<CursorProvider>
					<Noise opacity={0.15} speed={0.5} scale={8} lightColor="#d4d4d4" />
					<SwissLines />
					<Header />
					{children}
					<Footer />
					{/* <Cursor /> */}
					<ScrollToHash />
				</CursorProvider>
				<Intro />
			</body>
			<GoogleAnalytics gaId="G-ECGTVB7X7B" />
		</html>
	);
}

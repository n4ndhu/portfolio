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

const primaryFont = Fira_Mono({
	weight: ['400', '500', '700'],
	variable: '--font-primary',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'N4ndhu - Web Developer',
	description: `I’m a web developer who loves creating clean, user-friendly websites that work well, look good, and make life easier.`,
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
					<Noise opacity={0.3} speed={0.5} scale={8} lightColor="#d4d4d4" />
					<SwissLines />
					<Header />
					{children}
					<Footer />
					{/* <Cursor /> */}
					<ScrollToHash />
				</CursorProvider>
				<Intro />
			</body>
		</html>
	);
}

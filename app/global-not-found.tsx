// Import global styles and fonts
import './globals.css';
import { Fira_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FuzzyText } from '@/components/ui/fuzzy-text';

const primaryFont = Fira_Mono({
	weight: ['400', '500', '700'],
	variable: '--font-primary',
});

export const metadata: Metadata = {
	title: '404 - Page Not Found',
	description: 'The page you are looking for does not exist.',
};

export default function GlobalNotFound() {
	return (
		<html lang="en">
			<body
				className={`${primaryFont.variable} bg-neutral-950 text-neutral-50 font-primary overflow-x-hidden dark flex flex-col items-center justify-center min-h-dvh`}
			>
				<FuzzyText>404</FuzzyText>
				<p className="my-6 font-primary text-neutral-50/75">
					This page does not exist.
				</p>
				<Button asChild variant="outline">
					<Link href="/">Home</Link>
				</Button>
			</body>
		</html>
	);
}

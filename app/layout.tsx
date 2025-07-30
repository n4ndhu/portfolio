import type { Metadata } from 'next';
import { Fira_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';

const primaryFont = Fira_Mono({
	weight: ['400', '500', '700'],
	variable: '--font-primary',
});

export const metadata: Metadata = {
	title: 'n4ndhu',
	description: 'Personal portfolio of Nandhu',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${primaryFont.variable} bg-neutral-950 text-neutral-50 font-primary overflow-x-hidden dark`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}

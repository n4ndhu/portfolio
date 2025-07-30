import Link from 'next/link';

export const Logo = () => {
	return (
		<span className="text-2xl text-neutral-50/90 leading-none">{'(^ー^)'}</span>
	);
};

export const NavLinks = ({ link, label }: { link: string; label: string }) => {
	return (
		<Link
			href={link}
			className="inline-flex bg-neutral-950 border-neutral-50/50 text-neutral-50/90 py-2 px-4 border rounded-full leading-none text-sm"
		>
			{label}
		</Link>
	);
};

export const Header = () => {
	return (
		<section className="fixed inset-x-0 top-6 z-50">
			<header className=" max-w-7xl mx-auto flex items-center justify-between pl-6 pr-2 py-2 bg-neutral-900 border border-neutral-50/50 rounded-full">
				<Link href="/">
					<Logo />
				</Link>
				<div className="flex space-x-2">
					<NavLinks label="Work" link="/#works" />
					<NavLinks label="About" link="/" />
					<NavLinks label="Contacts" link="/#contacts" />
				</div>
			</header>
		</section>
	);
};

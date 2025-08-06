'use client';

import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import {
	motion,
	useAnimationFrame,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
} from 'motion/react';
import { useMeasure } from 'react-use';
import { cn } from '@/lib/utils';
import { FlipDotDisplay, FlipDotDisplayProps } from '../ui/flip-dot-display';
import { useCursorHover } from '@/components/ui/cursor';

const logoFaces = [
	// Neutral/Smiling faces
	'(￣▽￣)',
	'(￣ー￣)',
	'( ￣ー￣)',
	'(⌒‐⌒)',
	'(^ー^)',
	'(^_^)',
	'(^_^)', // duplicate, but kept for similarity
	'(^.^)',
	'(^。^)',
	'(^o^)',
	'(^○^)',
	// Waving/cheering faces
	'(^^)',
	'(^^)', // duplicate, but kept for similarity
	'(^^)/',
	'＼(^^)／',
	// Arms up/celebratory
	'ヽ(´ー｀)ノ',
	'ヽ(^。^)ノ',
];

const defaultLogoFace = '(^ー^)';

interface LogoProps {
	speed?: number; // Speed in milliseconds between face changes
}

export const Logo = ({ speed = 150 }: LogoProps) => {
	const [isHovering, setIsHovering] = useState(false);
	const [logoFace, setLogoFace] = useState(defaultLogoFace);
	const [, setCurrentIndex] = useState(0);
	const [lastUpdate, setLastUpdate] = useState(0);

	const handleMouseEnter = useCallback(() => setIsHovering(true), []);
	const handleMouseLeave = useCallback(() => {
		setIsHovering(false);
		setLogoFace(defaultLogoFace);
		setCurrentIndex(0);
	}, []);

	useAnimationFrame(time => {
		if (isHovering && time - lastUpdate >= speed) {
			setCurrentIndex(prevIndex => {
				const nextIndex = (prevIndex + 1) % logoFaces.length;
				setLogoFace(logoFaces[nextIndex]);
				return nextIndex;
			});
			setLastUpdate(time);
		}
	});

	return (
		<span
			className="text-base font-light text-neutral-50/90 leading-none inline-flex w-27"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			role="img"
			aria-label="Animated logo face"
		>
			{logoFace}
		</span>
	);
};

export const NavLinks = ({
	link,
	label,
	icon,
	className,
}: {
	link: string;
	label: string;
	icon?: React.ReactNode;
	className?: string;
}) => {
	const pointerHover = useCursorHover('pointer');

	return (
		<Link
			href={link}
			className={cn(
				'inline-flex bg-neutral-950 border-neutral-50/20 text-neutral-50/90 py-1 px-4 border rounded-full leading-normal text-sm items-center cursor-none',
				className
			)}
			{...pointerHover}
		>
			{icon ? <span className="mr-2">{icon}</span> : null}
			<span>{label}</span>
		</Link>
	);
};

const workIcon: FlipDotDisplayProps['frame'] = [
	[0, 1, 1, 1, 0],
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 1, 1, 1, 1],
];

const WorkIcon = () => {
	return (
		<FlipDotDisplay
			frame={workIcon}
			className="size-fit"
			cellClass="size-[2px]"
			grid={[5, 5]}
		/>
	);
};

const aboutIcon: FlipDotDisplayProps['frame'] = [
	[0, 1, 0, 1, 0],
	[1, 0, 1, 0, 1],
	[1, 0, 0, 0, 1],
	[0, 1, 0, 1, 0],
	[0, 0, 1, 0, 0],
];

const AboutIcon = () => {
	return (
		<FlipDotDisplay
			frame={aboutIcon}
			className="size-fit"
			cellClass="size-[2px]"
			grid={[5, 5]}
		/>
	);
};

const contactsIcon: FlipDotDisplayProps['frame'] = [
	[0, 1, 1, 1, 0],
	[1, 1, 0, 1, 1],
	[1, 0, 1, 0, 1],
	[1, 1, 0, 1, 1],
	[0, 1, 1, 1, 0],
];

const ContactsIcon = () => {
	return (
		<FlipDotDisplay
			frame={contactsIcon}
			className="size-fit"
			cellClass="size-[2px]"
			grid={[5, 5]}
		/>
	);
};

export const Header = () => {
	const [logoRef, { width: logoWidth }] = useMeasure<HTMLAnchorElement>();
	const [navLinksRef, { width: navLinksWidth }] = useMeasure<HTMLDivElement>();
	const [containerRef, { width: containerWidth }] =
		useMeasure<HTMLDivElement>();

	const { scrollY } = useScroll();

	const navBarWidth = useMotionValue(containerWidth);

	useEffect(() => {
		navBarWidth.set(containerWidth);
	}, [containerWidth]);

	useMotionValueEvent(scrollY, 'change', latest => {
		const minWidth = logoWidth + navLinksWidth + 40;
		const maxWidth = containerWidth;
		const scrollDistanceForMaxWidth = window.innerHeight;

		if (latest <= 0) {
			navBarWidth.set(maxWidth);
		} else if (latest >= scrollDistanceForMaxWidth) {
			navBarWidth.set(minWidth);
		} else {
			const progress = latest / scrollDistanceForMaxWidth;
			const interpolatedWidth = maxWidth - (maxWidth - minWidth) * progress;
			navBarWidth.set(interpolatedWidth);
		}
	});

	return (
		<section
			className={cn(
				'fixed inset-x-0 top-6 z-50 transition opacity-0 duration-150',
				{
					'opacity-100': containerWidth,
				}
			)}
		>
			<div className="layout-container" ref={containerRef}>
				<motion.header
					className="flex items-center justify-between pl-4 pr-2 py-2 bg-neutral-900/90 backdrop-blur-lg border border-neutral-50/10 rounded-full"
					style={{
						width: navBarWidth,
					}}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
					}}
				>
					<Link
						href="/"
						className="active:scale-95 origin-left transition-all duration-50 scale-100 transform cursor-none"
						ref={logoRef}
						{...useCursorHover('pointer')}
					>
						<Logo />
					</Link>
					<div className="flex space-x-2" ref={navLinksRef}>
						<NavLinks
							label="Work"
							link="/#works"
							icon={<WorkIcon />}
							className="pl-3"
						/>
						<NavLinks
							label="About"
							link="/"
							icon={<AboutIcon />}
							className="pl-3"
						/>
						<NavLinks
							label="Contacts"
							link="/#contacts"
							icon={<ContactsIcon />}
							className="pl-3"
						/>
					</div>
				</motion.header>
			</div>
		</section>
	);
};

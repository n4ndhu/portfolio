'use client';
import { arrowDown7x7 } from '@/components/ui/flip-dot-display-frames';
import { FlipDotDisplayAnimation } from '@/components/ui/flip-dot-display';
import { TextScramble } from '@/components/ui/text-scramble';
import { HeroCircle } from './hero-circle';
import { motion } from 'motion/react';
import { useCursorHover } from '@/components/ui/cursor';

export const Hero = () => {
	const skills = [
		'Web Development',
		'UI/UX Design',
		'SEO',
		'Performance Optimization',
	];

	const useTextHover = useCursorHover('text');

	return (
		<>
			<div className="relative isolate overflow-visible min-h-dvh flex flex-col">
				<div className="hidden sm:block">
					<HeroCircle
						className="absolute w-[50%] top-[30%] -left-[20%]"
						direction="clockwise"
						speed={60}
					/>
					<HeroCircle
						className="absolute w-[50%] -top-[30%] -right-[20%]"
						direction="clockwise"
						speed={60}
					/>
				</div>

				<div className="layout-container my-auto flex flex-col justify-center w-full ">
					<motion.h1
						className="sm:text-4xl text-2xl font-bold mb-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 0.5,
							delay: 0 * 0.1,
							ease: 'easeOut',
						}}
					>
						<div {...useTextHover}>
							{'// '}
							<TextScramble as={'span'}>Hi.! I'm Nandhu </TextScramble>
						</div>
					</motion.h1>
					<motion.p
						className="sm:text-xl text-base"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 0.5,
							delay: 1 * 0.1,
							ease: 'easeOut',
						}}
					>
						<span className="block mb-3 sm:mb-0" {...useTextHover}>
							<TextScramble as={'span'} duration={1}>
								I’ve been building websites for 10 years, mostly focusing on the
								frontend where things take shape.
							</TextScramble>
						</span>
						<span {...useTextHover}>
							<TextScramble as={'span'} duration={1}>
								I enjoy creating clean, usable interfaces that feel natural to
								interact with.
							</TextScramble>
						</span>
					</motion.p>
				</div>
				<div className="pb-6 ">
					<div className="layout-container space-x-2 relative">
						{skills.map((skill, index) => {
							return (
								<motion.span
									className="inline-flex px-2 py-0.5 rounded-xs border border-neutral-50/20 text-xs sm:text-sm mt-2 sm:mt-0"
									key={skill}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									{...useTextHover}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
										ease: 'easeOut',
									}}
								>
									{skill}
								</motion.span>
							);
						})}

						<motion.div
							className="absolute bottom-0 sm:right-0 right-4"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.5,
								delay: skills.length * 0.1,
								ease: 'easeOut',
							}}
						>
							<FlipDotDisplayAnimation
								className="size-fit"
								{...arrowDown7x7}
								minOpacity={0.05}
								cellClass="rounded-[2px] size-[3px]"
							/>
						</motion.div>
					</div>
					<div className="border-t border-dashed border-neutral-50/25 my-3"></div>
					<div className="sm:text-sm text-xs layout-container leading-none">
						<motion.span
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.5,
								ease: 'easeOut',
							}}
							className="inline-flex flex-col w-fit"
							{...useTextHover}
						>
							Based on Bangalore, India
						</motion.span>
					</div>
				</div>
			</div>
		</>
	);
};

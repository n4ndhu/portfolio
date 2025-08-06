'use client';
import { arrowDown7x7 } from '../ui/flip-dot-display-frames';
import { FlipDotDisplayAnimation } from '../ui/flip-dot-display';
import { TextScramble } from '../ui/text-scramble';
import { HeroCircle } from './hero-circle';
import { useState } from 'react';

export const Hero = () => {
	const skills = [
		'Web Development',
		'UI/UX Design',
		'SEO',
		'Performance Optimization',
	];

	return (
		<>
			<div className="relative isolate overflow-visible min-h-dvh flex flex-col">
				<div>
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
					<h1 className="text-4xl font-bold mb-6">
						{'// '}
						<TextScramble as={'span'}>Hi.! I'm Nandhu </TextScramble>
					</h1>
					<p className="text-xl">
						<span className="block">
							<TextScramble as={'span'} duration={3}>
								I’ve been building websites for 10 years, mostly focusing on the
								frontend where things take shape.
							</TextScramble>
						</span>
						<TextScramble as={'span'} duration={3}>
							I enjoy creating clean, usable interfaces that feel natural to
							interact with.
						</TextScramble>
					</p>
				</div>
				<div className="pb-6 ">
					<div className="layout-container space-x-2 relative">
						{skills.map(skill => {
							return (
								<span
									className="inline-flex px-4 py-1 rounded-full border border-neutral-50/50 text-sm"
									key={skill}
								>
									{skill}
								</span>
							);
						})}

						<div className="absolute bottom-0 right-0">
							<FlipDotDisplayAnimation
								className="size-fit"
								{...arrowDown7x7}
								minOpacity={0.05}
								cellClass="rounded-[2px] size-[3px]"
							/>
						</div>
					</div>
					<div className="border-t border-dashed border-neutral-50/25 my-3"></div>
					<div className="text-sm layout-container leading-none">
						Based on Bangalore India
					</div>
				</div>
			</div>
		</>
	);
};

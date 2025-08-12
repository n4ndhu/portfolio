'use client';
import { TextScramble } from '@/components/ui/text-scramble';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
	FlipDotDisplay,
	FlipDotDisplayAnimation,
} from '@/components/ui/flip-dot-display';
import {
	FlipDotDisplayIcon,
	heart5x5,
	trendUp20x12,
	trendUp20x12Frame,
} from '@/components/ui/flip-dot-display-frames';

const linkedinIcon11x11: FlipDotDisplayIcon['frame'] = [
	[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
	[1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
	[1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
	[1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
	[1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
	[1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
];
const instagramIcon11x11: FlipDotDisplayIcon['frame'] = [
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
	[1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
	[1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
	[1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
	[1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
	[1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
];

const githubIcon11x11: FlipDotDisplayIcon['frame'] = [
	[0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
	[0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
	[1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
	[0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
];

export const Footer = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const currentYear = new Date().getFullYear();

	return (
		<footer
			className="border-t border-dashed border-neutral-50/5"
			id="contacts"
		>
			<div className="layout-container py-6 pb-4 sm:py-16">
				<div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-12">
					{/* Left Section - Main Content */}
					<div className="lg:col-span-2">
						<div className="mb-8">
							<div
								className="flex items-center mb-4 sm:mb-6 sm:grid sm:grid-cols-2"
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								<div className="sm:pl-6">
									<h2 className="sm:text-2xl text-lg font-bold text-white mb-2">
										{'// '}
										<TextScramble as={'span'}>Let&apos;s build</TextScramble>
									</h2>
									<h3 className="sm:text-2xl text-lg font-bold text-white">
										<TextScramble as={'span'}>Something great</TextScramble>
									</h3>
								</div>
								<div className="sm:ml-4 ml-3 sm:mr-auto">
									<div className="h-fit w-fit">
										<FlipDotDisplayAnimation
											className="ml-2 aspect-[20/12]"
											cellClass="sm:w-[4px] w-[3px]"
											minOpacity={0.05}
											frames={
												isHovered ? trendUp20x12.frames : [trendUp20x12Frame]
											}
											fps={trendUp20x12.fps}
											grid={trendUp20x12.grid}
										/>
									</div>
								</div>
							</div>

							{/* Hire Me Button */}
							<Button
								variant="outline"
								className="w-25 cursor-pointer mx-auto sm:ml-6"
								asChild
							>
								<a href="mailto:n4ndhu@gmail.com">Hire Me</a>
							</Button>

							{/* Social Media Icons */}
							<div className="flex space-x-4 mt-8 sm:mt-8 justify-center sm:justify-start sm:pl-6">
								<a
									href="https://www.linkedin.com/in/n4ndhu/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-neutral-300 transition-colors"
								>
									<FlipDotDisplay
										frame={linkedinIcon11x11}
										grid={[11, 11]}
										cellClass="w-[1px]"
									/>
								</a>

								<a
									href="https://www.instagram.com/n4ndhu/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-neutral-300 transition-colors"
								>
									<FlipDotDisplay
										frame={instagramIcon11x11}
										grid={[11, 11]}
										cellClass="w-[1px]"
									/>
								</a>

								<a
									href="https://github.com/n4ndhu"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-neutral-300 transition-colors"
								>
									<FlipDotDisplay
										frame={githubIcon11x11}
										grid={[11, 11]}
										cellClass="w-[1px]"
									/>
								</a>
							</div>
						</div>
					</div>

					{/* Right Section - Contact Info */}
					<div className="sm:col-span-1 grid grid-cols-1 gap-1 justify-center items-center sm:h-fit sm:pr-6">
						<div className="sm:text-right text-center">
							<h4 className="text-white font-mono mb-2 text-sm sm:text-base">
								Contact Me
							</h4>
							<p className="text-white font-mono mb-6 text-sm sm:text-base">
								<a
									href="mailto:n4ndhu@gmail.com"
									className="underline decoration-dotted underline-offset-8 decoration-neutral-50/50 hover:decoration-neutral-50/100 transition-all duration-300"
								>
									n4ndhu@gmail.com
								</a>
							</p>
						</div>
						<div className="sm:text-right text-center">
							{/* Download CV Button */}
							<Button variant="outline" asChild>
								<a
									href="https://drive.google.com/file/d/1VJzHMCajTBfFotxKT-TJ1Vv-kufqn8Nv/view"
									target="_blank"
								>
									<svg
										className="w-4 h-4 mr-2"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 16l-5-5h3V4h4v7h3l-5 5z" />
										<path d="M20 18H4v-2h16v2z" />
									</svg>
									Download CV
								</a>
							</Button>
						</div>
					</div>
				</div>

				{/* Bottom Border */}
			</div>
			<div className="border-t border-dashed border-neutral-50/5 pt-8 pb-8">
				<div className="layout-container">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-neutral-400 text-sm ml-2">
							© {currentYear} Nandhu. All rights reserved.
						</p>
						<div className="text-neutral-400 text-sm mt-2 md:mt-0 inline-flex items-center">
							Built with{' '}
							<FlipDotDisplayAnimation
								className="ml-2 mr-2"
								cellClass="w-[3px]"
								rgb="225 29 72"
								{...heart5x5}
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

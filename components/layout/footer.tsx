'use client';
import { Linkedin, Instagram, Github } from 'lucide-react';
import { TextScramble } from '@/components/ui/text-scramble';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FlipDotDisplayAnimation } from '@/components/ui/flip-dot-display';
import {
	heart5x5,
	trendUp20x12,
} from '@/components/ui/flip-dot-display-frames';

export const Footer = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [isTrigger, setIsTrigger] = useState(false);

	const handleMouseEnter = () => {
		setIsTrigger(true);
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsTrigger(true);
		setIsHovered(false);
	};

	let currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-dashed border-neutral-800" id="contacts">
			<div className="layout-container py-16">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Left Section - Main Content */}
					<div className="lg:col-span-2">
						<div className="mb-8">
							<div
								className="flex items-center mb-6"
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								<div>
									<h2 className="text-3xl font-bold text-white mb-2 font-mono">
										{'// '}
										<TextScramble as={'span'}>Let's build</TextScramble>
									</h2>
									<h3 className="text-3xl font-bold text-white font-mono">
										<TextScramble as={'span'}>Something great</TextScramble>
									</h3>
								</div>
								<div className="ml-4 ">
									<div className="h-fit w-fit">
										<FlipDotDisplayAnimation
											className="ml-2 aspect-[20/12]"
											cellClass="w-[4px]"
											minOpacity={0.05}
											frames={
												isHovered
													? trendUp20x12.frames
													: [
															trendUp20x12.frames![
																trendUp20x12.frames!.length - 1
															],
														]
											}
											fps={trendUp20x12.fps}
											grid={trendUp20x12.grid}
										/>
									</div>
								</div>
							</div>

							{/* Hire Me Button */}
							<Button variant="outline" className="w-25 cursor-pointer" asChild>
								<a href="mailto:n4ndhu@gmail.com">Hire Me</a>
							</Button>

							{/* Social Media Icons */}
							<div className="flex space-x-4 mt-8">
								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-neutral-300 transition-colors"
								>
									<Linkedin className="size-6" />
								</a>

								<a
									href="https://instagram.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-neutral-300 transition-colors"
								>
									<Instagram className="size-6" />
								</a>

								<a
									href="https://github.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-neutral-300 transition-colors"
								>
									<Github className="size-6" />
								</a>
							</div>
						</div>
					</div>

					{/* Right Section - Contact Info */}
					<div className="lg:col-span-1">
						<div className="text-right">
							<h4 className="text-white font-mono mb-2">Contact Me</h4>
							<p className="text-white font-mono mb-6">
								<a
									href="mailto:n4ndhu@gmail.com"
									className="underline decoration-dotted underline-offset-8 decoration-neutral-50/50 hover:decoration-neutral-50/100 transition-all duration-300"
								>
									n4ndhu@gmail.com
								</a>
							</p>

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
			<div className="border-t border-dashed border-neutral-800 pt-8 pb-8">
				<div className="layout-container">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-neutral-400 text-sm">
							© {currentYear} Nandhu. All rights reserved.
						</p>
						<div className="text-neutral-400 text-sm mt-2 md:mt-0 inline-flex items-center">
							Built with{' '}
							<FlipDotDisplayAnimation
								className="ml-2"
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

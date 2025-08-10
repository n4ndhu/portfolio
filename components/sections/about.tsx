'use client';

import { HeroCircle } from './hero-circle';
import { AboutArrowD, AboutDotPathD, ASCII_ART } from './about-hero-values';
import { TextScramble } from '@/components/ui/text-scramble';
import { TextReveal } from '@/components/ui/text-reveal';
import { StackedCarousel } from '@/components/ui/stacked-carousel';
import { motion } from 'motion/react';
import MountainSnow from '@/public/clicks/mountain-snow.jpg';
import MountainSunSet from '@/public/clicks/mountain-sunset.jpg';
import Forest from '@/public/clicks/forest.jpg';
import Tree from '@/public/clicks/tree.jpg';
import BirdSunSet from '@/public/clicks/bird-sunset.jpg';

const aboutImages = [
	{
		src: MountainSnow,
		alt: 'Manali Mountain',
	},
	{
		src: MountainSunSet,
		alt: 'Manali Mountain',
	},
	{
		src: Forest,
		alt: 'Jibhi',
	},
	{
		src: Tree,
		alt: 'Kodaikanal',
	},
	{
		src: BirdSunSet,
		alt: 'Kochi',
	},
];

export const AsciiProfilePic = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="size-fit overflow-hidden sm:text-[7px] text-[3px] select-none leading-none text-black bg-neutral-50/10 text-right"
		>
			<pre>{ASCII_ART}</pre>
		</motion.div>
	);
};

export const AboutDotPattern = () => {
	return (
		<div className="absolute w-[40%] right-0 top-0">
			<motion.svg
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.25 }}
				className="size-full"
				viewBox="0 0 305 305"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d={AboutDotPathD} fill="#FAFAFA" fillOpacity=".3" />
			</motion.svg>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				className="aspect-square w-1/2 bg-neutral-50/10 top-full right-full absolute"
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.75 }}
					className="aspect-square w-full bg-neutral-50/5 top-[110%] right-[110%] absolute"
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="h-[30%] w-[300%] bg-neutral-50/10 -top-[20%] left-1/2 absolute"
					></motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export const AboutArrow = () => {
	return (
		<div className="absolute w-30 top-[120%] left-1/2 ">
			<svg
				className="w-full"
				viewBox="0 0 140 382"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d={AboutArrowD} fill="#FAFAFA" fillOpacity=".5" />
			</svg>
		</div>
	);
};

export const About = () => {
	return (
		<>
			<div className="relative isolate">
				<div className="hidden sm:block">
					<HeroCircle
						className="absolute w-[60%] -top-[30%] -right-[20%]"
						direction="clockwise"
						speed={60}
					/>
				</div>
				<section className="pt-28 layout-container">
					<div className="grid sm:grid-cols-2 grid-cols-1 relative items-center">
						<div className="flex sm:justify-end">
							<AsciiProfilePic />
						</div>
						<div className="relative h-full flex flex-col justify-center">
							<AboutDotPattern />
							<div className="absolute text-5xl bottom-0 right-0 text-neutral-50/30 font-medium">
								<motion.span
									animate={{ opacity: [0.4, 1, 0.7, 1] }}
									transition={{ duration: 20, delay: 0.25, repeat: Infinity }}
								>
									/
								</motion.span>
								<span>/</span>
							</div>
							<h1 className="text-5xl font-medium transform sm:-translate-x-8 translate-x-3 text-neutral-50/90 relative inline-flex w-fit">
								<TextScramble>ABOUT ME</TextScramble>
								<AboutArrow />
							</h1>
							<div className="aspect-square sm:hidden"></div>
						</div>
					</div>
				</section>
			</div>
			<div className="layout-container">
				<div className="py-10 sm:py-32 grid sm:grid-cols-4 grid-cols-1 sm:gap-0 gap-4 relative">
					<div className="sm:text-3xl text-xl  mx-auto font-medium sm:col-span-3 col-span-1">
						<TextReveal>
							Hey, I&apos;m Nandhu a web developer with 10 years of experience
							building websites, writing code, and occasionally breaking things
							(on purpose, for learning). I love clean frontends, meaningful
							interactions, and yes, I unapologetically prefer dark mode. White
							mode? Let&apos;s not go there. Maybe I&apos;m part vampire.
						</TextReveal>

						<TextReveal>
							I was born in Kerala, India, and currently live in Bangalore with
							my wife and mother. When I&apos;m not coding, I&apos;m probably
							somewhere in the mountains or scrolling through the photos I took
							on my phone—none of which are award-winning, but a few made it
							onto this page just for fun. No hidden meanings, just vibes.
						</TextReveal>
						<TextReveal>
							I&apos;ve worked on some pretty interesting projects over the
							years and had the chance to mentor aspiring developers along the
							way. I take pride in what I build and am always looking for the
							next challenge—or just the next cool thing to learn.
						</TextReveal>
						<TextReveal>
							Staying updated with the ever-changing web world isn’t easy, but I
							try to keep up (and sometimes even ahead). Thanks for dropping by.
						</TextReveal>
						<TextReveal className="rotate-90 inline-flex w-fit">:)</TextReveal>
					</div>
					<div className="pt-10 sm:pt-20 pb-10 sm:pb-0">
						<div className="sm:sticky sm:top-30 flex flex-col items-center">
							<StackedCarousel
								images={aboutImages}
								className="w-full max-w-56 mx-auto sm:mx-0 block"
								maxRotation={6}
							/>

							<div className="text-left text-xs text-neutral-50/20 mt-10">
								Psst! You can drag the images ;)
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

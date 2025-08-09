'use client';

import { HeroCircle } from './hero-circle';
import { AboutArrowD, AboutDotPathD, ASCII_ART } from './about-hero-values';
import { TextScramble } from '@/components/ui/text-scramble';
import { TextReveal } from '@/components/ui/text-reveal';
import { StackedCarousel } from '@/components/ui/stacked-carousel';
import { motion } from 'motion/react';

import Image1 from '@/public/img/click-1.jpeg';
import Image2 from '@/public/img/click-2.jpeg';
import Image3 from '@/public/img/click-3.jpeg';
import Image4 from '@/public/img/click-4.jpeg';
import Image5 from '@/public/img/click-5.jpeg';
import Image6 from '@/public/img/click-6.jpeg';
import Image7 from '@/public/img/click-7.jpeg';
import Image8 from '@/public/img/click-8.jpeg';
import Image9 from '@/public/img/click-9.jpeg';
import Image10 from '@/public/img/click-10.jpeg';
import Image11 from '@/public/img/click-11.jpeg';
import Image12 from '@/public/img/click-12.jpeg';
import Image13 from '@/public/img/click-13.jpeg';
import Image14 from '@/public/img/click-14.jpeg';
import Image15 from '@/public/img/click-15.jpeg';
import Image16 from '@/public/img/click-16.jpeg';
import Image17 from '@/public/img/click-17.jpeg';
import Image18 from '@/public/img/click-18.jpeg';

const aboutImages = [
	{
		src: Image7,
		alt: 'Click 7',
	},
	{
		src: Image2,
		alt: 'Click 2',
	},
	{
		src: Image3,
		alt: 'Click 3',
	},
	{
		src: Image4,
		alt: 'Click 4',
	},
	{
		src: Image5,
		alt: 'Click 5',
	},
	{
		src: Image6,
		alt: 'Click 6',
	},

	{
		src: Image8,
		alt: 'Click 8',
	},
	{
		src: Image9,
		alt: 'Click 9',
	},
	{
		src: Image10,
		alt: 'Click 10',
	},
	{
		src: Image11,
		alt: 'Click 11',
	},
	{
		src: Image12,
		alt: 'Click 12',
	},
	{
		src: Image1,
		alt: 'Click 1',
	},
	{
		src: Image13,
		alt: 'Click 13',
	},
	{
		src: Image14,
		alt: 'Click 14',
	},
	{
		src: Image15,
		alt: 'Click 15',
	},
	{
		src: Image16,
		alt: 'Click 16',
	},
	{
		src: Image17,
		alt: 'Click 17',
	},
	{
		src: Image18,
		alt: 'Click 18',
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
				<div className="py-10 sm:py-32 grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-4 relative">
					<div className="sm:text-3xl text-xl  mx-auto font-medium sm:col-span-2 col-span-1">
						<TextReveal>
							Hey, I'm Nandhu a web developer with 10 years of experience
							building websites, writing code, and occasionally breaking things
							(on purpose, for learning). I love clean frontends, meaningful
							interactions, and yes, I unapologetically prefer dark mode. White
							mode? Let's not go there. Maybe I'm part vampire.
						</TextReveal>

						<TextReveal>
							I was born in Kerala, India, and currently live in Bangalore with
							my wife and mother. When I'm not coding, I'm probably somewhere in
							the mountains or scrolling through the photos I took on my
							phone—none of which are award-winning, but a few made it onto this
							page just for fun. No hidden meanings, just vibes.
						</TextReveal>
						<TextReveal>
							I've worked on some pretty interesting projects over the years and
							had the chance to mentor aspiring developers along the way. I take
							pride in what I build and am always looking for the next
							challenge—or just the next cool thing to learn.
						</TextReveal>
						<TextReveal>
							Staying updated with the ever-changing web world isn’t easy, but I
							try to keep up (and sometimes even ahead). Thanks for dropping by.
						</TextReveal>
						<TextReveal className="rotate-90 inline-flex w-fit">:)</TextReveal>
					</div>
					<div className="pt-10 sm:pt-20 pb-10 sm:pb-0">
						<div className="sm:sticky sm:top-30 ">
							<StackedCarousel
								images={aboutImages}
								className="w-full max-w-56 mx-auto sm:mx-0"
								maxRotation={6}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

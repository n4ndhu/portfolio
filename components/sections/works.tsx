'use client';
import { Project, ProjectCard } from './project-card';
import { TextScramble } from '@/components/ui/text-scramble';
import Image, { StaticImageData } from 'next/image';

import AixelScreenshot from '@/public/screenshots/aixel.jpg';
import OpenMoneyScreenshot from '@/public/screenshots/open-money.jpg';
import ZwitchScreenshot from '@/public/screenshots/zwitch.jpg';
import LayerScreenshot from '@/public/screenshots/layer.jpg';

import AixelLogo from '@/public/logos/aixel.png';
import OpenMoneyLogo from '@/public/logos/open.png';
import ZwitchLogo from '@/public/logos/zwitch.png';

import OptotaxLogo from '@/public/logos/optotax.png';
import BankConnectLogo from '@/public/logos/bank-connect.png';
import BlueSkyLogo from '@/public/logos/bluesky.png';
import DLinkLogo from '@/public/logos/dlink.png';
import SubdineLogo from '@/public/logos/subdine.png';
import { motion } from 'motion/react';

const projects: Project[] = [
	{
		id: 'aixel',
		title: 'Aixel.io',
		description:
			'A tool we built to make marketing smarter-by getting Meta and Google ads to actually play nice.',
		imageUrl: AixelScreenshot,
		logoUrl: AixelLogo,
		tags: ['Marketing', 'Analytics', 'Ads'],
		link: 'https://aixel.io',
		hideTitle: true,
	},
	{
		id: 'open-money',
		title: 'Open.money',
		description:
			'A connected banking platform that simplifies business payments and makes cash flow management effortless.',
		imageUrl: OpenMoneyScreenshot,
		logoUrl: OpenMoneyLogo,
		tags: ['Banking', 'Payments', 'Fintech'],
		link: 'https://open.money',
		hideTitle: true,
	},
	{
		id: 'zwitch',
		title: 'Zwitch.io',
		description:
			'A banking-as-a-service platform built to plug financial services into products effortlessly.',
		imageUrl: ZwitchScreenshot,
		logoUrl: ZwitchLogo,
		tags: ['BaaS', 'Payments', 'API'],
		link: 'https://zwitch.io',
		hideTitle: true,
	},
	{
		id: 'layer',
		title: 'Layer',
		description:
			'A payment gateway SDK that helps merchants easily integrate secure payments into their websites.',
		imageUrl: LayerScreenshot,
		tags: ['SDK', 'Payments', 'E-commerce'],
	},
];

const moreProjects: {
	logoUrl: StaticImageData;
	title: string;
	description: string;
}[] = [
	{
		logoUrl: OptotaxLogo,
		title: 'Optotax',
		description:
			'A tax-tech platform that brings GST reconciliation, notice and challan management, and return filing together in one smooth',
	},
	{
		logoUrl: BankConnectLogo,
		title: 'Bank Connect',
		description:
			'A banking-as-a-service platform built to plug financial services into products effortlessly.',
	},
	{
		logoUrl: BlueSkyLogo,
		title: 'Bluesky ',
		description:
			'An all-in-one platform offering ERP, CRM, HRMS, sales, logistics, and more—built to help businesses manage everything in one place.',
	},
	{
		logoUrl: DLinkLogo,
		title: 'D-Link Mea',
		description:
			'Built the D-Link Middle East & Africa website, complete with a CMS',
	},
	{
		logoUrl: SubdineLogo,
		title: 'Subdine',
		description:
			'A restaurant management platform that takes care of billing, inventory, menus, kitchen ops, and staff',
	},
];

export const Works = () => {
	return (
		<section className="pt-10 pb-5 sm:pb-10 relative z-10" id="works">
			<div className="border-t border-dashed border-neutral-50/5 pb-16"></div>
			<div className="layout-container">
				<div className="mb-8 sm:mb-16 sm:w-1/2 sm:px-6">
					<h2 className="sm:text-4xl text-2xl font-bold mb-4">
						{'// '}
						<TextScramble as={'span'}>Selected Works !</TextScramble>
					</h2>
					<p className="text-neutral-400 sm:text-base text-sm">
						<TextScramble as={'span'}>A few things I’ve built</TextScramble>
						<TextScramble as={'span'} className="block">
							(with my team, solo, and always with heart).
						</TextScramble>
					</p>
				</div>

				<div className="grid grid-cols-1 sm:gap-px gap-2">
					{projects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
			<div className="border-y border-dashed border-neutral-50/5 mt-8 pt-4 pb-6  relative isolate">
				<div className="absolute inset-0 bg-neutral-950 -z-10"></div>
				<div className="layout-container flex flex-col items-center justify-center">
					<div className="text-sm text-neutral-50/80 mb-4">
						And some more ...
					</div>

					<div className="flex items-center flex-wrap space-x-8 justify-center">
						{moreProjects.map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="inline-flex w-fit"
							>
								<Image
									src={project.logoUrl}
									alt={project.title}
									key={index}
									className="sm:h-5 h-3 min-w-fit w-fit max-w-fit mb-4 sm:mb-0 sm:grayscale-100 hover:grayscale-0 transition-all duration-300"
								/>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

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
		<section className="pt-26 pb-20 px-4" id="works">
			<div className="layout-container">
				<div className="mb-16">
					<h2 className="text-4xl font-bold mb-4">
						{'// '}
						<TextScramble as={'span'}>Selected Works !</TextScramble>
					</h2>
					<p className="text-neutral-400 text-lg">
						<TextScramble as={'span'}>
							A few things I’ve built (some with my team, some on my own—and all
							with a lot of love).
						</TextScramble>
					</p>
				</div>

				<div className="grid grid-cols-1 gap-px max-w-6xl">
					{projects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>

				<div className="text-sm text-neutral-50/80 mt-8 mb-4">
					And some more ...
				</div>

				<div className="flex items-center flex-wrap space-x-8">
					{moreProjects.map(project => (
						<Image
							src={project.logoUrl}
							alt={project.title}
							className="h-5 min-w-fit w-fit max-w-fit grayscale-100 hover:grayscale-0 transition-all duration-300"
						/>
					))}
				</div>
			</div>
		</section>
	);
};

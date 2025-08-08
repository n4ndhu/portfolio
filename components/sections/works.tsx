import { ProjectCard } from './project-card';
import { TextScramble } from '@/components/ui/text-scramble';

export interface Project {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	tags: string[];
}

const projects: Project[] = [
	{
		id: 'aixel',
		title: 'Aixel.io',
		description:
			'A tool we built to make marketing smarter-by getting Meta and Google ads to actually play nice.',
		imageUrl: 'https://placehold.co/600x400?text=Aixel.io',
		tags: ['Marketing', 'Analytics', 'Ads'],
	},
	{
		id: 'open-money',
		title: 'Open.money',
		description:
			'A connected banking platform that simplifies business payments and makes cash flow management effortless.',
		imageUrl: 'https://placehold.co/600x400?text=Open.money',
		tags: ['Banking', 'Payments', 'Fintech'],
	},
	{
		id: 'zwitch',
		title: 'Zwitch.io',
		description:
			'A banking-as-a-service platform built to plug financial services into products effortlessly.',
		imageUrl: 'https://placehold.co/600x400?text=Zwitch.io',
		tags: ['BaaS', 'Payments', 'API'],
	},
	{
		id: 'layer',
		title: 'Layer',
		description:
			'A payment gateway SDK that helps merchants easily integrate secure payments into their websites.',
		imageUrl: 'https://placehold.co/600x400?text=Layer',
		tags: ['SDK', 'Payments', 'E-commerce'],
	},
];

export const Works = () => {
	return (
		<section className="py-20 px-4" id="works">
			<div className="max-w-7xl mx-auto">
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

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

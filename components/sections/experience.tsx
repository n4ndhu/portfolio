'use client';
import { TextScramble } from '@/components/ui/text-scramble';
import { ExperienceCard } from './experience-card';
import { useCursorHover } from '@/components/ui/cursor';

export interface Experience {
	id: string;
	dates: string;
	title: string;
	company: string;
	description: string;
}

const experiences: Experience[] = [
	{
		id: 'aixel',
		dates: 'Nov 2024 - Present',
		title: 'CO & Lead Engineer',
		company: 'Aixel - Bubble Data Private Limited Technologies',
		description:
			'Working on a digital marketing tool that helps Meta and Google ads perform better. Built the core frontend, shaped the UX, and developed tools to make marketing analytics and ad optimization a lot less painful.',
	},
	{
		id: 'open',
		dates: 'Feb 2019 - Nov 2024',
		title: 'Associate Director of Engineering',
		company: 'Open Financial Technologies Pvt Ltd',
		description:
			'Led the frontend for Open.money and Zwitch.io-platforms that made banking and payments less of a headache for businesses. Built a payment gateway SDK, plugged in bank integrations, and scaled a team of 35+ engineers while keeping the products secure, fast, and user-friendly.',
	},
	{
		id: 'subdine',
		dates: 'Nov 2017 - Jan 2019',
		title: 'Full Stack Developer',
		company: 'Subdine Solutions Pvt Ltd',
		description:
			'Worked on a POS system with hardware integration and restaurant tools. Built features across the stack to keep things simple and smooth for people actually running the restaurants.',
	},
	{
		id: 'cumulus',
		dates: 'Jun 2015 - Nov 2017',
		title: 'Software Engineer',
		company: 'Cumulus Softwares Pvt Ltd',
		description:
			'Built ERP and CRM frontends. Delivered websites for clients like D-Link, Ticket Magic, Hilti, and Pingsecure.',
	},
];

export const Experience = () => {
	const useTextHover = useCursorHover('text');
	return (
		<>
			<section className="pt-6 sm:pt-6">
				<div className="layout-container">
					<div className="mb-16 sm:w-1/2 sm:px-6">
						<h2 className="text-2xl sm:text-4xl font-bold mb-4 block">
							<span className="w-fit" {...useTextHover}>
								{'// '}
								<TextScramble as={'span'}>Experience !</TextScramble>
							</span>
						</h2>
						<p className="text-neutral-400 sm:text-base text-sm">
							<span className="w-fit" {...useTextHover}>
								<TextScramble as={'span'}>
									A snapshot of my 10-year journey—leading teams.
								</TextScramble>
							</span>
						</p>
					</div>
				</div>
			</section>
			<section className="pb-6 sm:pb-10 border-t ">
				<div className="layout-container">
					<div className="relative grid sm:grid-cols-4 grid-cols-1">
						<div className="sm:col-span-3 col-span-1">
							{experiences.map((experience, index) => (
								<ExperienceCard
									key={experience.id}
									experience={experience}
									isLast={index === experiences.length - 1}
									isFirst={index === 0}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

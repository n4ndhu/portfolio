'use client';
import { Experience } from './experience';
import { useCursorHover } from '../ui/cursor';

interface ExperienceCardProps {
	experience: Experience;
	isLast: boolean;
}

export const ExperienceCard = ({ experience, isLast }: ExperienceCardProps) => {
	const useTextHover = useCursorHover('text');
	return (
		<>
			<div className="relative mb-10 sm:mb-0">
				<div className="absolute left-[25%] top-0 bottom-0 w-px border-l border-dashed border-neutral-50/25 hidden sm:block"></div>
				<div className="relative grid sm:grid-cols-4 grid-cols-1">
					<div className="border-b border-dotted sm:border-0 pb-2 sm:pb-0 mb-4 sm:mb-0">
						<span
							className="font-medium text-sm text-neutral-50/75 block sm:inline"
							{...useTextHover}
						>
							{experience.dates}
						</span>
					</div>

					<div className="sm:col-span-3 col-span-1 sm:pl-6">
						<h3
							className="font-medium text-xs sm:text-sm text-neutral-50/75 mb-1"
							{...useTextHover}
						>
							{experience.title}
						</h3>
						<p
							className="text-neutral-50 text-sm sm:text-base font-medium sm:mb-1 mb-4"
							{...useTextHover}
						>
							{experience.company}
						</p>

						<p className="text-neutral-50/75 leading-relaxed sm:text-sm text-xs">
							{experience.description}
						</p>
					</div>
				</div>
				{!isLast && (
					<div className="py-8 hidden sm:block">
						<div className="border-b border-dashed border-neutral-50/25 col-span-4"></div>
					</div>
				)}
			</div>
		</>
	);
};

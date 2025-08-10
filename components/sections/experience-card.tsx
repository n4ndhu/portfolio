'use client';
import { Experience } from './experience';
import { useCursorHover } from '../ui/cursor';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
	experience: Experience;
	isLast: boolean;
	isFirst: boolean;
}

export const ExperienceCard = ({
	experience,
	isLast,
	isFirst,
}: ExperienceCardProps) => {
	const useTextHover = useCursorHover('text');
	return (
		<>
			<div className={cn('relative mb-10 sm:mb-0', isFirst && 'pt-10')}>
				<div
					className={cn(
						'absolute left-[33.33%] top-0 w-px border-l border-dashed border-neutral-50/10 hidden sm:block',
						!isLast ? 'bottom-0' : '-bottom-10'
					)}
				></div>
				<div className="relative grid sm:grid-cols-3 grid-cols-1">
					<div className="border-b border-dotted sm:border-0 pb-2 sm:pb-0 mb-4 sm:mb-0 sm:pl-8">
						<span
							className="font-medium text-sm text-neutral-50/75 block sm:inline"
							{...useTextHover}
						>
							{experience.dates}
						</span>
					</div>

					<div className="sm:col-span-2 col-span-1 sm:pl-6 sm:pr-6">
						<h3
							className="font-normal text-xs sm:text-sm text-neutral-50/75 mb-1"
							{...useTextHover}
						>
							{experience.title}
						</h3>
						<p
							className="text-neutral-50 text-sm sm:text-base font-medium sm:mb-2 mb-4"
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
						<div className="border-b border-dashed border-neutral-50/10 col-span-3"></div>
					</div>
				)}
			</div>
		</>
	);
};

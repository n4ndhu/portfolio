import { Experience } from './experience';

interface ExperienceCardProps {
	experience: Experience;
	isLast: boolean;
}

export const ExperienceCard = ({ experience, isLast }: ExperienceCardProps) => {
	return (
		<>
			<div className='relative'>
				<div className='absolute left-[25%] top-0 bottom-0 w-px border-l border-dashed border-neutral-50/25'></div>
				<div className="relative grid grid-cols-4">
					<div>
						<span className="font-medium text-sm text-neutral-50/75">
							{experience.dates}
						</span>
					</div>

					<div className="col-span-3 pl-6">
						<h3 className="font-medium text-sm text-neutral-50/75 mb-1">
							{experience.title}
						</h3>
						<p className="text-neutral-50 text-base font-medium mb-1">
							{experience.company}
						</p>

						<p className="text-neutral-50/75 leading-relaxed text-sm">
							{experience.description}
						</p>
					</div>
				</div>
				{!isLast && (
					<div className='py-8'>
						<div className="border-b border-dashed border-neutral-50/25 col-span-4"></div>
					</div>
				)}
			</div>
		</>
	);
};

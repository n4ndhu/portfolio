import Image, { StaticImageData } from 'next/image';

export interface Project {
	id: string;
	logoUrl?: StaticImageData;
	title: string;
	description: string;
	imageUrl: StaticImageData;
	tags: string[];
	link?: string;
	hideTitle?: boolean;
}

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<div className="group relative overflow-hidden border px-1 border-neutral-50/5 grid grid-cols-2 gap-8 items-center">
			<div className="absolute w-1/4 h-full inset-x-0 border-r border-neutral-50/5 -z-0 "></div>
			<div className="py-4 pl-7 relative z-10 bg-neutral-950">
				<h3 className="mb-4 text-white flex items-center">
					{project.logoUrl && (
						<Image
							src={project.logoUrl}
							alt={project.title}
							className="h-4 w-fit mr-2 inline-flex object-contain"
						/>
					)}
					{!project.hideTitle && (
						<span className="text-xl font-semibold">{project.title}</span>
					)}
				</h3>
				<p className="text-neutral-400 mb-4 text-sm max-w-sm">
					{project.description}
				</p>

				{/* Tags */}
				<div className="flex flex-wrap space-x-2">
					{project.tags.map(tag => (
						<span
							key={tag}
							className="px-2 py-0.5 bg-neutral-800 text-neutral-50/80 text-xs rounded-xs border border-neutral-50/20"
						>
							{tag}
						</span>
					))}
				</div>
				{/* Links */}
				{project.link && (
					<a
						href={project.link + '?utm_source=portfolio'}
						target="_blank"
						className="inline-flex underline underline-offset-8 text-xs mt-4 decoration-dotted decoration-neutral-50/50 hover:decoration-neutral-50/100 transition-all duration-300 text-neutral-50/80"
					>
						View Project
					</a>
				)}
			</div>
			{/* Project Image */}
			<div className="border-l border-neutral-50/5 pl-1 py-1">
				<div className="relative aspect-video overflow-hidden bg-neutral-900/20 border border-neutral-50/20 rounded-xs">
					<div className="scale-80 hover:scale-100 transition-all duration-300">
						<Image
							src={project.imageUrl}
							alt={project.title}
							className=" aspect-video rounded-xs grayscale-100 group-hover:grayscale-0 transition-all duration-300 object-cover [object-position:_center_top]"
						/>
					</div>
				</div>
			</div>

			{/* Project Content */}
		</div>
	);
};

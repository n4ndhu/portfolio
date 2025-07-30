import { Project } from './works';

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<div className="group relative overflow-hidden ">
			{/* Project Image */}
			<div className="relative aspect-video overflow-hidden">
				{project.imageUrl && (
					<img
						src={project.imageUrl}
						alt={project.title}
						className="absolute inset-0 object-cover"
					/>
				)}
			</div>

			{/* Project Content */}
			<div className="py-4">
				<h3 className="text-xl font-semibold mb-2 text-white">
					{project.title}
				</h3>
				<p className="text-neutral-400 mb-4 leading-relaxed">
					{project.description}
				</p>

				{/* Tags */}
				<div className="flex flex-wrap gap-2">
					{project.tags.map(tag => (
						<span
							key={tag}
							className="px-3 py-1 bg-neutral-700 text-neutral-300 text-xs rounded-full border border-neutral-600"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

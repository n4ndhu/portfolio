import { HeroCircle } from './hero-circle';

export const Hero = () => {
	const skills = ['Angular', 'Svelte', 'React', 'PWA'];
	return (
		<>
			<div className="relative isolate overflow-visible min-h-dvh flex flex-col">
				<div className="">
					<HeroCircle
						className="absolute w-[50%] top-[30%] -left-[20%]"
						direction="clockwise"
						speed={60}
					/>
					<HeroCircle
						className="absolute w-[50%] -top-[30%] -right-[20%]"
						direction="clockwise"
						speed={60}
					/>
				</div>
				<div className="max-w-7xl mx-auto my-auto flex flex-col justify-center w-full ">
					<h1 className="text-4xl font-bold mb-4">{'//'} Hi.! I'm Nandhu </h1>
					<p className="text-2xl font-medium max-w-250 leading-relaxed">
						I’ve been building and designing websites for 10 years now, mostly
						living on the frontend because that’s where the fun is. I can handle
						backend too—think of it as me doing the dishes after cooking a great
						meal. Not my favorite part, but it gets done and done well.
					</p>
				</div>
				<div className=" pb-2">
					<div className="max-w-7xl mx-auto space-x-2">
						{skills.map(skill => {
							return (
								<span
									className="inline-flex px-4 py-1 rounded-full border border-neutral-50/50 text-sm"
									key={skill}
								>
									{skill}
								</span>
							);
						})}
					</div>
					<div className="border-t border-dashed border-neutral-50/25 my-3"></div>
					<div className="text-sm max-w-7xl mx-auto leading-none">
						Based on Bangalore India
					</div>
				</div>
			</div>
		</>
	);
};

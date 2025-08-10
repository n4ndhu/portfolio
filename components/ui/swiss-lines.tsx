export const SwissLines = () => {
	return (
		<div className="fixed inset-0 w-full h-full flex -z-10">
			<div className="layout-container h-full relative border-x w-full border-neutral-50/5 grid grid-cols-4">
				<div className="h-full border-x border-dotted border-neutral-50/5" />
				<div className="h-full border-r border-dotted border-neutral-50/5" />
				<div className="h-full border-r border-dotted border-neutral-50/5" />
				<div className="h-full border-r border-dotted border-neutral-50/5" />
			</div>
		</div>
	);
};

import { CursorDemo } from '@/components/ui/cursor';

export default function CursorTestPage() {
	return (
		<main className="min-h-screen bg-neutral-950 text-neutral-50">
			<div className="container mx-auto py-8">
				<h1 className="text-4xl font-bold mb-8 text-center">
					Custom Cursor Test
				</h1>
				<CursorDemo />
			</div>
		</main>
	);
}

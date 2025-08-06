'use client';

import React from 'react';
import { useCursorHover } from './hooks/use-cursor-style';
import { Button } from '../button';

export function CursorDemo() {
	const textHover = useCursorHover('text');
	const pointerHover = useCursorHover('pointer');
	const tooltipHover = useCursorHover('tooltip', 'Click me!');

	return (
		<div className="p-8 space-y-6">
			<h2 className="text-2xl font-bold mb-4">Custom Cursor Demo</h2>

			<div className="space-y-4">
				<div className="space-y-2">
					<h3 className="text-lg font-semibold">
						Text Cursor (Auto-height based on text size)
					</h3>

					<div className="p-4 border rounded-lg cursor-none" {...textHover}>
						Hover over this area to see text cursor
					</div>
					<div className="p-4 border text-3xl cursor-none" {...textHover}>
						Hover over this area to see text cursor
					</div>
					<div className="p-4 border text-4xl cursor-none" {...textHover}>
						Hover over this area to see text cursor
					</div>
				</div>

				<div className="space-y-2">
					<h3 className="text-lg font-semibold">Pointer Cursor</h3>
					<Button variant="default" className="cursor-none" {...pointerHover}>
						Hover Button
					</Button>
				</div>

				<div className="space-y-2">
					<h3 className="text-lg font-semibold">Tooltip Cursor</h3>
					<div className="p-4 border rounded-lg cursor-none" {...tooltipHover}>
						Hover for tooltip
					</div>
				</div>

				<div className="space-y-2">
					<h3 className="text-lg font-semibold">Interactive Elements</h3>
					<div className="flex gap-4">
						<Button variant="outline" className="cursor-none" {...pointerHover}>
							Button 1
						</Button>
						<Button
							variant="secondary"
							className="cursor-none"
							{...useCursorHover('tooltip', 'Secondary action')}
						>
							Button 2
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

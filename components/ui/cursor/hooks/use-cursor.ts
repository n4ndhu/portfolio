'use client';
import { useState, useEffect } from 'react';

import { CursorPosition } from '../cursor.types';

export function useMousePosition() {
	const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

	useEffect(() => {
		const updatePosition = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', updatePosition, { passive: true });
		return () => window.removeEventListener('mousemove', updatePosition);
	}, []);

	return position;
}

import { useCallback } from 'react';
import { useCursor } from '../cursor-provider';
import { CursorStyle } from '../cursor.types';

export function useCursorHover(style: CursorStyle, tooltipText?: string) {
	const { setStyle, setTooltip, setTextHeight, reset } = useCursor();

	const handleMouseEnter = useCallback(
		(e: React.MouseEvent) => {
			if (style === 'tooltip' && tooltipText) {
				setTooltip(tooltipText);
			} else if (style === 'text') {
				const element = e.currentTarget;
				const computedStyle = window.getComputedStyle(element);
				const fontSize = parseInt(computedStyle.fontSize);
				const lineHeight = computedStyle.lineHeight;
				const height =
					lineHeight === 'normal' ? fontSize * 1.2 : parseInt(lineHeight);
				setTextHeight(height);
				setStyle(style);
			} else {
				setStyle(style);
			}
		},
		[style, tooltipText, setStyle, setTooltip, setTextHeight]
	);

	const handleMouseLeave = useCallback(() => {
		reset();
	}, [reset]);

	return {
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
	};
}

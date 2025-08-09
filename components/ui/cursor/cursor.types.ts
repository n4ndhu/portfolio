export type CursorStyle = 'default' | 'text' | 'pointer' | 'tooltip';

export type CursorPosition = {
	x: number;
	y: number;
};

export interface CursorState {
	style: CursorStyle;
	position: CursorPosition;
	isVisible: boolean;
	tooltipText?: string;
	textHeight?: number;
}

export interface CursorContextType {
	state: CursorState;
	setStyle: (style: CursorStyle) => void;
	setTooltip: (text: string) => void;
	setTextHeight: (height: number) => void;
	hide: () => void;
	show: () => void;
	reset: () => void;
}

export const cursorStyles = {
	default: {
		size: 16,
		className: 'bg-white rounded-full',
	},
	text: {
		size: 2,
		height: 24,
		className: 'bg-white',
	},
	pointer: {
		size: 32,
		className: 'bg-white rounded-full',
	},
	tooltip: {
		size: 0,
		className: 'bg-white rounded-md px-2 py-1 text-black text-sm',
	},
} as const;

export const cursorSprings = {
	position: { type: 'spring', stiffness: 800, damping: 50 },
	scale: { type: 'spring', stiffness: 600, damping: 30 },
	opacity: { type: 'spring', stiffness: 500, damping: 40 },
} as const;

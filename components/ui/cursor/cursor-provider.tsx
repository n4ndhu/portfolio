'use client';

import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
	useCallback,
} from 'react';
import { CursorContextType, CursorState, CursorStyle } from './cursor.types';
import { useMousePosition } from './hooks/use-cursor';

const CursorContext = createContext<CursorContextType | null>(null);

interface CursorProviderProps {
	children: React.ReactNode;
}

export function CursorProvider({ children }: CursorProviderProps) {
	const mousePosition = useMousePosition();
	const [state, setState] = useState<CursorState>({
		style: 'default',
		position: { x: 0, y: 0 },
		isVisible: true,
	});

	useEffect(() => {
		if (state.isVisible) {
			setState(prev => ({
				...prev,
				position: { x: mousePosition.x, y: mousePosition.y },
			}));
		}
	}, [mousePosition.x, mousePosition.y, state.isVisible]);

	const setStyle = useCallback((style: CursorStyle) => {
		setState(prev => ({ ...prev, style }));
	}, []);

	const setTooltip = useCallback((text: string) => {
		setState(prev => ({ ...prev, style: 'tooltip', tooltipText: text }));
	}, []);

	const setTextHeight = useCallback((height: number) => {
		setState(prev => ({ ...prev, textHeight: height }));
	}, []);

	const hide = useCallback(() => {
		setState(prev => ({ ...prev, isVisible: false }));
	}, []);

	const show = useCallback(() => {
		setState(prev => ({ ...prev, isVisible: true }));
	}, []);

	const reset = useCallback(() => {
		setState({
			style: 'default',
			position: { x: 0, y: 0 },
			isVisible: true,
		});
	}, []);

	const contextValue = useMemo<CursorContextType>(
		() => ({
			state,
			setStyle,
			setTooltip,
			setTextHeight,
			hide,
			show,
			reset,
		}),
		[state, setStyle, setTooltip, setTextHeight, hide, show, reset]
	);

	return (
		<CursorContext.Provider value={contextValue}>
			{children}
		</CursorContext.Provider>
	);
}

export function useCursor() {
	const context = useContext(CursorContext);
	if (!context) {
		throw new Error('useCursor must be used within a CursorProvider');
	}
	return context;
}

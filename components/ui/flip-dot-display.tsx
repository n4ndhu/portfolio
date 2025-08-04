'use client';

// Inspired From: https://x.com/Griveau/status/1932832554354163804

import { cn } from '@/lib/utils';
import {
	useMemo,
	useEffect,
	useState,
	useRef,
	RefObject,
	forwardRef,
} from 'react';
import { useIntersection } from 'react-use';

export type FlipDotDisplayProps = {
	grid?: [number, number];
	cellClass?: string;
	className?: string;
	rgb?: `${number} ${number} ${number}`;
	frame?: number[][];
	minOpacity?: number;
	'aria-label'?: string;
	ref?: RefObject<HTMLDivElement>;
};

const defaultFrame: FlipDotDisplayProps['frame'] = [
	[0, 1, 0, 1, 0],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[0, 1, 1, 1, 0],
	[0, 0, 1, 0, 0],
];

export const FlipDotDisplay = forwardRef<HTMLDivElement, FlipDotDisplayProps>(
	(
		{
			className,
			grid = [5, 5],
			cellClass,
			rgb = '240 240 240',
			frame = defaultFrame,
			minOpacity = 0.1,
			'aria-label': ariaLabel = 'Flip dot display',
		},
		ref
	) => {
		// Memoize the cells data to avoid recalculating on every render
		const cells = useMemo(() => {
			const [cols, rows] = grid;
			const totalCells = cols * rows;

			return Array.from({ length: totalCells }, (_, index) => {
				const row = Math.floor(index / cols);
				const col = index % cols;

				// Safely access frame data with bounds checking
				const frameValue = frame[row]?.[col] ?? 0;
				const opacity = Math.max(minOpacity, frameValue);

				return {
					index,
					row,
					col,
					backgroundColor: rgb ? `rgb(${rgb} / ${opacity * 100}%)` : undefined,
				};
			});
		}, [grid, frame, rgb, minOpacity]);

		// Memoize the grid styles
		const gridStyles = useMemo(
			() => ({
				gridTemplateColumns: `repeat(${grid[0]}, 1fr)`,
				gridTemplateRows: `repeat(${grid[1]}, 1fr)`,
			}),
			[grid]
		);

		// Memoize cell class to prevent unnecessary re-renders
		const memoizedCellClass = useMemo(() => cellClass, [cellClass]);

		return (
			<div
				ref={ref}
				className={cn('grid aspect-square gap-px', className)}
				style={gridStyles}
				role="img"
				aria-label={ariaLabel}
			>
				{cells.map(({ index, backgroundColor }) => (
					<div
						key={index}
						className={cn('rounded-[1px] aspect-square', memoizedCellClass)}
						style={{ backgroundColor }}
						aria-hidden="true"
					></div>
				))}
			</div>
		);
	}
);

FlipDotDisplay.displayName = 'FlipDotDisplay';

const defaultFrames: FlipDotDisplayProps['frame'][] = [
	[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	],
	[
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	],
	[
		[0, 1, 1, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	],
	[
		[1, 1, 1, 1, 1],
		[0, 1, 1, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	],
	[
		[1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1],
		[0, 1, 1, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
	],
	[
		[0, 1, 0, 1, 0],
		[1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1],
		[0, 1, 1, 1, 0],
		[0, 0, 1, 0, 0],
	],
	[
		[0, 0, 0, 0, 0],
		[0, 1, 0, 1, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
	],
	[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	],
	[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	],
];

export type FlipDotDisplayAnimationProps = Omit<
	FlipDotDisplayProps,
	'frame'
> & {
	frames?: FlipDotDisplayProps['frame'][];
	fps?: number;
	repeat?: number; // Number or Infinity for continue loop
	delay?: number; // Delay in milliseconds
	pauseOnHidden?: boolean; // Pause animation when not in viewport
};

export const FlipDotDisplayAnimation = ({
	frames = defaultFrames,
	fps = 5,
	repeat = Infinity,
	delay = 0,
	pauseOnHidden = true,
	...props
}: FlipDotDisplayAnimationProps) => {
	const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Use react-use intersection hook
	const intersection = useIntersection(containerRef as RefObject<HTMLElement>, {
		root: null,
		threshold: 0.1,
	});

	useEffect(() => {
		if (frames.length === 0) return;

		// Start animation after delay
		const delayTimer = setTimeout(() => {
			setIsPlaying(true);
		}, delay);

		return () => clearTimeout(delayTimer);
	}, [delay, frames.length]);

	useEffect(() => {
		// Clear existing interval
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}

		const isVisible = intersection ? intersection.intersectionRatio > 0 : true;

		// Don't animate if not playing, not visible (when pauseOnHidden is true), or no frames
		const shouldAnimate =
			isPlaying && frames.length > 0 && (pauseOnHidden ? isVisible : true);

		if (!shouldAnimate) return;

		const frameInterval = 1000 / fps; // Convert fps to milliseconds
		let repeatCount = 0;

		intervalRef.current = setInterval(() => {
			setCurrentFrameIndex(prevIndex => {
				const nextIndex = (prevIndex + 1) % frames.length;

				// If we've completed a full cycle
				if (nextIndex === 0) {
					repeatCount++;

					// Stop if we've reached the repeat limit
					if (repeat !== Infinity && repeatCount >= repeat) {
						setIsPlaying(false);
						if (intervalRef.current) {
							clearInterval(intervalRef.current);
							intervalRef.current = null;
						}
						return prevIndex; // Stay on the last frame
					}
				}

				return nextIndex;
			});
		}, frameInterval);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [
		isPlaying,
		intersection?.intersectionRatio,
		frames.length,
		fps,
		repeat,
		pauseOnHidden,
	]);

	// Get the current frame
	const currentFrame = frames[currentFrameIndex] || frames[0];

	return <FlipDotDisplay {...props} frame={currentFrame} ref={containerRef} />;
};

'use client';
import { type JSX, useEffect, useRef, useState } from 'react';
import { motion, MotionProps } from 'motion/react';

export type TextScrambleProps = {
	children: string;
	duration?: number;
	speed?: number;
	characterSet?: string;
	as?: React.ElementType;
	className?: string;
	trigger?: boolean;
	onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';

export function TextScramble({
	children,
	duration = 0.8,
	speed = 0.04,
	characterSet = defaultChars,
	className,
	as: Component = 'p',
	trigger = true,
	onScrambleComplete,
	...props
}: TextScrambleProps) {
	const MotionComponent = motion.create(
		Component as keyof JSX.IntrinsicElements
	);
	const [displayText, setDisplayText] = useState(children);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const hasRun = useRef(false);

	useEffect(() => {
		// Clear any existing interval
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}

		// Only run if trigger is true and hasn't run before
		if (!trigger || hasRun.current) return;

		hasRun.current = true;
		const steps = Math.floor(duration / speed);
		let step = 0;

		intervalRef.current = setInterval(() => {
			let scrambled = '';
			const progress = step / steps;

			for (let i = 0; i < children.length; i++) {
				if (children[i] === ' ') {
					scrambled += ' ';
					continue;
				}

				if (progress * children.length > i) {
					scrambled += children[i];
				} else {
					scrambled +=
						characterSet[Math.floor(Math.random() * characterSet.length)];
				}
			}

			setDisplayText(scrambled);
			step++;

			if (step > steps) {
				if (intervalRef.current) {
					clearInterval(intervalRef.current);
					intervalRef.current = null;
				}
				setDisplayText(children);
				onScrambleComplete?.();
			}
		}, speed * 1000);

		// Cleanup function
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, []); // Empty dependency array - only run once on mount

	// Reset when children or trigger changes
	useEffect(() => {
		hasRun.current = false;
		setDisplayText(children);
	}, [children, trigger]);

	return (
		<MotionComponent className={className} {...props}>
			{displayText}
		</MotionComponent>
	);
}

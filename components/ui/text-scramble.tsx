'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, MotionProps, useInView } from 'motion/react';

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
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
	children,
	duration = 0.8,
	speed = 0.04,
	characterSet = defaultChars,
	className,
	as: As = 'span',
	onScrambleComplete,
	...props
}: TextScrambleProps) {
	const ref = useRef(null);

	const MotionComponent = motion.create(As);
	const [displayText, setDisplayText] = useState(children);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isCompleted, setIsCompleted] = useState<false | string>(false);

	const isInView = useInView(ref, { once: true });

	const text = children;

	useEffect(() => {
		if (isAnimating || isCompleted === text || !isInView) return;
		setIsAnimating(true);

		const steps = duration / speed;
		let step = 0;

		const interval = setInterval(() => {
			let scrambled = '';
			const progress = step / steps;

			for (let i = 0; i < text.length; i++) {
				if (text[i] === ' ') {
					scrambled += ' ';
					continue;
				}

				if (progress * text.length > i) {
					scrambled += text[i];
				} else {
					scrambled +=
						characterSet[Math.floor(Math.random() * characterSet.length)];
				}
			}

			setDisplayText(scrambled);
			step++;

			if (step > steps) {
				clearInterval(interval);
				setDisplayText(text);
				setIsCompleted(text);
				setIsAnimating(false);
				onScrambleComplete?.();
			}
		}, speed * 1000);
	}, [
		isAnimating,
		duration,
		speed,
		characterSet,
		text,
		onScrambleComplete,
		isCompleted,
		isInView,
	]);

	return (
		<span ref={ref}>
			<MotionComponent className={className} {...props}>
				{displayText}
			</MotionComponent>
		</span>
	);
}

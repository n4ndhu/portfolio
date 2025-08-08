'use client';
// TODO: Needs to be optimized
import { motion } from 'motion/react';
import {
	ComponentPropsWithoutRef,
	FC,
	ReactNode,
	useRef,
	useEffect,
	useState,
} from 'react';

import { cn } from '@/lib/utils';

export interface TextRevealProps extends ComponentPropsWithoutRef<'div'> {
	children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
	if (typeof children !== 'string') {
		throw new Error('TextReveal: children must be a string');
	}

	const words = children.split(' ');

	return (
		<div className={cn('relative z-0', className)}>
			<div className={' mx-auto flex  items-center bg-transparent '}>
				<span
					className={'flex flex-wrap  text-black/20 dark:text-white/20 mb-10 '}
				>
					{words.map((word, i) => (
						<Word key={i}>{word}</Word>
					))}
				</span>
			</div>
		</div>
	);
};

interface WordProps {
	children: ReactNode;
}

const Word: FC<WordProps> = ({ children }) => {
	const wordRef = useRef<HTMLSpanElement>(null);
	const [opacity, setOpacity] = useState(0);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		const updateOpacity = () => {
			if (wordRef.current) {
				const wordRect = wordRef.current.getBoundingClientRect();
				const wordCenter = wordRect.top + wordRect.height / 2;
				const viewportHeight = window.innerHeight;
				const positionFromTop = (wordCenter / viewportHeight) * 100;
				const targetOpacity = positionFromTop <= 75 ? 1 : 0;
				setOpacity(targetOpacity);
			}
		};

		const throttledUpdate = () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(updateOpacity, 16);
		};

		window.addEventListener('scroll', throttledUpdate, { passive: true });
		window.addEventListener('resize', throttledUpdate, { passive: true });
		updateOpacity();

		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener('scroll', throttledUpdate);
			window.removeEventListener('resize', throttledUpdate);
		};
	}, []);

	return (
		<span ref={wordRef} className="relative mx-1 lg:mx-1.5">
			<span className="absolute opacity-30">{children}</span>
			<motion.span
				animate={{ opacity }}
				transition={{
					duration: 0.3,
					ease: 'easeOut',
				}}
				className={'text-neutral-50 opacity-0'}
			>
				{children}
			</motion.span>
		</span>
	);
};

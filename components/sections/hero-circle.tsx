'use client';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export const HeroCircle = ({
	className,
	direction = 'clockwise',
	speed = 20,
}: {
	className: string;
	direction?: 'clockwise' | 'counterclockwise';
	speed?: number;
}) => {
	const ref = useRef(null);	
	const isInView = useInView(ref, { initial: false });

	return (
		<motion.div
			ref={ref}
			className={className}
			animate={{ rotate: direction === 'clockwise' ? 360 : -360 }}
			transition={{
				duration: speed,
				ease: 'linear',
				repeat: Infinity,
			}}
		>
			<svg viewBox="0 0 901 901" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M878 450.982H891.507M884.754 444.229V457.736"
					stroke="#FAFAFA"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.ellipse
					cx="435.123" cy="434.641" rx="435.123" ry="434.641"
					stroke="#FAFAFA"
					strokeOpacity="0.25"
					animate={{
						strokeDasharray: isInView ? '8 8' : '0 8'
					}}
					transition={{
						duration: .3,
						ease: 'easeInOut'
					}}
				/>
			</svg>
		</motion.div>
	);
};

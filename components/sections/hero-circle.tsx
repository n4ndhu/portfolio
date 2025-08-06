'use client';
import { motion } from 'motion/react';

export const HeroCircle = ({
	className,
	direction = 'clockwise',
	speed = 20,
}: {
	className: string;
	direction?: 'clockwise' | 'counterclockwise';
	speed?: number;
}) => {
	return (
		<div className={className}>
			<motion.svg
				viewBox="0 0 901 901"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				animate={{ rotate: direction === 'clockwise' ? 360 : -360 }}
				transition={{
					duration: speed,
					ease: 'linear',
					repeat: Infinity,
				}}
			>
				<path
					d="M878 450.982H891.507M884.754 444.229V457.736"
					stroke="#FAFAFA"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<ellipse
					cx="435.123"
					cy="434.641"
					rx="435.123"
					ry="434.641"
					stroke="#FAFAFA"
					strokeOpacity="0.25"
					strokeDasharray="20 20"
				/>
			</motion.svg>
		</div>
	);
};

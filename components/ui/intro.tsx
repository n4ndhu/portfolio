// store.tsx
'use client';
import { useState } from 'react';
import { motion } from 'motion/react';

export const Intro = () => {
	const [isCompleted, setIsCompleted] = useState(false);
	return (
		<>
			{!isCompleted && (
				<motion.div className="fixed inset-0 z-[99999999] pointer-events-none">
					<motion.div
						className="absolute inset-0 z-3 bg-neutral-950 origin-top"
						initial={{ scaleY: 1, opacity: 1 }}
						animate={{ scaleY: 0, opacity: 0 }}
						transition={{
							duration: 0.2,
							delay: 0,
						}}
					></motion.div>
					<motion.div
						className="absolute inset-0 z-2 bg-neutral-900 origin-top"
						initial={{ scaleY: 1, opacity: 1 }}
						animate={{ scaleY: 0, opacity: 0 }}
						transition={{
							duration: 0.2,
							delay: 0.1,
						}}
						onAnimationEnd={() => setIsCompleted(true)}
					></motion.div>
				</motion.div>
			)}
		</>
	);
};

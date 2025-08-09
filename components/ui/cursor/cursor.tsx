'use client';

import React, { useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { useCursor } from './cursor-provider';
import { cursorStyles, cursorSprings } from './cursor.types';
import { cn } from '@/lib/utils';

export function Cursor() {
	const { state } = useCursor();

	useEffect(() => {
		document.body.style.cursor = 'none';
		return () => {
			document.body.style.cursor = 'auto';
		};
	}, []);

	const currentStyle = cursorStyles[state.style];

	const styleChecks = useMemo(
		() => ({
			isTextStyle: state.style === 'text',
			isTooltipStyle: state.style === 'tooltip',
			isDefaultOrPointer:
				state.style === 'default' || state.style === 'pointer',
		}),
		[state.style]
	);

	const cursorClassName = useMemo(() => {
		return cn(
			'relative',
			styleChecks.isDefaultOrPointer
				? 'bg-white rounded-full'
				: currentStyle.className,
			styleChecks.isTextStyle && 'w-0.5 h-6',
			styleChecks.isTooltipStyle &&
				'min-w-[80px] min-h-[32px] flex items-center justify-center'
		);
	}, [styleChecks, currentStyle.className]);

	const cursorParentClassName = useMemo(() => {
		return cn(
			'fixed top-0 left-0 pointer-events-none z-[9999]',
			styleChecks.isDefaultOrPointer && 'mix-blend-difference'
		);
	}, [styleChecks]);

	const cursorStyle = useMemo(() => {
		const baseStyle = {
			width: styleChecks.isTextStyle ? '2px' : `${currentStyle.size}px`,
			height: styleChecks.isTextStyle
				? `${state.textHeight || 24}px`
				: `${currentStyle.size}px`,
		};

		if (styleChecks.isDefaultOrPointer) {
			return {
				...baseStyle,
				width: `${currentStyle.size + 4}px`,
				height: `${currentStyle.size + 4}px`,
			};
		}

		return baseStyle;
	}, [styleChecks, currentStyle.size, state.textHeight]);

	if (!state.isVisible) return null;

	return (
		<motion.div
			className={cursorParentClassName}
			style={{
				transform: `translate3d(${state.position.x}px, ${state.position.y}px, 0) translate(-50%, -50%)`,
			}}
		>
			<motion.div
				className={cursorClassName}
				style={cursorStyle}
				animate={{
					scale: 1,
					opacity: 1,
				}}
				transition={cursorSprings.scale}
			>
				{styleChecks.isTextStyle && (
					<motion.div
						className="w-0.5 h-6 bg-white"
						animate={{ opacity: [1, 0, 1] }}
						transition={{
							duration: 1,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
				)}

				{styleChecks.isTooltipStyle && state.tooltipText && (
					<motion.span
						className="text-black text-sm font-medium"
						initial={{ opacity: 0, y: 5 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2 }}
					>
						{state.tooltipText}
					</motion.span>
				)}
			</motion.div>
		</motion.div>
	);
}

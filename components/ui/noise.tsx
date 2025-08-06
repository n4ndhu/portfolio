'use client';

import { useEffect, useRef } from 'react';

interface NoiseProps {
	className?: string;
	opacity?: number;
	speed?: number;
	scale?: number;
	lightColor?: string;
}

export function Noise({
	className = '',
	opacity = 0.4,
	speed = 0.5,
	scale = 1,
	lightColor = '#171717',
}: NoiseProps) {
	const validOpacity = Math.max(0, Math.min(1, opacity));
	const validSpeed = Math.max(0.1, Math.min(5, speed));
	const validScale = Math.max(0.1, Math.min(5, scale));
	const svgRef = useRef<SVGSVGElement>(null);
	const animationRef = useRef<number | undefined>(undefined);
	const timeRef = useRef(0);

	useEffect(() => {
		const svg = svgRef.current;
		if (!svg) return;

		const noiseFilter = svg.querySelector('#nnnoise-filter') as SVGElement;
		const feTurbulence = noiseFilter?.querySelector(
			'feTurbulence'
		) as SVGElement;

		if (!noiseFilter || !feTurbulence) return;

		const animate = () => {
			timeRef.current += validSpeed * 0.01;

			feTurbulence.setAttribute(
				'baseFrequency',
				`${0.133 * validScale} ${0.133 * validScale}`
			);
			feTurbulence.setAttribute(
				'seed',
				Math.floor(timeRef.current * 100).toString()
			);

			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
				animationRef.current = undefined;
			}
		};
	}, [validSpeed, validScale]);

	return (
		<div
			className={`fixed inset-0 pointer-events-none z-999 ${className}`}
			style={{ opacity: validOpacity }}
		>
			<svg
				ref={svgRef}
				width="100%"
				height="100%"
				viewBox="0 0 700 700"
				preserveAspectRatio="none"
				style={{ width: '100%', height: '100%' }}
			>
				<defs>
					<filter
						id="nnnoise-filter"
						x="-20%"
						y="-20%"
						width="140%"
						height="140%"
						filterUnits="objectBoundingBox"
						primitiveUnits="userSpaceOnUse"
						colorInterpolationFilters="linearRGB"
					>
						<feTurbulence
							type="turbulence"
							baseFrequency="0.133"
							numOctaves="4"
							seed="15"
							stitchTiles="stitch"
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							result="turbulence"
						></feTurbulence>
						<feSpecularLighting
							surfaceScale="15"
							specularConstant="0.75"
							specularExponent="20"
							lightingColor={lightColor}
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							in="turbulence"
							result="specularLighting"
						>
							<feDistantLight azimuth="3" elevation="100"></feDistantLight>
						</feSpecularLighting>
					</filter>
				</defs>
				<rect
					width="700"
					height="700"
					fill="transparent"
					filter="url(#nnnoise-filter)"
				></rect>
			</svg>
		</div>
	);
}

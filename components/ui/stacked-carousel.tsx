'use client';

import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

interface StackedCarouselProps {
	/** Array of images to display in the carousel */
	images: {
		src: StaticImageData;
		alt: string;
	}[];
	/** Additional CSS classes to apply to the container */
	className?: string;
	/** Drag distance required to trigger navigation (in pixels) */
	threshold?: number;
	/** Maximum rotation angle for images (in degrees) */
	maxRotation?: number;
}

export function StackedCarouselClient({
	images,
	className,
	threshold = 120,
	maxRotation = 6,
}: StackedCarouselProps) {
	// Store rotation with each image - use fixed rotations
	const imagesWithRotation = useMemo(() => {
		return images.map((image, index) => ({
			...image,
			rotation: (((index * 1.618) % 1) - 0.5) * 2 * maxRotation,
		}));
	}, [images, maxRotation]);

	const [zIndexOfImages, setZIndexOfImages] = useState<number[]>(
		imagesWithRotation.map((_, index) => images.length - index)
	);

	useEffect(() => {
		setZIndexOfImages(
			imagesWithRotation.map((_, index) => images.length - index)
		);
	}, [imagesWithRotation]);

	const bringTopLayerToBack = () => {
		setZIndexOfImages(prev => {
			if (prev.length === 0) {
				return prev;
			}
			const highestZIndex = imagesWithRotation.length;
			return prev.map(value => {
				if (value === highestZIndex) {
					return 1;
				}
				return value + 1;
			});
		});
	};

	return (
		<div
			className={cn(
				'relative w-full flex items-center justify-center aspect-[9/13] select-none',
				className
			)}
		>
			{imagesWithRotation.map((image, index) => {
				return (
					<motion.div
						drag={
							zIndexOfImages[index] === imagesWithRotation.length ? 'x' : false
						}
						dragSnapToOrigin
						key={index}
						className="absolute w-full aspect-[9/13] top-0 "
						style={{
							zIndex: zIndexOfImages[index],
						}}
						dragElastic={0.1}
						onDragEnd={bringTopLayerToBack}
					>
						<Image
							src={image.src}
							alt={image.alt}
							className="w-full h-full object-cover rounded-lg bg-neutral-900"
							draggable={false}
							style={{
								transform: `rotate(${image.rotation}deg)`,
							}}
						/>
					</motion.div>
				);
			})}
		</div>
	);
}

export function StackedCarousel({
	images,
	className,
	threshold = 120,
	maxRotation = 6,
}: StackedCarouselProps) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;
	return (
		<StackedCarouselClient
			images={images}
			className={className}
			threshold={threshold}
			maxRotation={maxRotation}
		/>
	);
}

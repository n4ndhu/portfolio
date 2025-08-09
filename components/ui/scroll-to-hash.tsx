'use client';

import { useEffect } from 'react';

const ScrollToHash = () => {
	useEffect(() => {
		const handleHashChange = (url: string) => {
			const [, hash] = url.split('#');
			if (hash) {
				const el = document.getElementById(hash);
				if (el) {
					el.scrollIntoView({ behavior: 'smooth' });
				}
			}
		};

		// Scroll on initial load
		if (window.location.href.includes('#')) {
			handleHashChange(window.location.href);
		}

		// Listen for hash changes
		const handleHashChangeEvent = () => {
			handleHashChange(window.location.href);
		};

		window.addEventListener('hashchange', handleHashChangeEvent);

		return () => {
			window.removeEventListener('hashchange', handleHashChangeEvent);
		};
	}, []);

	return null;
};

export default ScrollToHash;

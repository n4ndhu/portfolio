import { Hero } from '@/components/sections/hero';
import { Works } from '@/components/sections/works';
import { Experience } from '@/components/sections/experience';
import { Footer } from '@/components/layout/footer';

export default function Home() {
	return (
		<>
			<Hero />
			<Works />
			<Experience />
			<Footer />
		</>
	);
}

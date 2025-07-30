import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Github } from 'lucide-react';

export const Footer = () => {
	return (
		<footer className=" border-t border-neutral-800">
			<div className="max-w-7xl mx-auto px-4 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Left Section - Main Content */}
					<div className="lg:col-span-2">
						<div className="mb-8">
							<h2 className="text-3xl font-bold text-white mb-2 font-mono">
								{'//'} Let's build
							</h2>
							<h3 className="text-3xl font-bold text-white mb-6 font-mono">
								Something great
							</h3>

							{/* Hire Me Button */}
							<Button variant="outline">Hire Me</Button>

							{/* Social Media Icons */}
							<div className="flex space-x-4 mt-8">
								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-neutral-300 transition-colors"
								>
									<Linkedin className="size-6" />
								</a>

								<a
									href="https://instagram.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-neutral-300 transition-colors"
								>
									<Instagram className="size-6" />
								</a>

								<a
									href="https://github.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-neutral-300 transition-colors"
								>
									<Github className="size-6" />
								</a>
							</div>
						</div>
					</div>

					{/* Right Section - Contact Info */}
					<div className="lg:col-span-1">
						<div className="text-right">
							<h4 className="text-white font-mono mb-2">Contact Me</h4>
							<p className="text-white font-mono mb-6">n4ndhu@gmail.com</p>

							{/* Download CV Button */}
							<Button variant="outline">
								<svg
									className="w-4 h-4 mr-2"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 16l-5-5h3V4h4v7h3l-5 5z" />
									<path d="M20 18H4v-2h16v2z" />
								</svg>
								Download CV
							</Button>
						</div>
					</div>
				</div>

				{/* Bottom Border */}
			</div>
			<div className="border-t border-neutral-800 pt-8 pb-8">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-neutral-400 text-sm">
							© 2025 Nandhu. All rights reserved.
						</p>
						<p className="text-neutral-400 text-sm mt-2 md:mt-0">
							Built with Next.js & Tailwind CSS
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

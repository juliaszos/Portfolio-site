import React from 'react';

export const WebCapabilitiesSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-gray-100">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Technical Skill Areas</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{[
						{
							title: 'Cybersecurity Foundations',
							icon: '🛡️',
							features: ['Risk Management', 'Cryptography & PKI', 'Security+ (In Progress)'],
						},
						{
							title: 'Networks & Web Security',
							icon: '🌐',
							features: ['TCP/IP fundamentals', 'Common vulnerabilities (XSS, CSRF, SQLi)', 'Time-based animations'],
						},
						{
							title: 'Digital Forensics',
							icon: '👩🏻‍💻',
							features: ['Evidence documentation', 'Hex & metadata parsing', 'Open-source forensic tooling (Autopsy)'],
						},
						{
							title: 'Machine Learning',
							icon: '🧠',
							features: ['OpenCV image processing', 'CNN classifier tuning', 'Deep Learning Architectures'],
						},
						{
							title: 'Frontend Engineering',
							icon: '🎨',
							features: ['React & Next.js', 'TypeScript & CSS', 'UX-focused design'],
						},
						{
							title: 'Project Management',
							icon: '📋',
							features: ['Agile & Scrum methodology', 'Git & version control workflows', 'Technical documentation'],
						},
					].map((category) => (
						<div key={category.title} className="group bg-white p-6 rounded-lg hover:bg-gray-100 transition-all shadow-sm hover:shadow-md">
							<div className="text-3xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">{category.title}</h3>
							<ul className="space-y-2">
								{category.features.map((feature) => (
									<li key={feature} className="text-gray-600 group-hover:text-gray-700 transition-colors">
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

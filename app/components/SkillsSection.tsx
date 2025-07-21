import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-gray-100">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-gray-900">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Cybersecurity & Risk Awareness ',
							skills: [
								{ name: 'Threat Modeling', level: 80 },
								{ name: 'CompTIA Security+ (in progress)', level: 20 },
								{ name: 'Data Security Practices', level: 95 },
								{ name: 'Secure Auth Workflows', level: 85 },
							],
							icon: '🔐',
							color: 'from-blue-400 to-blue-600',
						},
						{
							category: 'Software & Web Development',
							skills: [
								{ name: 'Django', level: 90 },
								{ name: 'HTML/CSS/JS', level: 95 },
								{ name: 'SQL & Databases', level: 92 },
								{ name: 'Git & GitHub', level: 93 },
							],
							icon: '🌐',
							color: 'from-green-400 to-green-600',
						},
						{
							category: 'Machine Learning & Data',
							skills: [
								{ name: 'Python (pandas, scikit-learn)', level: 94 },
								{ name: 'OpenCV & Image Processing', level: 88 },
								{ name: 'Data Pre-processing', level: 90 },
								{ name: 'AWS', level: 82 },
							],
							icon: '🧠',
							color: 'from-purple-400 to-purple-600',
						},
					].map((category) => (
						<div key={category.category} className="bg-white rounded-lg p-6 transform hover:scale-[1.02] transition-all shadow-sm hover:shadow-md">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1">
											<span className="text-gray-700">{skill.name}</span>
											<span className="text-gray-500">{skill.level}%</span>
										</div>
										<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
											<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

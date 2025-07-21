import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-white scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Partial Facial Recognition System',
							description: 'Final year machine learning project developing a system capable of recognising partial facial data under occlusion or low visibility, aimed at enhancing real-world biometric security applications.',
							techDetails: [
								'Developed image preprocessing pipelines using OpenCV',
								'Tuned CNN classifiers to improve partial feature detection accuracy',
								'Built and tested real-time webcam-based facial data input',
								'Trained and evaluated model performance using custom datasets'
							],
							image: '/poster_project.jpeg',
						},
						{
							title: 'Stargazing Web App',
							description: 'An interactive web application that displays real-time constellations, planetary positions, and visibility based on user geolocation and time.',
							techDetails: [
								'Implemented live sky maps with astronomical data APIs',
								'Integrated geolocation services to personalise user experience',
								'Managed asynchronous data fetching and state updates',
								'Focused on accessibility, responsive design, and UX'
							],
							image: '/stargazing1.jpg',
						},
						{
							title: 'Digital Forensics Dashboard',
							description: 'A dashboard for visualising and managing open-source intelligence (OSINT) evidence in cybercrime investigations, created as part of a university forensics module.',
							techDetails: [
								'Structured evidence intake, classification, and tagging logic',
								'Designed interactive timeline views and data filtering tools',
								'Applied digital chain-of-custody principles to front-end state logic',
								'Emphasised traceability and usability for non-technical users'
							],
							image: '/digiforensics.jpg',
						},
						{
							title: 'BCS Prize – Best Examination Performance',
							description: 'Awarded by the British Computer Society for achieving the top examination results in my cohort at the University of Buckingham.',
							techDetails: [
								'1st Class Honours in Computing (Cybersecurity)',
								'Valedictorian of graduating class',
								'Top-tier academic performance',
								'BCS membership awarded'
							],
							image: '/BCS_award.jpeg',
						},
						{
							title: 'CompTIA Security+ (In Progress)',
							description: 'Currently preparing for CompTIA Security+ to solidify foundational knowledge in cybersecurity, covering risk management, incident response, and secure system architecture.',
							techDetails: [
								'Risk Management',
								'Network Security',
								'Cryptography & PKI',
								'Incident Response & Compliance'
							],
							image: '/securityplus.jpg',
						},
					].map((project) => (
						<div key={project.title} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-600">{project.description}</p>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Highlights</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-600">▹</span>
													<span className="text-gray-700">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-gray-100 via-transparent to-transparent lg:via-gray-50/20 lg:to-gray"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Julia Szostakiewicz - Computing [Cybersecurity] Graduate',
	description:
		'Welcome to my portfolio! ',
	keywords: [
		'Web Developer',
		'Frontend Developer',
		'React Developer',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'HTML5',
		'CSS3',
		'Responsive Design',
		'UI/UX',
		'Web Accessibility',
		'Performance Optimization',
		'Modern Web Development',
		'Progressive Web Apps',
		'[Your Name]',
	],
	authors: [{ name: 'Julia Szostakiewicz' }],
	creator: 'Julia Szostakiewicz',
	openGraph: {
		title: 'Julia Szostakiewicz - Computing [Cybersecurity] Graduate',
		description: 'Passionate web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.',
		url: 'https://your-domain.com',
		siteName: 'Julia Szostakiewicz - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Julia Szostakiewicz - Computing [Cybersecurity] Graduate',
			},
		],
		locale: 'en_UK',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}

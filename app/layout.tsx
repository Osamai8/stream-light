import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
	title: "StreamLite",
	description: "A fast, accessible video streaming platform",
};

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#1e1e1e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className={`dark ${inter.variable}`} lang="en">
			<body>{children}</body>
		</html>
	);
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: "Digital Law | Documentation",
	description:
		"Electronic information resources containing personal data",
	icons: {
		icon: "/favicon.ico",
	},
	metadataBase: new URL("https://diglaw-phi.vercel.app"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
			"ru-RU": "/ru-RU",
		},
	},
	openGraph: {
		url: "https://diglaw-phi.vercel.app",
		siteName: "Digital Law",
		images: [
			{
				url: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				width: 800,
				height: 600,
				alt: "Generated by Digital Law | Documentaion",
			},
		],
		type: "website",
	},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

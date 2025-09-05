import { Open_Sans, Oswald } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { NavbarTest } from './components/NavbarTest'

const bodyFont = Open_Sans({
    variable: '--font-body-font',
    subsets: ['latin'],
})

const headingFont = Oswald({
    variable: '--font-heading-font',
    subsets: ['latin'],
})

export const metadata = {
    title: 'Paschalis Grammenos | Portfolio',
    description: 'Designed by Paschalis Grammenos with NextJS',
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-gp-blue-bg`}
            >
                <NavbarTest />
                <div className="fixed top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-white/10 via-white/20 to-white/30 rounded-b-full blur-2xl opacity-40 animate-pulse"></div>
                <div
                    className="fixed top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-white/10 via-white/20 to-white/30 rounded-b-full blur-3xl opacity-30 animate-pulse"
                    style={{ animationDelay: '1s' }}
                ></div>
                <main className="lg:max-w-[1600px] mx-auto max-w-screen">
                    {children}
                </main>
            </body>
        </html>
    )
}

import { Open_Sans, Oswald } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'
import { ToastContainer } from 'react-toastify'

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
        <html lang="en" className="scroll-smooth">
            <body
                className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-gp-blue-bg`}
            >
                <Navbar />

                {/* Gradient Blobs */}
                <div className="-z-10 fixed top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-white/10 via-white/20 to-white/30 rounded-b-full blur-2xl opacity-40 animate-pulse"></div>
                <div
                    className="fixed top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-gp-primary/10 via-gp-primary/20 to-gp-primary/30 rounded-b-full blur-3xl opacity-30 animate-pulse"
                    style={{ animationDelay: '1s' }}
                ></div>

                {/* Main Section with Components */}
                <main className="lg:max-w-[1450px] mx-auto max-w-screen">
                    {children}
                </main>
                <ToastContainer
                    position="bottom-right"
                    theme="colored"
                    closeOnClick={true}
                />
            </body>
        </html>
    )
}

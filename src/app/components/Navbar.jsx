'use client'

import React, { useEffect, useState } from 'react'
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri'
import { AnimatePresence, motion } from 'framer-motion'
import { CiMobile3 } from 'react-icons/ci'

import {
    HiHome,
    HiUser,
    HiCog6Tooth,
    HiBriefcase,
    HiEnvelope,
} from 'react-icons/hi2'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Nav Links Array
    const navLinks = [
        { name: 'Home', href: '/', icon: HiHome },
        { name: 'About', href: '#about', icon: HiUser },
        { name: 'Services', href: '#services', icon: HiCog6Tooth },
        { name: 'Portfolio', href: '#portfolio', icon: HiBriefcase },
        { name: 'Contact', href: '#contact', icon: HiEnvelope },
    ]

    //   Header background change on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`sticky top-0 w-full z-50 transition-all duration-500 ease-out py-3 flex justify-center${
                isScrolled ? '' : ''
            }`}
        >
            <nav
                className={`flex flex-col min-[825px]:flex-row justify-around w-[95%] py-4 transition-all duration-500 ease-out  ${
                    isScrolled
                        ? 'max-w-[1300px] px-4 rounded-4xl bg-black/30 backdrop-blur-lg shadow-sm shadow-gp-accent/10'
                        : 'max-w-[1400px]'
                }`}
            >
                <div className="flex justify-between w-full">
                    {/* Logo */}
                    <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        href="/"
                        className="font-headingFont uppercase mr-4 cursor-pointer flex justify-center items-center text-gp-accent font-bold text-lg"
                    >
                        Paschalis Grammenos
                        <span className="text-gp-primary text-3xl -mt-3 md:-mt-2">
                            .
                        </span>
                    </motion.a>
                    {/* Nav Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className={`hidden min-[825px]:flex items-center border border-gp-accent/30 gap-7 bg-base shadow-lg opacity-80 px-8 py-3 rounded-full ${
                            isScrolled
                                ? 'bg-transparent shadow-none opacity-100 border-0'
                                : ''
                        }`}
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 + index * 0.1,
                                }}
                                href={link.href}
                                key={link.href || index}
                                className="font-headingFont uppercase text-gp-accent text-center text-[15px] font-bold hover:text-gp-primary transition-all duration-300 ease-in-out"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                    {/* Desktop Let's talk button */}
                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        href="https://card.dalution.gr/pgrammenos"
                        target="_blank"
                        className="font-headingFont uppercase hidden min-[825px]:flex text-[16px] font-semibold filled_button py-3 px-8 text-white rounded-full items-center gap-2 hover:opacity-90 transition-opacity"
                    >
                        <CiMobile3 className="text-lg" /> My Card
                    </motion.a>
                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                        className="min-[825px]:hidden p-2 text-gp-accent hover:text-gray-900 transition-colors"
                    >
                        {/* Close Menu Icon */}
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <RiCloseLine className="text-2xl text-gp-accent hover:text-gp-primary focus:text-gp-primary active:text-gp-primary" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <RiMenu4Line className="text-2xl text-gp-accent hover:text-gp-primary focus:text-gp-primary active:text-gp-primary" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={`min-[825px]:hidden w-full top-[80px] z-40`}
                        >
                            <div className="bg-gp-blue-bg backdrop-blur-3xl shadow-gp-accent/20 shadow-lg border border-gp-accent/20 rounded-2xl mx-2 mt-2 p-3">
                                <div className="flex flex-col gap-4">
                                    {navLinks.map((link, index) => {
                                        const IconComponent = link.icon

                                        return (
                                            <motion.a
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.1,
                                                }}
                                                onClick={closeMenu}
                                                key={link.href || index}
                                                href={link.href}
                                                className="flex gap-2 items-center font-headingFont uppercase text-gp-accent text-[16px] font-normal hover:text-gp-primary focus:text-gp-primary active:text-gp-primary py-3 border-b border-gp-accent/20 transition-all duration-300 ease-in-out"
                                            >
                                                <IconComponent className="text-xl text-current/60" />
                                                {link.name}
                                            </motion.a>
                                        )
                                    })}
                                    {/* Mobile Let's talk button */}
                                    <motion.a
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.5,
                                        }}
                                        onClick={closeMenu}
                                        href="https://card.dalution.gr/pgrammenos"
                                        target="_blank"
                                        className="font-headingFont uppercase flex text-[16px] font-semibold filled_button py-4 px-8 text-gp-blue-bg rounded-full items-center justify-center gap-2 mt-4 hover:opacity-90 transition-opacity"
                                    >
                                        <CiMobile3 className="text-lg" /> My
                                        Card
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    )
}

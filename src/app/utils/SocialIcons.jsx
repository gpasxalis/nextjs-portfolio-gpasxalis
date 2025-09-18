'use client'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { CiMobile3 } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function SocialIcons({ classes }) {
    // Social Media Links Array
    const socialIcons = [
        { icon: FaLinkedin, href: 'https://linkedin.com/' },
        {
            icon: FaGithub,
            href: 'https://github.com/gpasxalis',
        },
        {
            icon: CiMobile3,
            href: 'https://card.dalution.gr/pgrammenos',
        },
    ]

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } },
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className={`${classes}`}
        >
            {socialIcons.map((social, index) => {
                const IconComponent = social.icon
                return (
                    <motion.a
                        variants={item}
                        whileHover={{ scale: 1.02, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={social.href}
                        key={index}
                        className="p-4 rounded-full border border-outer text-gp-accent hover:bg-gp-accent/5 transition-all"
                    >
                        <IconComponent className="text-xl md:text-2xl text-gp-accent" />
                    </motion.a>
                )
            })}
        </motion.div>
    )
}

'use client'
import React from 'react'
import SocialIcons from '../utils/SocialIcons'
import Link from 'next/link'

import { motion } from 'framer-motion'

export default function Footer() {
    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } },
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }
    return (
        <footer className="py-12 px-4 text-center">
            <SocialIcons classes="flex justify-center gap-2 md:gap-6 mb-8" />
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-bodyFont text-gp-accent font-semibold text-gradient max-w-3xl mx-auto mb-8"
            >
                Want to know more about me, tell me about your project or just
                to say hello? Drop me a line and I'll get back as soon as
                possible.
            </motion.p>
            <motion.hr
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-outer mb-8 border-gp-accent"
            />
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className="grid grid-cols-1 md:grid-cols-3 gap-6 text-md text-content"
            >
                <motion.div variants={item}>
                    <p className="font-semibold text-gp-accent font-headingFont">
                        Location
                    </p>
                    <p className="text-gp-accent/80 font-bodyFont">
                        AXD, Greece
                    </p>
                </motion.div>
                <motion.div variants={item}>
                    <p className="font-semibold text-gp-accent font-headingFont">
                        Phone
                    </p>
                    <p className="text-gp-accent/80 font-bodyFont">
                        <Link href={`tel:+306978101030`}>+30 697 810 1030</Link>
                    </p>
                </motion.div>
                <motion.div variants={item}>
                    <p className="font-semibold text-gp-accent font-headingFont">
                        Email
                    </p>

                    <p className="text-gp-accent/80 font-bodyFont">
                        <Link href={`mailto:paschalisgrammenos@gmail.com`}>
                            paschalisgrammenos@gmail.com
                        </Link>
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    )
}

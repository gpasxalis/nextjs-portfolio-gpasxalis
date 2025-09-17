'use client'
import { motion, scale } from 'framer-motion'
import Link from 'next/link'

import { BsFillPersonFill } from 'react-icons/bs'
import { HiMapPin, HiMiniEnvelope, HiPhone } from 'react-icons/hi2'

export default function ContactCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-row gap-5"
            >
                <div>
                    <div className="p-4 rounded-xl border border-outer text-gp-accent hover:bg-gp-accent/5 transition-all">
                        <BsFillPersonFill />
                    </div>
                </div>
                <div>
                    <p className="text-gp-accent/60 text-sm font-normal mb-1 font-bodyFont">
                        Name
                    </p>
                    <p className="text-gp-accent/90 text-xl font-semibold font-headingFont">
                        Paschalis Grammenos
                        <span className="text-gp-primary">.</span>
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-row gap-5"
            >
                <div>
                    <div className="p-4 rounded-xl border border-outer text-gp-accent hover:bg-gp-accent/5 transition-all">
                        <HiPhone />
                    </div>
                </div>
                <div>
                    <p className="text-gp-accent/60 text-sm font-normal mb-1 font-bodyFont">
                        Phone
                    </p>
                    <p className="text-gp-accent/90 text-xl font-semibold font-headingFont">
                        <Link href={`tel:+306978101030`}>+30 697 810 1030</Link>
                        <span className="text-gp-primary">.</span>
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-row gap-5"
            >
                <div>
                    <div className="p-4 rounded-xl border border-outer text-gp-accent hover:bg-gp-accent/5 transition-all">
                        <HiMiniEnvelope />
                    </div>
                </div>
                <div>
                    <p className="text-gp-accent/60 text-sm font-normal mb-1 font-bodyFont">
                        Email
                    </p>
                    <p className="text-gp-accent/90 text-xl font-semibold font-headingFont">
                        <Link href={`mailto:paschalisgrammenos@gmail.com`}>
                            paschalisgrammenos@gmail.com
                        </Link>
                        <span className="text-gp-primary">.</span>
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-row gap-5"
            >
                <div>
                    <div className="p-4 rounded-2xl border border-outer text-gp-accent hover:bg-gp-accent/5 transition-all">
                        <HiMapPin />
                    </div>
                </div>
                <div>
                    <p className="text-gp-accent/60 text-sm font-normal mb-1 font-bodyFont">
                        Location
                    </p>
                    <p className="text-gp-accent/90 text-xl font-semibold font-headingFont">
                        AXD, Greece<span className="text-gp-primary">.</span>
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

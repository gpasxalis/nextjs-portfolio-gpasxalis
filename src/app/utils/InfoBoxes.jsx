'use client'
import { motion, scale } from 'framer-motion'

export default function InfoBoxes({ title, item_text, classes }) {
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            className={`${classes} bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-gp-accent/10 hover:shadow-md hover:shadow-gp-accent/20`}
        >
            <h3 className="font-headingFont text-5xl md:text-6xl font-bold text-gradient mb-4 text-gp-accent">
                {title}
            </h3>
            <p className="text-gp-accent/80 font-medium text-lg font-bodyFont">
                {item_text}
            </p>
        </motion.div>
    )
}

'use client'
import { motion, scale } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

export default function PortfolioItem(project) {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    const card = {
        hidden: { opacity: 0, y: 60, rotateX: -10 },
        show: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    return (
        <motion.div
            variants={card}
            whileHover={{ scale: 1.03, rotateY: 3 }}
            transition={{
                type: 'spring',
                stiffness: 120,
                damping: 12,
                duration: 0.5,
                delay: 0.3,
            }}
            key={project.id}
            className="bg-gp-accent/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-gp-accent/10 w-full md:w-[30%]"
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
            >
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto"
                />
            </motion.div>

            {/* Projects Info */}
            <div className="p-3 md:p-6 rounded-b-2xl bg-black/20 backdrop-blur-md font-bodyFont">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-wrap gap-2 mb-3"
                >
                    {project.tags.map((tagText, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white/10 text-gp-accent/80 text-sm rounded-full border border-white/15"
                        >
                            {tagText}
                        </span>
                    ))}
                </motion.div>
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gp-accent transition-colors duration-300">
                        {project.title}
                        <span className="text-gp-primary font-headingFont text-3xl">
                            .
                        </span>
                    </h3>
                    {/* Button */}
                    <motion.a
                        href={project.url}
                        target="_blank"
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center justify-center w-10 h-10 bg-gp-accent/10 backdrop-blur-sm border border-gp-accent/20 rounded-full text-gp-accent hover:bg-white/20 transition-colors duration-300"
                    >
                        <FiArrowUpRight className="text-lg" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    )
}

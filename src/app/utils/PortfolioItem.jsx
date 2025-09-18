'use client'
import { motion, scale } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { IoGlobeOutline } from 'react-icons/io5'

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
            className="backdrop-blur-md rounded-3xl overflow-hidden border border-gp-accent/10 w-full md:w-[30%]"
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
            <div className="flex flex-col gap-4 p-5 md:p-6 rounded-b-2xl bg-black/20 backdrop-blur-md font-bodyFont">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gp-accent transition-colors duration-300">
                        {project.title}
                        <span className="text-gp-primary font-headingFont text-3xl">
                            .
                        </span>
                    </h3>
                </div>

                <motion.p
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-pretty font-bodyFont text-sm text-gp-accent/80"
                >
                    {project.paragraph}
                </motion.p>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-wrap gap-2"
                >
                    {project.tags.map((tagText, index) => (
                        <span
                            key={index}
                            className="font-bodyFont px-2 py-1 bg-white/10 text-gp-accent/80 text-[11px] rounded-full border border-white/15"
                        >
                            {tagText}
                        </span>
                    ))}
                </motion.div>

                {/* Projects Button */}

                <motion.a
                    href={project.url}
                    target="_blank"
                    variants={item}
                    className="flex items-center mt-3 gap-1 rounded-full font-bodyFont font-semibold w-fit text-[11px] px-2 py-1 bg-gp-accent hover:bg-gp-accent/85 focus:bg-gp-accent/85 active:bg-gp-accent/85 text-gp-blue-bg"
                >
                    <IoGlobeOutline />
                    Website
                </motion.a>
            </div>
        </motion.div>
    )
}

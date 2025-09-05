'use client'

import { RiNextjsFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Marquee(props) {
    const icons = [
        '/assets/vs-code.svg',
        '/assets/python.svg',
        '/assets/wordpress.svg',
        '/assets/nextjs.svg',
        '/assets/tailwindcss.svg',
        '/assets/html5.svg',
        '/assets/photoshop.svg',
        '/assets/notion.svg',
    ]

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    return (
        <section className="w-full py-10 px-6 flex justify-around items-center">
            <motion.div
                variants={item}
                className="relative max-w-3xl my-6 md:my-8 mask-r-from-50% mask-l-from-50% overflow-hidden flex justify-center items-center"
            >
                <motion.div
                    className="flex gap-9 w-max justify-center"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 15,
                        ease: 'linear',
                    }}
                >
                    {/* Icons loop */}
                    {icons.concat(icons).map((icon, index) => (
                        <Image
                            src={icon}
                            key={index}
                            alt={`icon ${index + 1}`}
                            width={40}
                            height={40}
                            className="md:w-[50px] md:h-[50px]"
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

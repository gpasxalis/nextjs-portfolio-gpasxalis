'use client'
import { motion, scale } from 'framer-motion'
import Link from 'next/link'
import Tag from './Tag'

import {
    IoLogoPython,
    IoLogoJavascript,
    IoLogoReact,
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoWordpress,
    IoLogoWindows,
} from 'react-icons/io5'
import { BiLogoFlask, BiLogoJquery, BiLogoMongodb } from 'react-icons/bi'
import { RiNextjsFill } from 'react-icons/ri'
import {
    SiJson,
    SiElasticsearch,
    SiMysql,
    SiPrestashop,
    SiTailwindcss,
    SiBootstrap,
    SiCloudflare,
    SiGoogleanalytics,
    SiCpanel,
    SiPlesk,
    SiLinux,
} from 'react-icons/si'

export default function TechStack() {
    const techStackLanguages = [
        { name: 'Python', icon: <IoLogoPython /> },
        { name: 'Flask', icon: <BiLogoFlask /> },
        { name: 'JavaScript', icon: <IoLogoJavascript /> },
        { name: 'NextJS', icon: <RiNextjsFill /> },
        { name: 'React', icon: <IoLogoReact /> },
        { name: 'HTML5', icon: <IoLogoHtml5 /> },
        { name: 'CSS3', icon: <IoLogoCss3 /> },
        { name: 'jQuery', icon: <BiLogoJquery /> },
        { name: 'ElasticSearch', icon: <SiElasticsearch /> },
        { name: 'JSON', icon: <SiJson /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <BiLogoMongodb /> },
    ]

    const techStackTools = [
        { name: 'Wordpress', icon: <IoLogoWordpress /> },
        { name: 'Prestashop', icon: <SiPrestashop /> },
        { name: 'Cloudflare', icon: <SiCloudflare /> },
        { name: 'G. Analytics', icon: <SiGoogleanalytics /> },
        { name: 'cPanel', icon: <SiCpanel /> },
        { name: 'Plesk', icon: <SiPlesk /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'Linux', icon: <SiLinux /> },
        { name: 'Windows', icon: <IoLogoWindows /> },
    ]

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 w-full"
        >
            <div className="flex gap-2">
                <Tag>Languages</Tag>
                <Tag>Frameworks</Tag>
                <Tag>Technologies</Tag>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full flex gap-3 md:gap-4 flex-wrap"
            >
                {techStackLanguages.map((tech) => (
                    <motion.div
                        key={tech.name}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col gap-2 md:gap-3 bg-gp-accent/5 border border-gp-accent/10 hover:shadow-md hover:shadow-gp-accent/20 px-2 py-3 w-[30%] md:w-1/10 rounded-2xl items-center"
                    >
                        <div className="text-4xl text-gp-primary">
                            {tech.icon}
                        </div>
                        <div className="font-headingFont font-medium text-lg text-gp-accent">
                            {tech.name}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="flex gap-2 pt-8">
                <Tag>Systems</Tag>
                <Tag>Tools</Tag>
                <Tag>Software</Tag>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full flex gap-4 flex-wrap"
            >
                {techStackTools.map((tech) => (
                    <motion.div
                        key={tech.name}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col gap-2 md:gap-3 bg-gp-accent/5 border border-gp-accent/10 hover:shadow-md hover:shadow-gp-accent/20 px-2 py-3 w-[30%] md:w-1/10 rounded-2xl items-center"
                    >
                        <div className="text-4xl text-gp-primary">
                            {tech.icon}
                        </div>
                        <div className="font-headingFont font-medium text-lg text-gp-accent">
                            {tech.name}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

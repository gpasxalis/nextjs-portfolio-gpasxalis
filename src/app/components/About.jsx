import LottieBackground from '../utils/LottieBackground'
import SectionTitles from '../utils/SectionTitles'
import Button from '../utils/Button'
import Tag from '../utils/Tag'
import { motion, scale } from 'framer-motion'
import IconCard from '../utils/IconCard'
import InfoCard from '../utils/InfoCard'

import {
    MdOutlineComputer,
    MdDesignServices,
    MdPhoneIphone,
    MdDevices,
    MdTrendingUp,
    MdSpeed,
} from 'react-icons/md'

import LaptopCoffee from '../utils/lotties/LaptopCoffee.json'

export default function About() {
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <section className="pb-20 px-6 flex justify-around items-center flex-col gap-12">
            <div className="w-full pt-20 flex justify-around items-start md:items-center flex-col md:flex-row gap-10">
                <div className="max-w-full w-full lg:pl-5">
                    <Tag>about me</Tag>
                    <SectionTitles>Behind the Code</SectionTitles>
                </div>
            </div>

            <div className="w-full flex justify-around items-center flex-col md:flex-row flex-wrap">
                <InfoCard
                    title={'40+'}
                    item_text={'Happy clients'}
                    classes="w-full md:w-[30%]"
                />
                <InfoCard
                    title={'3+'}
                    item_text={'Years of experience'}
                    classes="w-full md:w-[30%]"
                />
                <InfoCard
                    title={'10+'}
                    item_text={'Projects done'}
                    classes="w-full md:w-[30%]"
                />
            </div>

            <div className="w-full flex justify-around items-center flex-col md:flex-row flex-wrap gap-15">
                <div className="w-full md:w-[30%]">
                    <IconCard
                        title="Web Development"
                        item_text="I design and build modern websites tailored to your needs, focusing on clean code, great user experience, and long-lasting performance"
                    >
                        <div className="bg-gp-accent w-fit p-4 rounded-2xl text-4xl text-gp-blue-bg">
                            <MdOutlineComputer />
                        </div>
                    </IconCard>
                </div>
            </div>

            <div className="w-full flex justify-center items-center">
                <Button
                    classes="filled_button text-gp-blue-bg"
                    href_to="#services"
                >
                    Contact Me
                </Button>
            </div>
        </section>
    )
}

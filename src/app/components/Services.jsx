import LottieBackground from '../utils/LottieBackground'
import SectionTitles from '../utils/SectionTitles'
import Button from '../utils/Button'
import Tag from '../utils/Tag'
import IconCard from '../utils/IconCard'
import {
    MdOutlineComputer,
    MdDesignServices,
    MdPhoneIphone,
    MdDevices,
    MdTrendingUp,
    MdSpeed,
} from 'react-icons/md'

import LaptopCoffee from '../utils/lotties/LaptopCoffee.json'

export default function Services() {
    return (
        <section className="pb-20 px-6 flex justify-around items-center flex-col gap-12">
            <div className="w-full pt-20 flex justify-around items-start md:items-center flex-col md:flex-row gap-10">
                <div className="flex justify-center self-center md:self-start py-20 md:p-0 -m-8 max-w-full md:w-1/2 lg:px-5 order-1 md:order-0">
                    <LottieBackground
                        animationData={LaptopCoffee}
                        classes="w-full md:w-[90%]"
                    />
                </div>
                <div className="max-w-full w-full md:w-1/2 lg:pl-5 order-0 md:order-1">
                    <Tag>what we do</Tag>
                    <SectionTitles>Infinite Solutions</SectionTitles>
                </div>
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

                <div className="w-full md:w-[30%]">
                    <IconCard
                        title="UI/UX Design"
                        item_text="Crafting designs that are not only visually appealing but also easy to navigate, ensuring users enjoy every interaction"
                    >
                        <div className="bg-gp-accent w-fit p-4 rounded-2xl text-4xl text-gp-blue-bg">
                            <MdDesignServices />
                        </div>
                    </IconCard>
                </div>

                <div className="w-full md:w-[30%]">
                    <IconCard
                        title="Mobile First Design"
                        item_text="I design with mobile users in mind first, ensuring a smooth, intuitive experience that scales perfectly to larger screens"
                    >
                        <div className="bg-gp-accent w-fit p-4 rounded-2xl text-4xl text-gp-blue-bg">
                            <MdPhoneIphone />
                        </div>
                    </IconCard>
                </div>

                <div className="w-full md:w-[30%]">
                    <IconCard
                        title="Fully Responsive"
                        item_text="Your website will look and work perfectly on any device, ensuring a seamless experience for users on desktops, tablets, and mobile phones"
                    >
                        <div className="bg-gp-accent w-fit p-4 rounded-2xl text-4xl text-gp-blue-bg">
                            <MdDevices />
                        </div>
                    </IconCard>
                </div>

                <div className="w-full md:w-[30%]">
                    <IconCard
                        title="SEO Optimized"
                        item_text="I implement SEO best practices to help your website rank higher, attract more visitors, and grow your online presence"
                    >
                        <div className="bg-gp-accent w-fit p-4 rounded-2xl text-4xl text-gp-blue-bg">
                            <MdTrendingUp />
                        </div>
                    </IconCard>
                </div>

                <div className="w-full md:w-[30%]">
                    <IconCard
                        title="Optimized Page Speed"
                        item_text="Fast websites keep users engaged. We optimize every detail to deliver quick loading times and smooth performance"
                    >
                        <div className="bg-gp-accent w-fit p-4 rounded-2xl text-4xl text-gp-blue-bg">
                            <MdSpeed />
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

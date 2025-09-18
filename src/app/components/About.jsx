import SectionTitles from '../utils/SectionTitles'
import Button from '../utils/Button'
import Tag from '../utils/Tag'
import InfoBoxes from '../utils/InfoBoxes'
import InfoCard from '../utils/InfoCard'
import TechStack from './TechStack'
import ButtonSmall from '../utils/ButtonSmall'
import TransparentButton from '../utils/TransparentButton'

export default function About() {
    return (
        <section
            id="about"
            className="pb-20 px-6 flex justify-around items-center flex-col gap-12"
        >
            <div className="w-full pt-20 flex justify-around items-start md:items-center flex-col md:flex-row gap-10">
                <div className="max-w-full w-full">
                    <Tag>about me</Tag>
                    <SectionTitles>Behind the Code</SectionTitles>
                </div>
            </div>

            <div className="w-full flex justify-around items-center flex-col md:flex-row flex-wrap gap-10 pb-5">
                <InfoBoxes
                    title={'7+'}
                    item_text={'Happy clients'}
                    classes="w-full md:w-[30%]"
                />
                <InfoBoxes
                    title={'3+'}
                    item_text={'Years of experience'}
                    classes="w-full md:w-[30%]"
                />
                <InfoBoxes
                    title={'10+'}
                    item_text={'Projects done'}
                    classes="w-full md:w-[30%]"
                />
            </div>

            <div className="w-full flex justify-around items-start flex-col md:flex-row gap-10">
                <div className="w-full md:w-2/3 flex justify-around items-start flex-col gap-10">
                    <p className="font-bodyFont text-gp-accent/80 text-sm md:text-md">
                        Curious and persistent by nature, I have been passionate
                        about programming and creating digital experiences
                        throughout my life. I enjoy solving problems step by
                        step, exploring new technologies, and constantly
                        learning to expand my skills. My methodical mindset and
                        attention to detail help me build solutions that are
                        both functional and thoughtfully designed. <br />
                        <br />I thrive when working independently, but I also
                        value collaboration and the exchange of ideas within a
                        team. I believe that staying true to oneself is
                        essential, and I strive to let my work reflect my
                        creativity, dedication, and curiosity. Every project is
                        an opportunity to grow, experiment, and push the
                        boundaries of what I can achieve
                    </p>

                    <TransparentButton href_to="techstack">
                        My Tech Stack
                    </TransparentButton>
                </div>

                <div className="w-full md:w-1/3 flex justify-around items-start md:items-center flex-col">
                    <InfoCard />
                </div>
            </div>

            <div id="techstack" className="w-full flex flex-col">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-headingFont font-bold text-gp-accent py-5 md:py-10">
                    My Tech Stack<span className="text-gp-primary">.</span>
                </h3>
                <TechStack />
            </div>
        </section>
    )
}

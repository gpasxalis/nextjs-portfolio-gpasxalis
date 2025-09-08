import SectionTitles from '../utils/SectionTitles'
import Button from '../utils/Button'
import Tag from '../utils/Tag'
import PortfolioItem from '../utils/PortfolioItem'

import { ProjectData } from '../utils/projects-data'

export default function Portfolio() {
    return (
        <section className="pb-20 px-6 flex justify-around items-center flex-col gap-12">
            <div className="w-full pt-20 flex justify-around items-start md:items-center flex-col md:flex-row gap-10">
                <div className="max-w-full w-full">
                    <Tag>projects</Tag>
                    <SectionTitles>Digital Creations</SectionTitles>
                </div>
            </div>

            <div className="flex flex-row flex-wrap w-full gap-4">
                {ProjectData.map((project) => (
                    <PortfolioItem
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        img={project.img}
                        category={project.category}
                        tags={project.tags}
                        url={project.liveUrl}
                    />
                ))}
            </div>
        </section>
    )
}

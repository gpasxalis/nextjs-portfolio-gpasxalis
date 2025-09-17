import SectionTitles from '../utils/SectionTitles'
import Tag from '../utils/Tag'
import ContactForm from '../utils/ContactForm'
import ContactCard from '../utils/ContactCard'

export default function Services() {
    return (
        <section className="pb-20 px-6 flex justify-around items-center flex-col gap-2">
            <div className="w-full flex justify-around flex-col pt-20">
                <Tag>contact now</Tag>
                <SectionTitles>Get in touch</SectionTitles>
            </div>
            <div className="w-full flex justify-around items-center md:items-center flex-col md:flex-row gap-10">
                <div className="max-w-full w-full md:w-1/2 order-1 md:order-0">
                    <ContactCard />
                </div>
                <div className="max-w-full w-full md:w-1/2 order-0 md:order-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-headingFont font-bold text-gp-accent py-5 md:py-10">
                        Contact Me<span className="text-gp-primary">.</span>
                    </h3>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

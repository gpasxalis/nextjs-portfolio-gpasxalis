import SectionTitles from '../utils/SectionTitles'
import Tag from '../utils/Tag'
import ContactForm from '../utils/ContactForm'

export default function Services() {
    return (
        <section className="pb-20 px-6 flex justify-around items-center flex-col gap-12">
            <div className="w-full pt-20 flex justify-around items-start md:items-center flex-col md:flex-row gap-10">
                <div className="max-w-full w-full md:w-1/2 lg:pl-5 order-0">
                    <Tag>contact now</Tag>
                    <SectionTitles>Contact with me</SectionTitles>
                </div>
                <div className="max-w-full w-full md:w-1/2 lg:pl-5 order-0">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

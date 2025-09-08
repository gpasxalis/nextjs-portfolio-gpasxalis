export default function SectionTitles({ children }) {
    return (
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-headingFont font-bold text-gp-accent py-5 md:py-10">
            {children}
            <span className="text-gp-primary">.</span>
        </h2>
    )
}

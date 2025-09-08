export default function IconCard({ title, item_text, children }) {
    return (
        <div className="rounded-2xl pt-3 pb-10 px-7 border border-gp-accent/20 bg-gp-accent/5 backdrop-blur-lg shadow-sm shadow-gp-accent/10 flex flex-col gap-4">
            <div className="text-4xl text-gp-blue-bg pb-10">{children}</div>

            <h4 className="font-headingFont font-semibold text-gp-accent text-xl md:text-2xl">
                {title}
            </h4>

            <p className="text-gp-accent/80">{item_text}</p>
        </div>
    )
}

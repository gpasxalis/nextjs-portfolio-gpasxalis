export default function Tag({ children }) {
    return (
        <h3 className="text-sm text-gp-accent border border-gp-accent/40 shadow-sm shadow-gp-accent/10 font-headingFont uppercase font-semibold w-fit py-1.5 px-3 rounded-2xl">
            {children}
        </h3>
    )
}

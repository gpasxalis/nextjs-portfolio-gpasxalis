import Link from 'next/link'

export default function IconCard({ title, item_text, children }) {
    return (
        <div className="rounded-2xl py-5 px-7 border border-gp-accent/40 bg-gp-accent/20 backdrop-blur-lg shadow-sm shadow-gp-accent/10">
            <div className="text-4xl text-gp-blue-bg pb-10">{children}</div>

            <h4 className="text-gp-accent">{title}</h4>

            <p>{item_text}</p>

            <Link href="#services" className="fake_button">
                Get Started
            </Link>
        </div>
    )
}

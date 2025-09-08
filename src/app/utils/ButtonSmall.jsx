import Link from 'next/link'

export default function ButtonSmall({ children, href_to, classes }) {
    return (
        <Link
            href={href_to}
            className={`${classes} px-8 py-2 rounded-4xl uppercase text-center font-bold font-headingFont`}
        >
            {children}
        </Link>
    )
}

import Link from 'next/link'

export default function Button({ children, classes, href_to }) {
    return (
        <Link
            href={href_to}
            className={`${classes} py-4 rounded-4xl min-w-48 uppercase text-center font-bold font-headingFont`}
        >
            {children}
        </Link>
    )
}

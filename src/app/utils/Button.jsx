import Link from 'next/link'

export default function Button(props) {
    return (
        <Link
            href="#services"
            className={`${props.classes} py-4 rounded-4xl min-w-48 uppercase text-center font-bold font-headingFont`}
        >
            {props.text}
        </Link>
    )
}

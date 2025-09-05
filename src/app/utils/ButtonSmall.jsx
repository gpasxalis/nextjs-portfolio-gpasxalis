import Link from 'next/link'

export default function ButtonSmall(props) {
    return (
        <Link
            href={props.href_to}
            className={`${props.classes} px-8 py-2 rounded-4xl uppercase text-center font-bold font-headingFont`}
            target="_blank"
        >
            {props.text}
        </Link>
    )
}

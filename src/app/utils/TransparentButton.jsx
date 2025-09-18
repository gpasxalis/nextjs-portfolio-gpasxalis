'use client'
import { GoArrowRight } from 'react-icons/go'

import Link from 'next/link'

export default function TransparentButton({ children, href_to }) {
    const handleScroll = (e) => {
        e.preventDefault()
        const target = document.getElementById(href_to)

        if (target) {
            const offset = 80
            const targetPosition =
                target.getBoundingClientRect().top + window.scrollY - offset

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            })
        }
    }

    return (
        <Link
            href={`#${href_to}`}
            onClick={handleScroll}
            className="
        group 
        flex items-center gap-2 
        text-lg text-gp-accent/80 
        hover:text-gp-accent
        transition-colors duration-300
        active:scale-95
        title text-center font-bold font-headingFont
      "
        >
            <span>{children}</span>
            <GoArrowRight
                className="
          transform transition-transform duration-300 
          group-hover:translate-x-1.5
        "
            />
        </Link>
    )
}

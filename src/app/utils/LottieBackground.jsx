'use client'
import Lottie from 'lottie-react'
import AstroGuy from '../utils/lotties/dalutionastro.json'

export default function LottieBackground() {
    return (
        <>
            <Lottie animationData={AstroGuy} className="flex items-start" />
        </>
    )
}

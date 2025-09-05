'use client'
import Lottie from 'lottie-react'

export default function LottieBackground({ animationData, classes }) {
    return (
        <>
            <Lottie animationData={animationData} className={classes} />
        </>
    )
}

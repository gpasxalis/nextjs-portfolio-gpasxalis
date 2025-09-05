import LottieBackground from '../utils/LottieBackground'
import Button from '../utils/Button'
import Marquee from './Marquee'
import G_LOGO from '../../../public/assets/g_logo.png'

export default function Hero() {
    return (
        <section className="py-20 px-6 flex justify-around items-center flex-col md:flex-row">
            <div className="max-w-full md:w-1/2 lg:pl-5">
                <h3 className="text-sm text-gp-accent font-headingFont uppercase font-semibold">
                    Crafting Digital Dreams
                </h3>
                <h1 className="text-5xl md:text-5xl lg:text-8xl font-black uppercase text-gp-accent font-headingFont pt-2 md:pt-3">
                    I am{' '}
                    <span className="text-gp-primary">Paschalis Grammenos</span>
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-headingFont font-bold text-gp-accent py-5 md:py-10">
                    Web Developer<span className="text-gp-primary">.</span>
                </h2>
                <p className="font-bodyFont text-sm md:text-lg inline-block text-gp-accent text-wrap">
                    I create fast, responsive, and user-friendly websites. My
                    mission is to turn ideas into digital solutions that look
                    great and perform even better
                    <span className="text-gp-primary">.</span>
                </p>
                <div className="flex py-14 gap-7">
                    <Button
                        classes="filled_button text-gp-blue-bg"
                        href_to="#services"
                        text="Get Started"
                    />
                    <Button
                        classes="transparent_button"
                        href_to="#services"
                        text="About Me"
                    />
                </div>
                <Marquee />
            </div>
            <div className="flex justify-center self-start -m-8 max-w-full md:w-1/3 lg:px-5">
                <LottieBackground />
            </div>
        </section>
    )
}

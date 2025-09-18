import LottieBackground from '../utils/LottieBackground'
import Button from '../utils/Button'
import Marquee from './Marquee'
import G_LOGO from '../../../public/assets/g_logo.png'
import Tag from '../utils/Tag'
import SocialIcons from '../utils/SocialIcons'

import AstroGuy from '../utils/lotties/dalutionastro.json'

export default function Hero() {
    return (
        <section className="pt-10 min-[825px]:pt-20 pb-10 md:pb-20 px-6 flex justify-around items-center flex-col md:flex-row">
            <div className="max-w-full md:w-1/2 lg:pl-5 flex flex-col gap-5">
                <div className="flex flex-col">
                    <Tag>Crafting Digital Dreams</Tag>
                    <h1 className="text-5xl md:text-5xl lg:text-8xl font-black uppercase text-gp-accent font-headingFont pt-2 md:pt-3">
                        I am{' '}
                        <span className="text-gp-primary">
                            Paschalis Grammenos
                        </span>
                    </h1>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-headingFont font-bold text-gp-accent md:py-5">
                    Web Developer<span className="text-gp-primary">.</span>
                </h2>
                <p className="font-bodyFont text-sm md:text-lg inline-block text-gp-accent/80 text-wrap">
                    I create fast, responsive, and user-friendly websites. My
                    mission is to turn ideas into digital solutions that look
                    great and perform even better
                    <span className="text-gp-primary">.</span>
                </p>

                <div className="flex py-8 gap-7">
                    <Button
                        classes="filled_button text-gp-blue-bg"
                        href_to="#contact"
                    >
                        Get in touch
                    </Button>
                    <Button classes="transparent_button" href_to="#about">
                        About Me
                    </Button>
                </div>
                <SocialIcons classes="flex gap-2 md:gap-6" />

                <Marquee />
            </div>
            <div className="flex justify-center md:self-start -m-8 max-w-full md:w-1/3 lg:px-5">
                <LottieBackground animationData={AstroGuy} />
            </div>
        </section>
    )
}

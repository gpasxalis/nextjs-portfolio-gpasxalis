import LottieBackground from '../utils/LottieBackground'
import Button from '../utils/Button'
import Tag from '../utils/Tag'
import IconCard from '../utils/IconCard'
import { MdOutlineComputer } from 'react-icons/md'

import LaptopCoffee from '../utils/lotties/LaptopCoffee.json'

export default function Services() {
    return (
        <section className="flex justify-around items-center flex-col">
            <div className="w-full py-20 px-6 flex justify-around items-center flex-col md:flex-row">
                <div className="flex justify-center self-start -m-8 max-w-full md:w-1/2 lg:px-5">
                    <LottieBackground
                        animationData={LaptopCoffee}
                        classes="flex items-start w-[90%]"
                    />
                </div>
                <div className="max-w-full md:w-1/2 lg:pl-5">
                    <Tag>what we do</Tag>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-headingFont font-bold text-gp-accent py-5 md:py-10">
                        Infinite Solutions
                        <span className="text-gp-primary">.</span>
                    </h2>
                </div>
            </div>

            <div className="w-full flex justify-around items-center flex-col md:flex-row flex-wrap">
                <div className="w-1/4">
                    <IconCard title="This is a test" item_text="Item Text test">
                        <div className="bg-gp-accent w-fit p-4 rounded-xl -mt-10 text-4xl text-gp-blue-bg">
                            <MdOutlineComputer />
                        </div>
                    </IconCard>
                </div>
                <div className="w-1/4">
                    <IconCard title="This is a test" item_text="Item Text test">
                        <div className="bg-gp-accent w-fit p-4 rounded-xl -mt-10 text-4xl text-gp-blue-bg">
                            <MdOutlineComputer />
                        </div>
                    </IconCard>
                </div>
                <div className="w-1/4">
                    <IconCard title="This is a test" item_text="Item Text test">
                        <div className="bg-gp-accent w-fit p-4 rounded-xl -mt-10 text-4xl text-gp-blue-bg">
                            <MdOutlineComputer />
                        </div>
                    </IconCard>
                </div>
            </div>
        </section>
    )
}

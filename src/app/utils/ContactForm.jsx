'use client'
import { useState } from 'react'
import { toast } from 'react-toastify' // For notifications
import emailjs from '@emailjs/browser'

import { LuSend } from 'react-icons/lu'
import { FaEnvelope } from 'react-icons/fa6'
import { GoPersonFill } from 'react-icons/go'

function ContactForm() {
    const [userInput, setUserInput] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserInput({
            ...userInput,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

        try {
            const emailParams = {
                name: userInput.name,
                email: userInput.email,
                message: userInput.message,
            }

            const res = await emailjs.send(
                serviceID,
                templateID,
                emailParams,
                userID
            )

            if (res.status === 200) {
                toast.success('Message sent successfully!')
                setUserInput({
                    name: '',
                    email: '',
                    message: '',
                })
            }
        } catch (error) {
            toast.error('Failed to send message. Please try again later.')
        }
    }

    return (
        <>
            <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                        <div className="mx-0 mb-1 sm:mb-4">
                            <div className="flex justify-center items-center gap-2 mb-2 w-full rounded-md border border-gp-accent/30 py-2 pl-2 pr-4 shadow-md text-gray-300 sm:mb-0">
                                <GoPersonFill className="text-xl text-gp-accent" />
                                <input
                                    type="text"
                                    name="name"
                                    value={userInput.name}
                                    onChange={handleChange}
                                    required
                                    id="name"
                                    placeholder="Your name"
                                    className="w-full hover:outline-none focus:outline-none font-sm p-1"
                                />
                            </div>
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                            <div className="flex justify-center items-center gap-2 mb-2 w-full rounded-md border border-gp-accent/30 py-2 pl-2 pr-4 shadow-md text-gray-300 sm:mb-0">
                                <FaEnvelope className="text-xl text-gp-accent" />
                                <input
                                    type="email"
                                    name="email"
                                    value={userInput.email}
                                    onChange={handleChange}
                                    required
                                    id="email"
                                    placeholder="Your email address"
                                    className="w-full hover:outline-none focus:outline-none font-sm p-1"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                        <textarea
                            name="message"
                            value={userInput.message}
                            onChange={handleChange}
                            required
                            id="textarea"
                            cols="30"
                            rows="5"
                            placeholder="Write your message..."
                            className="mb-2 w-full rounded-md border border-gp-accent/30 py-2 pl-2 pr-4 shadow-md text-gray-300 sm:mb-0"
                        ></textarea>
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="flex flex-row font-bodyFont font-bold justify-center items-center gap-2 w-full filled_button px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                        <LuSend className="text-xl" />
                        Send Message
                    </button>
                </div>
            </form>
        </>
    )
}

export default ContactForm

'use client'
import { useState } from 'react'
import { toast } from 'react-toastify' // For notifications
import emailjs from '@emailjs/browser'

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
                            <label
                                htmlFor="name"
                                className="pb-1 text-xs uppercase tracking-wider"
                            ></label>
                            <input
                                type="text"
                                name="name"
                                value={userInput.name}
                                onChange={handleChange}
                                required
                                id="name"
                                placeholder="Your name"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                            />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                            <label
                                htmlFor="email"
                                className="pb-1 text-xs uppercase tracking-wider"
                            ></label>
                            <input
                                type="email"
                                name="email"
                                value={userInput.email}
                                onChange={handleChange}
                                required
                                id="email"
                                placeholder="Your email address"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                            />
                        </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                        <label
                            htmlFor="textarea"
                            className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <textarea
                            name="message"
                            value={userInput.message}
                            onChange={handleChange}
                            required
                            id="textarea"
                            cols="30"
                            rows="5"
                            placeholder="Write your message..."
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        ></textarea>
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full filled_button px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </>
    )
}

export default ContactForm

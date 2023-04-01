import React, { useRef, useState } from 'react'

export default function Subscribe() {
    // 1. Create a reference to the input so we can fetch/clear it's value.
    const inputEl = useRef(null)
    // 2. Hold a message in state to handle the response from our API.
    const [message, setMessage] = useState('')

    const subscribe = async (e) => {
        e.preventDefault()

        // 3. Send a request to our API with the user's email address.
        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })

        const { error } = await res.json()

        if (error) {
            // 4. If there was an error, update the message in state.
            setMessage(error)

            return
        }

        // 5. Clear the input value and show a success message.
        inputEl.current.value = ''
        setMessage('Success! 🎉 Thank you for subscribing to the newsletter!')
    }

    return (
        <>
            <form
                onSubmit={subscribe}
                className="flex justify-center gap-2 mt-4"
            >
                <input
                    id="email-input"
                    className="w-2/3 px-2 py-1 border border-solid border-gray-300 rounded-md outline-blue-200 outline-offset-2 bg-gray-50 dark:bg-[#1e1f26]"
                    name="email"
                    placeholder="Email address"
                    ref={inputEl}
                    required
                    type="email"
                />
                <button className="px-2 py-1 bg-emerald-500 dark:bg-emerald-600 rounded-md text-white hover:bg-emerald-600 dark:hover:bg-emerald-700 duration-150 select-none">
                    Subscribe
                </button>
            </form>
            {message && <p className="mt-4">{message}</p>}
        </>
    )
}

import React from 'react'

export default function Footer() {
    return (
        <div className="text-center">
            <p>My links:</p>
            <div className="flex justify-center">
                <a
                    href="https://www.linkedin.com/in/vincentalbertsson/"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 pr-2 underline text-emerald-500 hover:text-emerald-600"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/valberts"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 pr-2 underline text-emerald-500 hover:text-emerald-600"
                >
                    GitHub
                </a>
            </div>
            <p>
                <i>
                    Get in touch via email:{' '}
                    <a
                        href="mailto:albertsson.vincent@gmail.com"
                        className="underline text-emerald-500 hover:text-emerald-600"
                    >
                        albertsson.vincent@gmail.com
                    </a>
                </i>
            </p>
            <h4 className="font-semibold">Join my mailing list:</h4>
            <div className="flex justify-center gap-2">
                <input
                    type="text"
                    placeholder="Email Address"
                    className="w-2/3 px-2 py-1 border border-solid border-gray-300 rounded-md outline-blue-200 outline-offset-2 dark:bg-[#1e1f26]"
                />
                <button className="px-2 py-1 bg-emerald-500 rounded-md text-white hover:bg-emerald-600">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

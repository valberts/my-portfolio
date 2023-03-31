import React from 'react'
import Subscribe from './Subscribe'

export default function Footer() {
    return (
        <div className="text-center sm:px-[20%] mt-8 text-lg">
            <p>My links:</p>
            <div className="flex justify-center">
                <a
                    href="https://www.linkedin.com/in/vincentalbertsson/"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-2 underline text-emerald-600 dark:text-emerald-200 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/valberts"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-2 underline text-emerald-600 dark:text-emerald-200 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                    GitHub
                </a>
            </div>
            <p>
                <i>
                    Get in touch via email:{' '}
                    <a
                        href="mailto:albertsson.vincent@gmail.com"
                        className="underline text-emerald-600 dark:text-emerald-200 hover:text-emerald-700 dark:hover:text-emerald-300 break-words"
                    >
                        albertsson.vincent@gmail.com
                    </a>
                </i>
            </p>
            <h4 className="font-semibold mt-4">Join my mailing list:</h4>
            <div>
                <Subscribe />
            </div>
        </div>
    )
}

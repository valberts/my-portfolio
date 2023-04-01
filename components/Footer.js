import React from 'react'
import Subscribe from './Subscribe'

export default function Footer() {
    return (
        <div className="text-center sm:px-[20%] mt-8 text-lg">
            <div className="flex justify-center">
                <p>My links:</p>
                <a
                    href="https://www.linkedin.com/in/vincentalbertsson/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 underline text-emerald-600 dark:text-emerald-200 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/valberts"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 underline text-emerald-600 dark:text-emerald-200 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                    GitHub
                </a>
            </div>
            <p className="mt-4">
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

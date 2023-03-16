import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="flex flex-row gap-0 sm:gap-6">
            <Link
                href="/"
                className="py-2 pr-2 underline text-emerald-500 hover:text-emerald-600"
            >
                Home
            </Link>
            <Link
                href="/projects"
                className="py-2 pr-2 underline text-emerald-500 hover:text-emerald-600"
            >
                Projects
            </Link>
            <Link
                href="/blog"
                className="py-2 pr-2 underline text-emerald-500 hover:text-emerald-600"
            >
                Blog
            </Link>
        </div>
    )
}

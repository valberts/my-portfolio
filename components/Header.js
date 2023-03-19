'use client'
import React from 'react'
import Link from 'next/link'
import Button from './Button'

export default function Header() {
    return (
        <div className="flex flex-row justify-between px-2 sm:px-5">
            <div className="py-1">
                <Link
                    href="/"
                    className="py-2 pr-3 underline text-emerald-600 dark:text-emerald-200 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                    Home
                </Link>
            </div>
            <div className="py-1">
                <Link
                    href="/projects"
                    className="py-2 px-3 underline text-emerald-600 dark:text-emerald-200 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                    Projects
                </Link>
                <Link
                    href="/blog"
                    className="py-2 px-3 underline text-emerald-600 dark:text-emerald-200 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                    Blog
                </Link>
                <Button />
            </div>
        </div>
    )
}

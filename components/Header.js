'use client'
import React from 'react'
import Link from 'next/link'
import Button from './Button'

export default function Header() {
    return (
        <div className="flex flex-row justify-between px-5 text-sm">
            <div className="py-1">
                <Link
                    href="/"
                    className="py-2 pr-3 underline text-emerald-500 hover:text-emerald-600"
                >
                    Home
                </Link>
            </div>
            <div className="py-1">
                <Button />
                <Link
                    href="/projects"
                    className="py-2 px-3 underline text-emerald-500 hover:text-emerald-600"
                >
                    Projects
                </Link>
                <Link
                    href="/blog"
                    className="py-2 pl-3 underline text-emerald-500 hover:text-emerald-600"
                >
                    Blog
                </Link>
            </div>
        </div>
    )
}

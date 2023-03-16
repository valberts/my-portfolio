'use client'
import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Button from './Button'

export default function Header() {
    return (
        <div className="flex flex-row justify-between">
            <div>
                <Link
                    href="/"
                    className="py-2 pr-3 underline text-emerald-500 hover:text-emerald-600"
                >
                    Home
                </Link>
                <Link
                    href="/projects"
                    className="py-2 px-3 underline text-emerald-500 hover:text-emerald-600"
                >
                    Projects
                </Link>
                <Link
                    href="/blog"
                    className="py-2 px-3 underline text-emerald-500 hover:text-emerald-600"
                >
                    Blog
                </Link>
            </div>
            <Button />
        </div>
    )
}

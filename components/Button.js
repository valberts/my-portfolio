'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Button = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [hasMounted, setHasMounted] = useState(false)
    const currentTheme = theme === 'system' ? systemTheme : theme

    useEffect(() => setHasMounted(true))

    if (!hasMounted) return null

    return (
        <button
            onClick={() =>
                theme == 'dark' ? setTheme('light') : setTheme('dark')
            }
            className="px-3 py-2 -my-2 -mr-3 underline text-emerald-600 dark:text-emerald-200 hover:text-emerald-700 dark:hover:text-emerald-300"
        >
            {theme == 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}

export default Button

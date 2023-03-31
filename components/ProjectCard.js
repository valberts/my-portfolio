import Link from 'next/link'
import React from 'react'

export default function ProjectCard(props) {
    const { slug, title, description, category, date, tags } = props
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    return (
        <>
            <Link href={`/projects/${slug}`} className="">
                <div className="mb-4 p-4 rounded-lg border border-gray-300 dark:border-none bg-gray-100 dark:bg-[#191B1F] text-center shadow-lg hover:shadow-xl dark:shadow-none hover:scale-[101%] dark:hover:text-emerald-100">
                    <h1 className="text-xl">{title}</h1>{' '}
                    <p className="mb-2 text-sm opacity-70">{tags}</p>
                    <p className="line-clamp-4 sm:line-clamp-3 text-xs leading-relaxed">
                        {description}
                    </p>
                </div>
            </Link>
        </>
    )
}

import Link from 'next/link'
import React from 'react'

export default function PostCard(props) {
    const { title, slug, description, date } = props
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    return (
        <>
            <Link href={`/blog/${slug}`} className="">
                <div className="mb-4 p-4 rounded-lg border border-gray-300 dark:border-none bg-gray-100 dark:bg-[#191B1F] text-center shadow-lg hover:shadow-xl dark:shadow-none hover:scale-[101%] dark:hover:text-emerald-100">
                    <h1 className="text-xl">{title}</h1>{' '}
                    <p className="mb-2 text-sm">
                        {new Date(date).toLocaleDateString('en-US', options)}
                    </p>
                    <p className="line-clamp-3 sm:line-clamp-2 text-xs leading-relaxed">
                        {description}
                    </p>
                </div>
            </Link>
        </>
    )
}

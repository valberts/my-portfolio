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
                <div className="mb-4 p-4 rounded-lg border border-gray-300 dark:border-none bg-gray-100 dark:bg-[#191B1F] text-center shadow-lg hover:shadow-xl dark:shadow-none dark:hover:opacity-80">
                    <h1 className="text-lg">{title}</h1>{' '}
                    <p className="mb-2 text-xs">
                        {new Date(date).toLocaleDateString('en-US', options)}
                    </p>
                    <p className="line-clamp-3 text-xs">{description}</p>
                </div>
            </Link>
        </>
    )
}

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
            <Link href={`/blog/${slug}`}>
                <div className="mb-4 p-4 rounded-lg bg-[#191B1F] text-center">
                    <h1 className="text-lg mb-2">
                        {title} |{' '}
                        {new Date(date).toLocaleDateString('en-US', options)}
                    </h1>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    )
}

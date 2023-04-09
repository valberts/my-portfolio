import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

// The page for each post
export default function Post({ frontmatter, content, adjacentPosts }) {
    const { title, description, category, date, postNum, tags } = frontmatter
    const [nextPost, setNextPost] = useState('')
    const [previousPost, setPreviousPost] = useState('')
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    useEffect(() => {
        if (adjacentPosts.length == 1) {
            if (postNum == 1) {
                setNextPost(adjacentPosts[0])
                setPreviousPost('')
            } else {
                setNextPost('')
                setPreviousPost(adjacentPosts[0])
            }
        } else {
            setNextPost(adjacentPosts[0])
            setPreviousPost(adjacentPosts[1])
        }
    }, [adjacentPosts, postNum])

    return (
        <div>
            <h1 className="text-2xl mt-10 text-center">{title}</h1>
            <p className="text-center">
                {new Date(date).toLocaleDateString('en-US', options)}
            </p>
            <ReactMarkdown className="mt-6 leading-loose markdown">
                {content}
            </ReactMarkdown>
            <div className="justify-center flex gap-1 mt-8">
                <Link
                    href={`/blog/${previousPost}`}
                    className="py-1 px-1.5 rounded-md text-xs border border-gray-300 text-black shadow-md dark:border-none dark:bg-gray-300 dark:shadow-none hover:shadow-lg dark:hover:opacity-70 duration-150 select-none"
                >
                    Previous Post
                </Link>
                <Link
                    href={`/blog/${nextPost}`}
                    className="py-1 px-1.5 rounded-md text-xs border border-gray-300 text-black shadow-md dark:border-none dark:bg-gray-300 dark:shadow-none hover:shadow-lg dark:hover:opacity-70 duration-150 select-none"
                >
                    Next Post
                </Link>
            </div>
        </div>
    )
}

// Generating the paths for each post
export async function getStaticPaths() {
    // Get list of all files from our posts directory
    const files = fs.readdirSync('posts')
    // Generate a path for each one
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }))
    // return list of paths
    return {
        paths,
        fallback: false,
    }
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
    const { data: frontmatter, content } = matter(fileName)
    const { postNum: postNum } = frontmatter
    // const { postNum } = frontmatter

    // get list of files from the posts folder
    const files = fs.readdirSync('posts')

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '')
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')
        const { data: frontmatter } = matter(readFile)

        return {
            slug,
            frontmatter,
        }
    })

    const adjacentPosts = posts.flatMap((post) => {
        const { slug, frontmatter } = post
        const {
            frontmatter: { postNum: pn },
        } = post
        if (parseInt(postNum) - 1 == parseInt(pn)) {
            return slug
        } else if (parseInt(postNum) + 1 == parseInt(pn)) {
            return slug
        } else {
            return []
        }
    })

    return {
        props: {
            frontmatter,
            content,
            adjacentPosts,
        },
    }
}

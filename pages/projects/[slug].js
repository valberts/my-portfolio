import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

// The page for each project
export default function Project({ frontmatter, content, adjacentProjects }) {
    const { title, description, category, date, projectNum, live, repo, tags } =
        frontmatter
    const [nextProject, setNextProject] = useState('')
    const [previousProject, setPreviousProject] = useState('')
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    useEffect(() => {
        if (adjacentProjects.length == 1) {
            if (projectNum == 1) {
                setNextProject(adjacentProjects[0])
                setPreviousProject('')
            } else {
                setNextProject('')
                setPreviousProject(adjacentProjects[0])
            }
        } else if (adjacentProjects.length == 0) {
            return
        } else {
            setNextProject(adjacentProjects[0])
            setPreviousProject(adjacentProjects[1])
        }
    }, [adjacentProjects, projectNum])

    return (
        <div>
            <h1 className="text-2xl mt-10 text-center">{title}</h1>
            <p className="text-center">
                {new Date(date).toLocaleDateString('en-US', options)}
            </p>
            <div className="text-center">
                <a
                    href={`${live}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-2 underline text-emerald-600 dark:text-emerald-200 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                    Live
                </a>
                <a
                    href={`${repo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-2 underline text-emerald-600 dark:text-emerald-200 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                    Repo
                </a>
            </div>
            <ReactMarkdown className="mt-8 leading-loose">
                {content}
            </ReactMarkdown>
            <div className="justify-center flex gap-1 mt-8">
                <Link
                    href={`/projects/${previousProject}`}
                    className="py-1 px-1.5 rounded-md text-xs border border-gray-300 text-black shadow-md dark:border-none dark:bg-gray-300 dark:shadow-none hover:shadow-lg dark:hover:opacity-70 duration-150 select-none"
                >
                    Previous Project
                </Link>

                <Link
                    href={`/projects/${nextProject}`}
                    className="py-1 px-1.5 rounded-md text-xs border border-gray-300 text-black shadow-md dark:border-none dark:bg-gray-300 dark:shadow-none hover:shadow-lg dark:hover:opacity-70 duration-150 select-none"
                >
                    Next Project
                </Link>
            </div>
        </div>
    )
}

// Generating the paths for each project
export async function getStaticPaths() {
    // Get list of all files from our projects directory
    const files = fs.readdirSync('projects')
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
    const fileName = fs.readFileSync(`projects/${slug}.md`, 'utf-8')
    const { data: frontmatter, content } = matter(fileName)
    const { projectNum: projectNum } = frontmatter

    // get list of files from the projects folder
    const files = fs.readdirSync('projects')

    // get frontmatter & slug from each project
    const projects = files.map((fileName) => {
        const slug = fileName.replace('.md', '')
        const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8')
        const { data: frontmatter } = matter(readFile)

        return {
            slug,
            frontmatter,
        }
    })

    const adjacentProjects = projects.flatMap((project) => {
        const { slug, frontmatter } = project
        const {
            frontmatter: { projectNum: pn },
        } = project
        if (parseInt(projectNum) - 1 == parseInt(pn)) {
            return slug
        } else if (parseInt(projectNum) + 1 == parseInt(pn)) {
            return slug
        } else {
            return []
        }
    })

    return {
        props: {
            frontmatter,
            content,
            adjacentProjects,
        },
    }
}

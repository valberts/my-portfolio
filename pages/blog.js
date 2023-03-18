import PostCard from '@/components/PostCard'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog({ posts }) {
    return (
        <div className="">
            <h1 className="text-2xl mt-10 text-center underline">Blog</h1>
            <div className="mt-8">
                {posts.map((post) => {
                    //extract slug and frontmatter
                    const { slug, frontmatter } = post
                    //extract frontmatter properties
                    const { title, description, category, date, tags } =
                        frontmatter

                    //JSX for individual blog listing
                    return (
                        <PostCard
                            key={title}
                            slug={slug}
                            title={title}
                            description={description}
                            category={category}
                            date={date}
                            tags={tags}
                        />
                    )
                })}
            </div>
        </div>
    )
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
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

    posts.sort((postA, postB) => {
        const {
            frontmatter: { date: dateA },
        } = postA
        const {
            frontmatter: { date: dateB },
        } = postB
        return new Date(dateB).getTime() - new Date(dateA).getTime()
    })
    // Return the pages static props
    return {
        props: {
            posts,
        },
    }
}

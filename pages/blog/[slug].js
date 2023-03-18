import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

// The page for each post
export default function Post({ frontmatter, content }) {
    const { title, description, category, date, postNum, tags } = frontmatter
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    return (
        <div>
            <h1 className="text-2xl mt-10 text-center underline">{title}</h1>
            <p className="text-center">
                {new Date(date).toLocaleDateString('en-US', options)}
            </p>
            <ReactMarkdown className="mt-8">{content}</ReactMarkdown>
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
    return {
        props: {
            frontmatter,
            content,
        },
    }
}

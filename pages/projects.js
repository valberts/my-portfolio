import ProjectCard from '@/components/ProjectCard'
import fs from 'fs'
import matter from 'gray-matter'

export default function Projects({ projects }) {
    return (
        <div className="">
            <h1 className="text-3xl mt-10 text-center underline">Projects</h1>
            <div className="mt-8">
                {projects.map((project) => {
                    //extract slug and frontmatter
                    const { slug, frontmatter } = project
                    //extract frontmatter properties
                    const { title, description, category, date, tags } =
                        frontmatter

                    //JSX for individual project listing
                    return (
                        <ProjectCard
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

//Generating the Static Props for the Projects Page
export async function getStaticProps() {
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

    projects.sort((projectA, projectB) => {
        const {
            frontmatter: { date: dateA },
        } = projectA
        const {
            frontmatter: { date: dateB },
        } = projectB
        return new Date(dateB).getTime() - new Date(dateA).getTime()
    })
    // Return the pages static props
    return {
        props: {
            projects,
        },
    }
}

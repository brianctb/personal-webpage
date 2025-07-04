import { BlogPosts } from 'app/components/posts'

const metadata = {
  title: 'My Portfolio',
  intro: `PlaceHolder for my portfolio intro. This section will showcase my projects, skills, and experiences.`,
}

export default function HomePage() {
  return (
    <section>
      <h1 className="section-title">{metadata.title}</h1>
      <p className="mb-4">{metadata.intro}</p>
    </section>
  )
}

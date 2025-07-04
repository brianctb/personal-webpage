import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'My Blog',
}

export default function BlogsPage() {
  return (
    <section>
      <h1 className="section-title">{metadata.title}</h1>
      <BlogPosts />
    </section>
  )
}

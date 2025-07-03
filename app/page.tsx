import { BlogPosts } from 'app/components/posts'

const metadata = {
  title: 'My Portfolio',
  intro: `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`
}

export default function Page() {
  return (
    <section>
      <h1 className="section-title">{metadata.title}</h1>
      <p className="mb-4">{metadata.intro}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { marked } from 'marked'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/posts/$slug')({
  loader: async ({ params }) => {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) {
      throw new Error('Post not found')
    }
    return post
  },
  component: RouteComponent,
})

function RouteComponent() {
  const post = Route.useLoaderData()

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/" className="text-sm font-medium text-blue-600 hover:text-blue-800 mb-8 inline-flex items-center">
        &larr; Back to all stories
      </Link>
      
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {post.categories?.map((cat) => (
            <span key={cat} className="text-sm font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700">
              {cat}
            </span>
          ))}
          <time className="text-sm text-gray-500 ml-auto">
            {new Date(post.date).toLocaleDateString(undefined, { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          {post.summary}
        </p>
        {post.image && (
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-8 aspect-video w-full">
            <img 
              src={post.image.startsWith('/') ? post.image : `/${post.image}`} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </header>

      <div
        className="prose prose-lg prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(post.content || '') }}
      />
    </article>
  )
}

import { Link } from '@tanstack/react-router'
import { type Post } from 'content-collections'
import { Card, CardContent } from '@/components/ui/card'

export default function BlogPosts({
  title,
  posts,
}: {
  title: string
  posts: Post[]
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link to={`/posts/${post.slug}`} key={post._meta.path} className="block group">
            <Card className="h-full transition-all duration-200 hover:shadow-md border border-gray-100 overflow-hidden">
              {post.image && (
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img 
                    src={post.image.startsWith('/') ? post.image : `/${post.image}`} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {post.categories?.map((cat) => (
                    <span key={cat} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      {cat}
                    </span>
                  ))}
                  <span className="text-xs text-gray-500 ml-auto">
                    {new Date(post.date).toLocaleDateString(undefined, { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">
                  {post.summary}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

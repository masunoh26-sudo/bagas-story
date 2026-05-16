import { createFileRoute } from '@tanstack/react-router'
import { allPosts, allAuthors } from 'content-collections'
import BlogPosts from '@/components/blog-posts'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const author = allAuthors[0]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {author && (
        <Card className="mb-12 border-0 bg-gray-50/50 shadow-sm">
          <CardContent className="flex flex-col sm:flex-row gap-6 items-center sm:items-start p-6">
            {author.avatar && (
              <img 
                src={author.avatar} 
                alt={author.name} 
                className="w-24 h-24 rounded-full object-cover shadow-sm"
              />
            )}
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{author.name}</h2>
              <p className="text-gray-700 leading-relaxed">{author.bio}</p>
            </div>
          </CardContent>
        </Card>
      )}
      <BlogPosts title="Short Stories" posts={allPosts} />
    </div>
  )
}

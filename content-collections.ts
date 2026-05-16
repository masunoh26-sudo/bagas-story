import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    categories: z.array(z.string()),
    slug: z.string().optional(),
    image: z.string(),
    date: z.string(),
    content: z.string().optional(),
  }),
  transform: async (doc) => {
    return {
      ...doc,
      slug: doc.title
        .toLowerCase()
        .replace('.md', '')
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, ''),
    }
  },
})

const author = defineCollection({
  name: 'author',
  directory: 'content/author',
  include: '**/*.md',
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    content: z.string().optional(),
  }),
})

export default defineConfig({
  collections: [posts, author],
})

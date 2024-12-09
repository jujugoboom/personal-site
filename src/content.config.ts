import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const postCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/posts' }),
    schema: z.object({
        title: z.string(),
        draft: z.boolean(),
        postDate: z.date(),
        lastUpdated: z.date(),
        tags: z.array(z.string()).optional(),
    }),
})

const referenceCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/refrence' }),
    schema: z.object({
        title: z.string(),
        lastUpdated: z.date(),
        tags: z.array(z.string()).optional(),
    }),
})

export const collections = {
    posts: postCollection,
    refrence: referenceCollection,
}

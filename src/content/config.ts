import { z, defineCollection } from 'astro:content'

const postCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        draft: z.boolean(),
        postDate: z.date(),
        tags: z.array(z.string()).optional(),
    }),
})

const referenceCollection = defineCollection({
    type: 'content',
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

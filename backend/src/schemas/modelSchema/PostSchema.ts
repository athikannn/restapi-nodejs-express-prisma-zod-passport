import { z } from 'zod';

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
})

export type Post = z.infer<typeof PostSchema>

// POST PARTIAL SCHEMA
//------------------------------------------------------

export const PostPartialSchema = PostSchema.partial()

export type PostPartial = z.infer<typeof PostPartialSchema>

// POST OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const PostOptionalDefaultsSchema = PostSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().optional(),
}))

export type PostOptionalDefaults = z.infer<typeof PostOptionalDefaultsSchema>

export default PostSchema;

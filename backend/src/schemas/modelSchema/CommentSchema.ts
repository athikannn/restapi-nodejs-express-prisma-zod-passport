import { z } from 'zod';

/////////////////////////////////////////
// COMMENT SCHEMA
/////////////////////////////////////////

export const CommentSchema = z.object({
  id: z.string().cuid(),
  text: z.string(),
  postId: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Comment = z.infer<typeof CommentSchema>

// COMMENT PARTIAL SCHEMA
//------------------------------------------------------

export const CommentPartialSchema = CommentSchema.partial()

export type CommentPartial = z.infer<typeof CommentPartialSchema>

// COMMENT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const CommentOptionalDefaultsSchema = CommentSchema.merge(z.object({
  id: z.string().cuid().optional(),
  postId: z.string().optional(),
  userId: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type CommentOptionalDefaults = z.infer<typeof CommentOptionalDefaultsSchema>

export default CommentSchema;

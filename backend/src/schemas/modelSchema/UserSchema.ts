import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  username: z.string().min(4).max(10),
  password: z.string(),
})

export type User = z.infer<typeof UserSchema>

// USER PARTIAL SCHEMA
//------------------------------------------------------

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

// USER OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

export default UserSchema;

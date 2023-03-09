import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum(['id','title','createdAt','updatedAt','userId']);

export default PostScalarFieldEnumSchema;

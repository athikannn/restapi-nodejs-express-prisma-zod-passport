import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum(['id','text','postId','userId','createdAt','updatedAt']);

export default CommentScalarFieldEnumSchema;

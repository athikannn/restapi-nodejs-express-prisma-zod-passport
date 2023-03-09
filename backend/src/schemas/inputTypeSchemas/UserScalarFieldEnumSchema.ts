import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','username','password']);

export default UserScalarFieldEnumSchema;

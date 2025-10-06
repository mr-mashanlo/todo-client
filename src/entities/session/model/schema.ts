import { z } from 'zod';

export const SessionZod = z.object( {
  email: z.email( 'Invalid email address' ),
  password: z.string().min( 8, 'Password must be 8 or more characters long' )
} );

export type SessionType = z.infer<typeof SessionZod>;
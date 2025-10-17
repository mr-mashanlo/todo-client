import { z } from 'zod';

export const SessionDTO = z.object( {
  email: z.email( 'Invalid email address' ),
  password: z.string().min( 8, 'Password must be 8 or more characters long' )
} );

export type SessionDTO = z.infer<typeof SessionDTO>;

export const Session = z.object( {
  id: z.string(),
  token: z.string(),
  expired: z.number()
} );

export type Session = z.infer<typeof Session>;
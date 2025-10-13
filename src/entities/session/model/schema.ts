import { z } from 'zod';

export const SessionDTOZod = z.object( {
  email: z.email( 'Invalid email address' ),
  password: z.string().min( 8, 'Password must be 8 or more characters long' )
} );

export type SessionDTOType = z.infer<typeof SessionDTOZod>;

export const SessionZod = z.object( {
  id: z.string(),
  token: z.string()
} );

export type SessionType = z.infer<typeof SessionZod>;
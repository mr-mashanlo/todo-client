import { z } from 'zod';

export const SessionZod = z.object( {
  email: z.email( { message: 'Invalid email address' } ),
  password: z.string().min( 8, { message: 'Must be 8 or more characters long' } )
} );
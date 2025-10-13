import { z } from 'zod';

export const TodoDTOZod = z.object( {
  title: z.string()
} );

export type TodoDTOType = z.infer<typeof TodoDTOZod>;

export const TodoZod = z.object( {
  _id: z.string(),
  title: z.string(),
  created: z.string(),
  updated: z.string(),
  completed: z.boolean()
} );

export type TodoType = z.infer<typeof TodoZod>;
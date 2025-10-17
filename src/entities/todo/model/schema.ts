import { z } from 'zod';

import type { PaginatedResponse } from '@/shared/types';

export const TodoDTO = z.object( {
  title: z.string()
} );

export type TodoDTO = z.infer<typeof TodoDTO>;

export const Todo = z.object( {
  _id: z.string(),
  title: z.string(),
  created: z.string(),
  updated: z.string(),
  completed: z.boolean()
} );

export type Todo = z.infer<typeof Todo>;

export type PaginatedTodo = PaginatedResponse<Todo>
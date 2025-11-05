import { z } from 'zod';

import type { PaginatedResponse } from '@/shared/types';

export const ProgressDTO = z.object( {
  date: z.string(),
  habits: z.array( z.object( { habit: z.string(), completed: z.boolean() } ) )
} );

export const Progress = z.object( {
  _id: z.string(),
  user: z.string(),
  date: z.string(),
  habits: z.array( z.object( { habit: z.string(), completed: z.boolean() } ) )
} );

export type ProgressDTO = z.infer<typeof ProgressDTO>;

export type Progress = z.infer<typeof Progress>;

export type PaginatedProgress = PaginatedResponse<Progress>
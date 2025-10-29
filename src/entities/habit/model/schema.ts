import { z } from 'zod';

import type { PaginatedResponse } from '@/shared/types';

export const HabitDTO = z.object( {
  title: z.string(),
  days: z.array( z.string() )
} );

export type HabitDTO = z.infer<typeof HabitDTO>;

export const Habit = z.object( {
  _id: z.string(),
  title: z.string(),
  days: z.array( z.string() )
} );

export type Habit = z.infer<typeof Habit>;

export type PaginatedHabit = PaginatedResponse<Habit>
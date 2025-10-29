import { useHabit } from '@/entities/habit';

const useDeleteHabit = () => {
  const { remove } = useHabit();

  return { remove };
};

export default useDeleteHabit;
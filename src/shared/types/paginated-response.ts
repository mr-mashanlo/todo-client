export type PaginatedResponse<T> = {
  data: Array<T>,
  limit: number,
  total: number,
  page: number,
};
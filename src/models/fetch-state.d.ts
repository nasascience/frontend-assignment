export interface FetchState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

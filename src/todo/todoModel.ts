export interface Todo {
  id: number;
  title: string;
  description?: string;
  sortOrder?: number;
  is_active?: boolean;
  is_deleted?: boolean;
}

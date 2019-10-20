export interface Todo {
  id: number;
  userId: number;
  title: string;
  description?: string;
  sortOrder?: number;
  is_active?: boolean;
  is_deleted?: boolean;
}

export interface TodoInput {
  userId: number;
  title: string;
  description?: string;
  sortOrder?: number;
}

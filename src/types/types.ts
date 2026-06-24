export type Priority = "low" | "medium" | "high";

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
};

export type NewTaskInput = {
  title: string;
  description?: string;
  priority?: Priority;
};

export type TaskChanges = Partial<Omit<Task, "id">>;

export type SuccessResponse<T> = {
  success: true;
  data?: T;
  message?: string;
};

export type ErrorResponse = {
  success: false;
  message: string;
};

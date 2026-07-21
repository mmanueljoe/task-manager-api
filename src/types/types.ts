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
  description?: string | undefined;
  priority?: Priority | undefined;
};

export type TaskChanges = {
  title?: string | undefined;
  description?: string | undefined;
  completed?: boolean | undefined;
  priority?: Priority | undefined;
};

export type SuccessResponse<T> = {
  success: true;
  data?: T;
  message?: string;
};

export type ErrorResponse = {
  success: false;
  message: string;
};

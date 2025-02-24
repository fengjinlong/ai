export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export interface TaskManagerProps {
  tasks: Task[];
  onTaskAdd: (task: Omit<Task, 'id'>) => void;
  onTaskDelete: (id: string) => void;
  onTaskComplete: (id: string) => void;
  onTaskSearch: (keyword: string) => void;
}

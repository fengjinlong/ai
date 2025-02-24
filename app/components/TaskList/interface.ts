export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
  onSearch: (keyword: string) => void;
  onAdd: () => void;
  onTaskToggle: (taskId: string) => void;
  onTaskDelete: (taskId: string) => void;
}

export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export interface ContinueProvderProps {
  tasks: Task[];
  onSearch: (keyword: string) => void;
  onAdd: () => void;
  onTaskToggle: (taskId: string) => void;
  onTaskDelete: (taskId: string) => void;
}
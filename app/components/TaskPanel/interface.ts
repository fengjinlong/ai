export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskPanelProps {
  tasks: Task[];
  onSearch: (keyword: string) => void;
  onTaskAdd: (title: string) => void;
  onTaskDelete: (id: string) => void;
  onTaskStatusChange: (id: string, completed: boolean) => void;
}

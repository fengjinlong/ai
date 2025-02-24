export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskManagementProps {
  tasks: Task[];
  onSearch: (keyword: string) => void;
  onAdd: (task: Omit<Task, 'id'>) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

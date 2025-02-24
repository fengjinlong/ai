interface Task {
  id: string;
  content: string;
  completed: boolean;
}

interface TaskBoardProps {
  // 初始任务列表数据
  initialTasks: Task[];
  // 搜索回调
  onSearch: (keyword: string) => void;
  // 新增任务回调
  onTaskAdd: (content: string) => void;
  // 删除任务回调
  onTaskDelete: (taskId: string) => void;
  // 更新任务状态回调
  onTaskStatusChange: (taskId: string, completed: boolean) => void;
}

export type { TaskBoardProps, Task };

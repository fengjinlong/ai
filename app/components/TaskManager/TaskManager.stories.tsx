import type { Meta, StoryObj } from '@storybook/react';
import TaskManager from './TaskManager';
import { useState } from 'react';
import { Task } from './interface';

const meta: Meta<typeof TaskManager> = {
  title: 'Components/TaskManager',
  component: TaskManager,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TaskManager>;

const TaskManagerWithState = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', content: '任务一任务一任务一任务一任务一', completed: true },
    { id: '2', content: '任务二任务二任务二任务二任务二任务二任务二', completed: true },
    { id: '3', content: '任务三任务三任务三任务三任务三任务三任务三任务三', completed: false },
    { id: '4', content: '任务四任务四任务四任务四任务四任务四任务四任务四', completed: false }
  ]);

  const handleTaskAdd = (newTask: Omit<Task, 'id'>) => {
    setTasks([...tasks, { ...newTask, id: Date.now().toString() }]);
  };

  const handleTaskDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleTaskComplete = (id: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const handleTaskSearch = (keyword: string) => {
    console.log('Searching for:', keyword);
  };

  return (
    <TaskManager
      tasks={tasks}
      onTaskAdd={handleTaskAdd}
      onTaskDelete={handleTaskDelete}
      onTaskComplete={handleTaskComplete}
      onTaskSearch={handleTaskSearch}
    />
  );
};

export const Default: Story = {
  render: () => <TaskManagerWithState />
};

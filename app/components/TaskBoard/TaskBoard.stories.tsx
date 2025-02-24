import type { Meta, StoryObj } from '@storybook/react';
import { TaskBoard } from './index';

const meta: Meta<typeof TaskBoard> = {
  title: 'Components/TaskBoard',
  component: TaskBoard,
  parameters: {
    // layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof TaskBoard>;

const mockTasks = [
  { id: '1', content: '任务一任务一任务一任务一任务一', completed: true },
  { id: '2', content: '任务二任务二任务二任务二任务二任务二任务二', completed: true },
  { id: '3', content: '任务三任务三任务三任务三任务三任务三任务三任务三', completed: false },
  { id: '4', content: '任务四任务四任务四任务四任务四任务四任务四任务四任务四', completed: false }
];

export const Default: Story = {
  args: {
    initialTasks: mockTasks,
    onSearch: (keyword) => console.log('搜索:', keyword),
    onTaskAdd: (content) => console.log('新增任务:', content),
    onTaskDelete: (taskId) => console.log('删除任务:', taskId),
    onTaskStatusChange: (taskId, completed) => console.log('更新任务状态:', taskId, completed)
  }
};

export const Empty: Story = {
  args: {
    initialTasks: [],
    onSearch: (keyword) => console.log('搜索:', keyword),
    onTaskAdd: (content) => console.log('新增任务:', content),
    onTaskDelete: (taskId) => console.log('删除任务:', taskId),
    onTaskStatusChange: (taskId, completed) => console.log('更新任务状态:', taskId, completed)
  }
};

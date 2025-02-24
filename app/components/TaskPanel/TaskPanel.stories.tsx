import type { Meta, StoryObj } from '@storybook/react';
import TaskPanel from './TaskPanel';

const meta = {
  title: 'Components/TaskPanel',
  component: TaskPanel,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TaskPanel>;

export default meta;
type Story = StoryObj<typeof TaskPanel>;

const mockTasks = [
  { id: '1', title: '完成项目文档', completed: false },
  { id: '2', title: '代码审查', completed: true },
  { id: '3', title: '修复bug', completed: false }
];

export const Default: Story = {
  args: {
    tasks: mockTasks,
    onSearch: (keyword) => console.log('搜索:', keyword),
    onTaskAdd: (title) => console.log('新增任务:', title),
    onTaskDelete: (id) => console.log('删除任务:', id),
    onTaskStatusChange: (id, completed) => console.log('状态更新:', id, completed)
  }
};

export const Empty: Story = {
  args: {
    tasks: [],
    onSearch: (keyword) => console.log('搜索:', keyword),
    onTaskAdd: (title) => console.log('新增任务:', title),
    onTaskDelete: (id) => console.log('删除任务:', id),
    onTaskStatusChange: (id, completed) => console.log('状态更新:', id, completed)
  }
};

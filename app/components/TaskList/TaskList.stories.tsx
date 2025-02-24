import type { Meta, StoryObj } from '@storybook/react';
import TaskList from './TaskList';

const meta = {
  title: 'Components/TaskList',
  component: TaskList,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof TaskList>;

const mockTasks = [
  { id: '1', title: '完成项目文档', completed: true },
  { id: '2', title: '代码审查', completed: false },
  { id: '3', title: '修复bug', completed: false },
  { id: '4', title: '部署应用', completed: true }
];

export const Default: Story = {
  args: {
    tasks: mockTasks,
    onSearch: (keyword) => console.log('搜索:', keyword),
    onAdd: () => console.log('新建任务'),
    onTaskToggle: (id) => console.log('切换任务状态:', id),
    onTaskDelete: (id) => console.log('删除任务:', id)
  }
};

export const Empty: Story = {
  args: {
    tasks: [],
    onSearch: (keyword) => console.log('搜索:', keyword),
    onAdd: () => console.log('新建任务'),
    onTaskToggle: (id) => console.log('切换任务状态:', id),
    onTaskDelete: (id) => console.log('删除任务:', id)
  }
};

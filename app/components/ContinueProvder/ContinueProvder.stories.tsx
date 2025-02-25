import type { Meta, StoryObj } from '@storybook/react';
import ContinueProvder from './ContinueProvder';

const meta = {
  title: 'Components/ContinueProvder',
  component: ContinueProvder,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ContinueProvder>;

export default meta;
type Story = StoryObj<typeof ContinueProvder>;

const mockTasks = [
  { id: '1', content: '任务一任务一任务一任务一任务一', completed: true },
  { id: '2', content: '任务二任务二任务二任务二任务二任务二', completed: true },
  { id: '3', content: '任务三任务三任务三任务三任务三任务三任务三任务三', completed: false },
  { id: '4', content: '任务四任务四任务四任务四任务四任务四任务四任务四任务四', completed: false }
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
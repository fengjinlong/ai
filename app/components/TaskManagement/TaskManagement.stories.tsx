import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TaskManagement from './TaskManagement';

const meta: Meta<typeof TaskManagement> = {
  title: 'Components/TaskManagement',
  component: TaskManagement,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TaskManagement>;

const mockTasks = [
  { id: '1', title: '任务一', completed: true },
  { id: '2', title: '任务二', completed: true },
  { id: '3', title: '任务三', completed: false },
  { id: '4', title: '任务四', completed: false }
];

export const Default: Story = {
  args: {
    tasks: mockTasks,
    onSearch: (keyword) => console.log('Search:', keyword),
    onAdd: (task) => console.log('Add task:', task),
    onDelete: (id) => console.log('Delete task:', id),
    onToggleComplete: (id) => console.log('Toggle complete:', id)
  }
};

export const Empty: Story = {
  args: {
    tasks: [],
    onSearch: (keyword) => console.log('Search:', keyword),
    onAdd: (task) => console.log('Add task:', task),
    onDelete: (id) => console.log('Delete task:', id),
    onToggleComplete: (id) => console.log('Toggle complete:', id)
  }
};

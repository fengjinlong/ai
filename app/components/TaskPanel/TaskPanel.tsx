import React, { useState } from 'react';
import { Input, Button, List, Checkbox, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { TaskPanelProps } from './interface';

const { Search } = Input;

const TaskPanel: React.FC<TaskPanelProps> = ({
  tasks,
  onSearch,
  onTaskAdd,
  onTaskDelete,
  onTaskStatusChange
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAdd = () => {
    if (newTaskTitle.trim()) {
      onTaskAdd(newTaskTitle.trim());
      setNewTaskTitle('');
      setIsAdding(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setNewTaskTitle('');
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">任务面板</h2>

      <div className="flex gap-2 mb-4">
        <Search
          placeholder="搜索任务"
          onSearch={onSearch}
          onChange={(e) => onSearch(e.target.value)}
          className="flex-1"
          allowClear
          prefix={<SearchOutlined />}
        />
        <Button type="primary" onClick={() => setIsAdding(true)}>
          新增任务
        </Button>
      </div>

      {isAdding && (
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="请输入任务内容"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            className="flex-1"
          />
          <Button type="primary" onClick={handleAdd}>
            确认
          </Button>
          <Button onClick={handleCancel}>取消</Button>
        </div>
      )}

      <List
        dataSource={tasks}
        locale={{
          emptyText: <Empty description="暂无任务" />
        }}
        renderItem={(task) => (
          <List.Item
            className="group flex items-center justify-between p-3 hover:bg-gray-50 rounded"
            key={task.id}
          >
            <div className="flex items-center gap-2 flex-1">
              <Checkbox
                checked={task.completed}
                onChange={(e) => onTaskStatusChange(task.id, e.target.checked)}
              />
              <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {task.title}
              </span>
            </div>
            <Button
              type="link"
              danger
              onClick={() => onTaskDelete(task.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              删除
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TaskPanel;

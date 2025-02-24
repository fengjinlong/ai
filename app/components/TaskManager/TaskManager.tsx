import React, { useState } from 'react';
import { Input, Button, Checkbox } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { TaskManagerProps } from './interface';

const TaskManager: React.FC<TaskManagerProps> = ({
  tasks,
  onTaskAdd,
  onTaskDelete,
  onTaskComplete,
  onTaskSearch
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState('');

  const handleAdd = () => {
    if (newTaskContent.trim()) {
      onTaskAdd({
        content: newTaskContent,
        completed: false
      });
      setNewTaskContent('');
      setIsAdding(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 border rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">任务管理面板</h1>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="请输入任务进行搜索"
          prefix={<SearchOutlined />}
          onChange={(e) => onTaskSearch(e.target.value)}
          className="flex-1"
        />
        <Button type="primary" onClick={() => setIsAdding(true)} className="bg-blue-500">
          新增任务
        </Button>
      </div>

      {isAdding && (
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="请输入新增的任务信息"
            value={newTaskContent}
            onChange={(e) => setNewTaskContent(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleAdd}>确认</Button>
          <Button onClick={() => setIsAdding(false)}>取消</Button>
        </div>
      )}

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-3 border rounded hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <Checkbox checked={task.completed} onChange={() => onTaskComplete(task.id)} />
              <span className={task.completed ? 'line-through text-gray-400' : ''}>
                {task.content}
              </span>
            </div>
            <Button type="link" danger onClick={() => onTaskDelete(task.id)}>
              删除
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;

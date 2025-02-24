import React, { useState } from 'react';
import { Input, Button, Modal } from 'antd';
import { SearchOutlined, CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';
import type { TaskManagementProps, Task } from './interface';

const TaskManagement: React.FC<TaskManagementProps> = ({
  tasks,
  onSearch,
  onAdd,
  onDelete,
  onToggleComplete
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      onAdd({
        title: newTaskTitle,
        completed: false
      });
      setNewTaskTitle('');
      setIsModalVisible(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h1 className="text-lg font-bold mb-4">任务管理面板</h1>

      <div className="flex gap-4 mb-4">
        <Input
          placeholder="请输入任务进行搜索"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          className="flex-1"
        />
        <Button type="primary" onClick={() => setIsModalVisible(true)}>
          新增任务
        </Button>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-3 border rounded hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              {task.completed ? (
                <CheckCircleFilled
                  className="text-green-500 text-xl cursor-pointer"
                  onClick={() => onToggleComplete(task.id)}
                />
              ) : (
                <CheckCircleOutlined
                  className="text-gray-400 text-xl cursor-pointer"
                  onClick={() => onToggleComplete(task.id)}
                />
              )}
              <span className={task.completed ? 'line-through text-gray-400' : ''}>
                {task.title}
              </span>
            </div>
            <Button type="link" danger onClick={() => onDelete(task.id)}>
              删除
            </Button>
          </div>
        ))}
      </div>

      <Modal
        title="新增任务"
        open={isModalVisible}
        onOk={handleAddTask}
        onCancel={() => setIsModalVisible(false)}
      >
        <Input
          placeholder="请输入新增的任务信息"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default TaskManagement;

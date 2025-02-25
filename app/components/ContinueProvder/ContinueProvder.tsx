import React from 'react';
import { Input, Button, List, Checkbox } from 'antd';
import { SearchOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { ContinueProvderProps } from './interface';

const { Search } = Input;

const ContinueProvder: React.FC<ContinueProvderProps> = ({
  tasks,
  onSearch,
  onAdd,
  onTaskToggle,
  onTaskDelete
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="text-lg font-bold mb-4">任务管理面板</div>

      <div className="flex gap-2 mb-4">
        <Search
          placeholder="请输入任务进行搜索"
          allowClear
          enterButton={<SearchOutlined />}
          onSearch={onSearch}
          className="flex-1"
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
          新增任务
        </Button>
      </div>

      <List
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item className="flex items-center py-3 px-4 hover:bg-gray-50">
            <Checkbox
              checked={task.completed}
              onChange={() => onTaskToggle(task.id)}
              className="mr-3"
            />
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
              {task.content}
            </span>
            <Button
              type="link"
              danger
              icon={<DeleteOutlined />}
              onClick={() => onTaskDelete(task.id)}
            >
              删除
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ContinueProvder;
import React from 'react';
import { Steps, Form, Select, Input, Button } from 'antd';
import type { TransferFormProps } from './interface';

const { Step } = Steps;

const TransferForm: React.FC<TransferFormProps> = ({
  current = 0,
  paymentAccounts,
  receiverAccountTypes,
  initialValues,
  onSubmit
}) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit?.(values);
    });
  };

  return (
    <div className="p-6">
      <Steps current={current} className="mb-8">
        <Step title="填写转账信息" />
        <Step title="确认转账信息" />
        <Step title="完成" />
      </Steps>

      <Form form={form} layout="vertical" initialValues={initialValues} className="max-w-lg">
        <Form.Item
          label="付款账户"
          name="paymentAccount"
          required
          rules={[{ required: true, message: '请选择付款账户' }]}
        >
          <Select options={paymentAccounts.map((acc) => ({ label: acc, value: acc }))} />
        </Form.Item>

        <div className="mb-6">
          <div className="text-gray-600 mb-2">收款账户</div>
          <div className="flex gap-4">
            <Form.Item
              name="receiverAccountType"
              className="w-32"
              rules={[{ required: true, message: '请选择账户类型' }]}
            >
              <Select
                options={receiverAccountTypes.map((type) => ({ label: type, value: type }))}
              />
            </Form.Item>
            <Form.Item
              name="receiverAccount"
              className="flex-1"
              rules={[{ required: true, message: '请输入收款账户' }]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          label="收款人姓名"
          name="receiverName"
          required
          rules={[{ required: true, message: '请输入收款人姓名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="转账金额"
          name="amount"
          required
          rules={[{ required: true, message: '请输入转账金额' }]}
        >
          <Input prefix="¥" type="number" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            下一步
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TransferForm;

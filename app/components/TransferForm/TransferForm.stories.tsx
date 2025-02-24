import type { Meta, StoryObj } from '@storybook/react';
import { TransferForm } from './index';

const meta: Meta<typeof TransferForm> = {
  title: 'Components/TransferForm',
  component: TransferForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof TransferForm>;

export const Default: Story = {
  args: {
    current: 0,
    paymentAccounts: ['ant-design@alipay.com', 'test@example.com'],
    receiverAccountTypes: ['支付宝', '微信', '银行卡'],
    initialValues: {
      paymentAccount: 'ant-design@alipay.com',
      receiverAccountType: '支付宝',
      receiverAccount: 'test@example.com',
      receiverName: 'Alex',
      amount: 500
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    }
  }
};

export const Empty: Story = {
  args: {
    current: 0,
    paymentAccounts: ['ant-design@alipay.com', 'test@example.com'],
    receiverAccountTypes: ['支付宝', '微信', '银行卡'],
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    }
  }
};

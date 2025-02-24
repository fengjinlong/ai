export interface TransferFormProps {
  /** 当前步骤 */
  current?: number;
  /** 付款账户列表 */
  paymentAccounts: string[];
  /** 收款账户类型列表 */
  receiverAccountTypes: string[];
  /** 初始表单数据 */
  initialValues?: {
    paymentAccount?: string;
    receiverAccountType?: string;
    receiverAccount?: string;
    receiverName?: string;
    amount?: number;
  };
  /** 表单提交回调 */
  onSubmit?: (values: {
    paymentAccount: string;
    receiverAccountType: string;
    receiverAccount: string;
    receiverName: string;
    amount: number;
  }) => void;
}

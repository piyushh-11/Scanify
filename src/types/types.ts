// Common types used across components

export interface ReceiptData {
    company: string;
    date: string;
    time: string;
    token: string;
    tokenType: string;
    credit: string;
    customerName: string;
    customerAccount: string;
    meterNumber: string;
    amount: string;
    tax: string;
    debt: string;
    total: string;
    operator: string;
    operatorCompany: string;
  }
  
  export enum View {
    UPLOAD = 'upload',
    PREVIEW = 'preview',
    RESULT = 'result'
  }
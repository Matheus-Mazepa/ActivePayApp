import axios from 'axios';
import { API_URL, API_KEY } from '@env';
import { PaymentStatus, ActivationResponse } from '../types';

export const checkPaymentStatus = async (): Promise<PaymentStatus> => {
  const response = await axios.get<PaymentStatus>(`${API_URL}/payment-status`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return response.data;
};

export const activateDevice = async (): Promise<ActivationResponse> => {
  const response = await axios.post<ActivationResponse>(
    `${API_URL}/activate`,
    {},
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
    }
  );
  return response.data;
};
import axios from 'axios';

const API_URL = 'http://localhost:3000/transactions';

export const getTransactions = async () => {
  return axios.get(API_URL).then(res => res.data);
};

export const updateTransactionStatus = async (id: string, status: string) => {
  return axios.patch(`${API_URL}/${id}/status`, { status });
};

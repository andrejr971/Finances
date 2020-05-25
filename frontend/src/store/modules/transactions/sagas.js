import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { transactionSuccess, transactionFailure } from './actions';

export function* transaction({ payload }) {
  try {
    const { data } = payload;

    let { value } = data;

    const { title, type, category } = data;

    value = Number(value);
    // category = Number(category);
    yield call(api.post, 'transactions', { title, value, type, category });
    put(transactionSuccess());
    toast.success('Transação realizada com sucesso');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na transação, tente novamemte');
    put(transactionFailure());
  }
}

export default all([
  takeLatest('@transaction/TRANSACTION_REQUEST', transaction),
]);

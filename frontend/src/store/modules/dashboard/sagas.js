import { takeLatest, call, put, all } from 'redux-saga/effects';
import pt from 'date-fns/locale/pt';
import { format } from 'date-fns-tz';

import { formatPrice } from '../../../utils/formatPrice';
import api from '../../../services/api';
import { dashboardSuccess } from './actions';

export function* dashboardRequest({ payload }) {
  const { page } = payload;

  const { data } = yield call(api.get, 'transactions', { params: { page } });

  const { transaction, pagination } = data;

  const transactions = {
    transaction: transaction.map((t) => ({
      ...t,
      valueFormatted:
        t.type === 'outcome'
          ? `- ${formatPrice(t.value)}`
          : formatPrice(t.value),
      dateFormatted: format(new Date(t.createdAt), "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    })),
    pagination,
  };

  const balance = {
    total: formatPrice(data.balance.total),
    income: formatPrice(data.balance.income),
    outcome: formatPrice(data.balance.outcome),
  };

  const response = {
    transactions,
    balance,
  };

  yield put(dashboardSuccess(response));
}

export default all([
  takeLatest('@dashboard/DASHBOARD_REQUEST', dashboardRequest),
]);

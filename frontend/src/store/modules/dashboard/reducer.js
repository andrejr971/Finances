import produce from 'immer';

const INITIAL_STATE = {
  balance: {},
  transactions: [],
  loading: false,
};

export default function dashboard(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@dashboard/DASHBOARD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@dashboard/DASHBOARD_SUCCESS': {
        const { balance, transactions } = action.payload.response;
        draft.balance = balance;
        draft.transactions = transactions;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

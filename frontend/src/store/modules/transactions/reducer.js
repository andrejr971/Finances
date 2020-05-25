import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function transactions(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@transaction/TRANSACTION_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@transaction/TRANSACTION_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@transaction/TRANSACTION_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

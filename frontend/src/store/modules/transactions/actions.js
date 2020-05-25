export function transactionRequest(data) {
  return {
    type: '@transaction/TRANSACTION_REQUEST',
    payload: { data },
  };
}

export function transactionSuccess() {
  return {
    type: '@transaction/TRANSACTION_SUCCESS',
  };
}

export function transactionFailure() {
  return {
    type: '@transaction/TRANSACTION_FAILURE',
  };
}

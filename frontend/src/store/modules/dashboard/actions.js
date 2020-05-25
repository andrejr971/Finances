export function dashboardRequest(page) {
  return {
    type: '@dashboard/DASHBOARD_REQUEST',
    payload: { page },
  };
}

export function dashboardSuccess(response) {
  return {
    type: '@dashboard/DASHBOARD_SUCCESS',
    payload: { response },
  };
}

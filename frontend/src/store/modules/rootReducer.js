import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import transactions from './transactions/reducer';
import category from './category/reducer';
import dashboard from './dashboard/reducer';

export default combineReducers({
  auth,
  user,
  transactions,
  category,
  dashboard,
});

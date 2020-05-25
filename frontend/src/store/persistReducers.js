import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'finances',
      storage,
      whitelist: ['auth', 'user', 'category', 'dashboard'],
    },
    reducers
  );

  return persistedReducer;
};

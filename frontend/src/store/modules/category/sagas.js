import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  categoryRequest,
  categorySuccess,
  categoryNewSuccess,
} from './actions';

export function* category() {
  const { data } = yield call(api.get, 'category');

  yield put(categorySuccess(data));
}

export function* categoryNew({ payload }) {
  try {
    const { title } = payload;
    const { data } = yield call(api.post, 'category', { title });

    yield put(categoryNewSuccess(data));
    toast.success('Categoria criada com sucesso');
  } catch (err) {
    if (err.code === undefined) {
      toast.warn('Categoria já existe');
      return;
    }
    toast.error('Falha ao criar nova categoria');
  }
}

export function* categoryDelete({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `category/${id}`);
    toast.success('Categoria deletada com sucesso');
    yield put(categoryRequest());
  } catch (err) {
    toast.error('Falha ao deletar categoria');
  }
}

export default all([
  takeLatest('@category/CATEGORY_REQUEST', category),
  takeLatest('@category/CATEGORY_NEW_REQUEST', categoryNew),
  takeLatest('@category/CATEGORY_DELETE_REQUEST', categoryDelete),
]);

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdCheck } from 'react-icons/md';

import DivCard from './components/DivCard';

import {
  categoryRequest,
  categoryNewRequest,
  categoryDeleteRequest,
} from '../../store/modules/category/actions';

import { Container, Content } from './styles';

export default function Category() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  function handleDelete(id) {
    dispatch(categoryDeleteRequest(id));
  }

  useEffect(() => {
    function loadCategories() {
      dispatch(categoryRequest());
    }

    loadCategories();
  }, [dispatch]);

  function handleSubmit({ title }, { resetForm }) {
    dispatch(categoryNewRequest(title));
    resetForm();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholder="Nova categoria"
          autoComplete="off"
          required
        />
        <button type="submit">
          <MdCheck />
        </button>
      </Form>
      <Content>
        {categories.map((category) => (
          <DivCard
            key={category.id}
            category={category}
            onClick={handleDelete}
          />
        ))}
      </Content>
    </Container>
  );
}

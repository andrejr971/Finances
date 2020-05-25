import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Choice, Input } from '@rocketseat/unform';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import InputMask from './components/InputMask';

import { transactionRequest } from '../../store/modules/transactions/actions';
import { categoryRequest } from '../../store/modules/category/actions';
import Select from '../../components/Form/Select';

import imgBack from '../../assets/tranfer.png';

import { Container, FormGroup, FormGroupRadio, Content } from './styles';

export default function Transaction() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    function loadCategories() {
      dispatch(categoryRequest());
    }

    loadCategories();
  }, [dispatch]);

  function handleSubmit(data) {
    dispatch(transactionRequest(data));
  }

  return (
    <Container>
      <h1>Nova transação</h1>
      <Content>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              name="title"
              autoComplete="off"
              placeholder="Título"
              required
            />
          </FormGroup>
          <FormGroup>
            <InputMask
              name="value"
              autoComplete="off"
              placeholder="Preço"
              required
            />
          </FormGroup>

          <FormGroupRadio>
            <Choice
              name="type"
              options={[
                {
                  value: 'income',
                  label: (
                    <>
                      <span>Entrada</span>
                      <IoIosArrowDropup size={25} color="#12A454" />
                    </>
                  ),
                },
                {
                  value: 'outcome',
                  label: (
                    <>
                      <span>Saída</span>
                      <IoIosArrowDropdown size={25} color="#E83F5B" />
                    </>
                  ),
                },
              ]}
            />
          </FormGroupRadio>
          <FormGroup>
            <Select
              name="category"
              options={categories}
              getOptionLabel={(category) => category.title}
              getOptionValue={(category) => category.id}
              placeholder="Escolha uma categoria"
            />
          </FormGroup>

          <button type="submit">Salvar</button>
        </Form>
        <img src={imgBack} alt="Img Tranferência" />
      </Content>
    </Container>
  );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdArrowForward } from 'react-icons/md';

import { signRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo_finances.svg';

export default function SignIn() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  function handleSubmit({ email, password }) {
    dispatch(signRequest(email, password));
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('E-mail obrigatório'),
    password: Yup.string().required('Senha obrigatória'),
  });

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="Logo Finance" />
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          autoComplete="off"
        />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
      <Link to="/register">
        <MdArrowForward />
        Não tenho cadastro
      </Link>
    </>
  );
}

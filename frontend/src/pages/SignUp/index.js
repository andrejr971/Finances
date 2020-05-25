import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdArrowBack } from 'react-icons/md';

import logo from '../../assets/logo_finances.svg';

import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('E-mail obrigatório'),
    password: Yup.string()
      .min(6, 'No minimo 6 caracteres')
      .required('Senha obrigatória'),
  });

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="Logo Finance" />
        <Input name="name" placeholder="Nome" autoComplete="none" />
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          autoComplete="off"
        />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/">
        <MdArrowBack />
        Voltar ao login
      </Link>
    </>
  );
}

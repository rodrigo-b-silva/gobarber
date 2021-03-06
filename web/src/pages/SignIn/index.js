import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
})

function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data)
  }

  return (
    <>
      <img src={logo} alt="Logo Go Barber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input type="password" name="password" placeholder="Sua senha secreta" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>

      </Form>
    </>
  );
}

export default SignIn;
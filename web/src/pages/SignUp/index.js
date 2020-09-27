import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória'),
})

function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Logo Go Barber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input type="password" name="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>

      </Form>
    </>
  );
}

export default SignUp;
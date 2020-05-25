import React from 'react';
import { Input, Form } from '@rocketseat/unform';
import { MdCheck, MdClose } from 'react-icons/md';

import { ContainerForm } from './styles';

function FormCard({ visible, category }) {
  function handleVisible() {
    // setVisible(!visible);
  }

  return (
    <ContainerForm initialData={category}>
      {/* <Form initialData={category}> */}
      <Input name="title" autoComplete="off" />
      <div>
        <button type="button" onClick={handleVisible}>
          <MdClose />
        </button>
        <button type="submit">
          <MdCheck />
        </button>
      </div>
      {/* </Form> */}
    </ContainerForm>
  );
}

export default FormCard;

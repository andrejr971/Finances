import React from 'react';
import PropTypes from 'prop-types';
// import { Input, Form } from '@rocketseat/unform';
import {
  // MdEdit,
  MdDelete,
  // MdCheck,
  // MdClose
} from 'react-icons/md';

import { Container, Content, Title, DivButton } from './styles';

function DivCard({ category, onClick }) {
  // const [visible, setVisible] = useState(false);

  function handleDelete(id) {
    onClick(id);
  }

  // function handleVisible() {
  //   setVisible(!visible);
  // }

  return (
    <Container>
      <Content>
        <Title>{category.title}</Title>
        {/* <FormCard visible={visible} category={category} /> */}
        {/* <Form initialData={category}>
            <Input name="title" autoComplete="off" />
            <div>
              <button type="button" onClick={handleVisible}>
                <MdClose />
              </button>
              <button type="submit">
                <MdCheck />
              </button>
            </div>
          </Form>
        </FormCard> */}
        <DivButton>
          {/* <button type="button" onClick={handleVisible}>
            <MdEdit />
          </button> */}
          <button type="button" onClick={() => handleDelete(category.id)}>
            <MdDelete />
          </button>
        </DivButton>
      </Content>
      <span>{category.dateFormatted}</span>
    </Container>
  );
}

DivCard.propTypes = {
  category: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DivCard;

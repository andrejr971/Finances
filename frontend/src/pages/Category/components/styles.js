import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  width: 100%;
  border-radius: 4px;
  background: #fff;
  padding: 15px;

  color: #000;
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    align-items: center;

    svg {
      font-size: 25px;
      margin-right: 5px;
    }
  }

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 21px;
  margin-bottom: 0;

  font-size: 14px;
  color: #969cb3;
`;

export const DivButton = styled.div`
  button {
    border: 0;
    background: none;
    padding: 0 5px;

    svg {
      font-size: 30px;
      color: #969cb3;
    }
  }
`;

export const ContainerForm = styled(Form)`
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);

  /* display: ${(props) => (props.visible ? 'block' : 'none')}; */


  form {
    display: flex;

    input {
      height: 44px;
      padding: 5px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.3);
      color: #040404;
      border-radius: 0px;

      &:focus {
        border-bottom: 2px solid rgba(0, 0, 0, 0.7);
      }
    }

    div {
      button {
        background: #000;
        svg {
          color: rgba(0, 0, 0, 0.3);
        }

        &:hover {
          background: none;

          svg {
            color: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
  }
`;

export const Title = styled.h3`
  color: #363f5f;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;

  display: ${(props) => (props.visible ? 'none' : 'block')};
`;

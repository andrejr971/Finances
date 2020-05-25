import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: 78px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    padding: 20px;

    input {
      width: 100%;
      height: 44px;
      margin-bottom: 10px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #fff;
      border-radius: 4px;

      &:focus {
        border: 1px solid rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin-left: 10px;
      border: 0;
      border-radius: 4px;
      background: #7159c1;
      width: 44px;
      height: 44px;
      color: #fff;

      svg {
        font-size: 22px;
      }

      transition: background 0.2s ease;

      &:hover {
        background: ${darken(0.08, '#7159c1')};
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  margin-top: 20px;
  color: #fff;
  padding: 10px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  h1 {
    grid-column: 1/5;
    text-align: center;
    padding: 10px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);

    h1 {
      grid-column: 1/4;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);

    h1 {
      grid-column: 1/3;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 0;
    padding-bottom: 80px;
  }
`;

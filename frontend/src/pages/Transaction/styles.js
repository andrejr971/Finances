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

  h1 {
    color: #fff;
    text-align: center;
    padding: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 800px;

  form {
    width: 100%;
    max-width: 450px;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    /* background: #040404; */
    border-radius: 4px;
    padding: 10px;

    button {
      grid-area: 3/2;
      width: 100%;
      margin: 0 auto;
      height: 44px;
      margin-bottom: 10px;
      background: #7159c1;
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #fff;
      border-radius: 4px;
      transition: background 0.2s ease;

      &:hover {
        background: ${darken(0.08, '#7159c1')};
      }
    }
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;

    button {
      width: 100%;
    }
  }
  img {
    display: block;
    width: 250px;
    height: 250px;

    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  select {
    -webkit-appearance: button;
    -moz-appearance: none;
  }

  input,
  select {
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

  select option {
    background: rgba(255, 255, 255, 0.1);
    color: #040404;
  }

  .css-2b097c-container {
    margin-bottom: 10px;
    height: 44px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .css-yk16xz-control {
    font-size: 17px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    color: #040404;
  }

  .react-select__single-value {
    color: #040404;
  }

  .css-yk16xz-control,
  .css-g1d714-ValueContainer {
    width: 100%;
    height: 44px;
    color: rgba(0, 0, 0, 0.3);
  }

  .css-1uccc91-singleValue,
  .css-lpahsxg-control .css-1wa3eu0-placeholder {
    /* font-weight: bold; */
    /* top: 65%; */
    padding: 0;
  }
`;

export const FormGroupRadio = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;

  label {
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    height: 44px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    width: 100%;
    color: #fff;
    cursor: pointer;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.7);
    }
  }

  input {
    display: none;

    &#type-income:checked ~ label[for='type-income'] {
      /* border: 1px solid rgba(255, 255, 255, 0.7); */
      background: #fff;
      color: #12a454;
    }

    &#type-outcome:checked ~ label[for='type-outcome'] {
      /* border: 1px solid rgba(255, 255, 255, 0.7); */
      background: #fff;
      color: #e83f5b;
    }
  }
`;

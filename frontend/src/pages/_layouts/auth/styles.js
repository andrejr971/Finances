import styled from 'styled-components';
import { darken } from 'polished';

import wallpaper from '../../../assets/wallpaper.png';

export const Wrapper = styled.div`
  height: 100%;
  background: #121212 url(${wallpaper}) no-repeat;

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 450px;
  background: #040404;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;

    img {
      /* width: 100px;
      height: 84px; */
      display: block;
      margin: 0 auto 20px;
    }

    input {
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
      height: 44px;
      margin-bottom: 10px;
      padding: 10px;
      background: #7159c1;
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #fff;
      border-radius: 4px;
      transition: background 0.2s ease;

      &:hover {
        background: ${darken(0.08, '#7159c1')};
      }
    }

    span {
      color: #fff;
      padding-bottom: 10px;
      font-weight: bold;
    }
  }

  a {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 10px 20px;
    font-size: 15px;

    svg {
      font-size: 20px;
      margin-right: 10px;
    }

    &:hover {
      color: ${darken(0.01, '#7159c1')};
    }
  }

  @media (max-width: 800px) {
    height: 400px;
    border-radius: 8px;
  }

  @media (max-width: 500px) {
    max-width: 300px;
    padding: 10px;
  }
`;

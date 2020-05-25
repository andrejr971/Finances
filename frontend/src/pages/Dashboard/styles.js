import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 78px;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(to top, #121212 50%, #040404) no-repeat;
  background-size: 100% 600px;

  @media (max-width: 500px) {
    background-size: 100% 1000px;
  }
`;

export const ContentCard = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  border-radius: 4px;
  height: 136px;
  background: #fff;
  padding: 15px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h2 {
      font-size: 20px;
      font-weight: normal;
    }
  }

  span {
    font-size: 35px;
    line-height: 36px;
  }

  &.total {
    background: #7159c1;
    color: #fff;
  }

  @media (max-width: 500px) {
    margin: 10px;
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
    padding-bottom: 120px;
  }
`;

export const DivCard = styled.div`
  width: 100%;
  border-radius: 4px;
  background: #fff;
  padding: 15px;

  color: #000;
  display: flex;
  flex-direction: column;

  h4 {
    color: #363f5f;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
  }

  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    padding-top: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 21px;
    margin-bottom: 0;

    font-size: 14px;
    color: #969cb3;

    padding-top: 20px;

    span {
      display: flex;
      align-items: center;

      svg {
        font-size: 25px;
        margin-right: 5px;
      }
    }
  }

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const Pagination = styled.div`
  grid-column: 1/5;
  width: 150px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 0;

    background: #7159c1;
    border-radius: 50%;
    color: #fff;
    font-size: 25px;

    &:disabled {
      opacity: 0.5;
    }
  }

  @media (max-width: 900px) {
    grid-column: 1/4;
  }

  @media (max-width: 700px) {
    grid-column: 1/3;
  }
`;

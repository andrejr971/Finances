import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: #040404;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 10px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  padding-left: 10px;

  a {
    img {
      width: 130px;
      margin-right: 10px;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        a {
          padding: 15px 20px 25px;
          color: #fff;
          font-size: 16px;

          &:hover,
          &.active {
            color: #7159c1;
            border-bottom: 2px solid #7159c1;
          }
        }
      }
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const Profile = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0 10px;

  div {
    display: flex;
    flex-direction: column;
    text-align: right;

    span {
      color: #eee;
      padding-bottom: 10px;
    }

    button {
      border: 0;
      background: none;
      text-align: right;
      color: #666;
      font-weight: 15px;
    }
  }
  @media (max-width: 700px) {
    border: 0;
  }

  img {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
  }
`;

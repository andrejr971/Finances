import styled from 'styled-components';

export const Container = styled.header`
  width: 99%;
  height: 70px;
  background: #7159c1;
  position: fixed;
  bottom: 15px;
  border-radius: 35px;
  left: 2px;
  display: none;
  padding: 0 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    display: block;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 20px;

  nav {
    width: 100%;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          color: #fff;

          svg {
            font-size: 22px;
            margin-bottom: 5px;
          }

          span {
            font-size: 12px;
          }

          &:hover {
            color: #040404;
          }

          &.active {
            color: #040404;
          }
        }
      }
    }
  }
`;

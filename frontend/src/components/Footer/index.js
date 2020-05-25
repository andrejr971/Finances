import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { MdHome, MdSwapVert, MdDehaze, MdPerson } from 'react-icons/md';
import { Container, Nav } from './styles';

function HandleActive(active, to) {
  const match = useRouteMatch({
    path: to,
    exact: active,
  });

  return match ? 'active' : '';
}
export default function Footer() {
  return (
    <Container>
      <Nav>
        <nav>
          <ul>
            <li>
              <Link
                to="/dashboard"
                className={HandleActive(true, '/dashboard')}
              >
                <MdHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/transaction"
                className={HandleActive(false, '/transaction')}
              >
                <MdSwapVert />
                <span>Transações</span>
              </Link>
            </li>
            <li>
              <Link to="/category" className={HandleActive(false, '/category')}>
                <MdDehaze />
                <span>Categorias</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className={HandleActive(false, '/profile')}>
                <MdPerson />
                <span>Perfil</span>
              </Link>
            </li>
          </ul>
        </nav>
      </Nav>
    </Container>
  );
}

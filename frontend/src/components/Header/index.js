import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Logo, Content, Nav, Profile } from './styles';
import logo from '../../assets/logo_finances.svg';

function HandleActive(active, to) {
  const match = useRouteMatch({
    path: to,
    exact: active,
  });

  return match ? 'active' : '';
}

export default function Header() {
  const { profile } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/dashboard">
            <img src={logo} alt="Logo Finances" />
          </Link>
        </Logo>
        <Nav>
          <nav>
            <ul>
              <li>
                <Link
                  to="/dashboard"
                  className={HandleActive(true, '/dashboard')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/transaction"
                  className={HandleActive(false, '/transaction')}
                >
                  Transações
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className={HandleActive(false, '/category')}
                >
                  Categorias
                </Link>
              </li>
            </ul>
          </nav>
          <Profile>
            <div>
              <span>{profile.name}</span>
              <button type="button" onClick={handleSignOut}>
                Sair
              </button>
            </div>
            <Link to="/profile">
              <img src={profile.avatar.url} alt="Logo Finances" />
            </Link>
          </Profile>
        </Nav>
      </Content>
    </Container>
  );
}

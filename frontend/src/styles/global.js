import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  font: 14px 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar {
  width: 0px;
  /* background: rgba(0, 0, 0, 0.2); */
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: #545454;
}
`;

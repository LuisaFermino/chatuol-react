import styled from "styled-components";

function MenuLateral({ setMenuVisivel }) {
  return (
    <Menu>
      <Esquerda onClick={() => setMenuVisivel(false)}></Esquerda>
      <Direita></Direita>
    </Menu>
  );
}

const Menu = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
`;

const Esquerda = styled.div`
  background-color: #00000099;
  width: 30vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

const Direita = styled.div`
  background-color: white;
  width: 70vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
`;

export default MenuLateral;

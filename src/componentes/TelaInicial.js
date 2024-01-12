import styled from "styled-components";

import Logo from "../assets/img/logo.png";

function TelaInicial() {
  return (
    <Inicio>
      <div>
        <header>
          <img src={Logo} alt="logo" />
        </header>
        <main>
          <input type="text" placeholder="Digite seu nome" />
          <Botao onclick="logar()">
            <button>Entrar</button>
          </Botao>
        </main>
      </div>
    </Inicio>
  );
}

const Inicio = styled.div`
  header {
    display: flex;
    justify-content: center;
  }

  img {
    max-width: 40vw;
    max-height: 15vh;
    margin-bottom: 4vh;
  }

  input {
    width: 65vw;
    height: 7vh;
    background-color: #ffffff;
    border: 1px solid #d7d7d7;
    border-radius: 4px;
    text-align: center;
    color: #aeaeae;
    display: flex;
    font-size: 16px;
    outline: none;
  }
`;

const Botao = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 26vw;
    height: 6vh;
    background-color: #e7e7e7;
    color: #696969;
    font-size: 16px;
    border-radius: 9px;
    border: 1px solid #e7e7e7;
    margin-top: 2vh;
  }
`;

export default TelaInicial;

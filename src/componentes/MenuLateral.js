import styled from "styled-components";

import { IoPeople } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoLockOpen } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";

function MenuLateral({ setMenuVisivel, visibilidade, setVisibilidade }) {
  return (
    <Menu>
      <Esquerda onClick={() => setMenuVisivel(false)}></Esquerda>
      <Direita>
        <Titulo>
          <Contato>Escolha um contato para enviar mensagem:</Contato>
        </Titulo>
        <div>
          <Etapa>
            <IoPeople />
            <Opcao>Todos</Opcao>
          </Etapa>
        </div>
        <Titulo>
          <Contato>Escolha a visibilidade:</Contato>
        </Titulo>
        <div>
          <Etapa onClick={() => setVisibilidade("message")}>
            <IoLockOpen />
            <Opcao>Publico</Opcao>
            <Check
              visibilidade={visibilidade === "message" ? true : false}
            ></Check>
          </Etapa>
          <Etapa onClick={() => setVisibilidade("private_message")}>
            <IoLockClosed></IoLockClosed>
            <Opcao>Reservadamente</Opcao>
            <Check
              visibilidade={visibilidade === "private_message" ? true : false}
            >
              {" "}
            </Check>
          </Etapa>
        </div>
      </Direita>
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

const Titulo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2vh;
`;

const Etapa = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 2vh;
`;

const Opcao = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-left: 3vw;
`;

const Contato = styled.p`
  text-align: center;
  padding-top: 4vh;
  font-size: 16px;
  width: 55vw;
  font-weight: 700;
`;
const Check = styled(IoCheckmarkOutline)`
  font-size: 24px;
  z-index: 1000;
  color: #28bb25;
  position: fixed;
  right: 5vw;
  display: ${({ visibilidade }) => (visibilidade ? "block" : "none")};
`;

export default MenuLateral;

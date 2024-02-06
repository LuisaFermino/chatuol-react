import styled from "styled-components";
import { IoPeople } from "react-icons/io5";

function Usuarios({ name, nomeUsuario, contato, setContato }) {
  return name !== nomeUsuario ? (
    <Etapa>
      <IoPeople />
      <Opcao>{name}</Opcao>
    </Etapa>
  ) : (
    <></>
  );
}

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

export default Usuarios;

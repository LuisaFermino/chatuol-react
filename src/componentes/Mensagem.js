import styled from "styled-components";

function Mensagem(props) {
  const { type, time, from, text, to } = props;

  if (type === "message") {
    return (
      <Publica>
        <Texto>
          <Horario>({time})</Horario>
          <Dequem> {from} </Dequem>
          <Descricao> para </Descricao>
          <Paraquem>{to}:</Paraquem>
          <Descricao>{text}</Descricao>
        </Texto>
      </Publica>
    );
  } else if (type === "status") {
    return (
      <Status>
        <Texto>
          <Horario>({time})</Horario>
          <Dequem>{from}</Dequem>
          <Descricao>{text}</Descricao>
        </Texto>
      </Status>
    );
  } else if (type === "private_message") {
    return (
      <Privada>
        <Texto>
          <Horario>({time})</Horario>
          <Dequem>{from}</Dequem>
          reservadamente para
          <Paraquem>{to}:</Paraquem>
          <Descricao>{text}</Descricao>
        </Texto>
      </Privada>
    );
  }
}

const Publica = styled.div`
  background-color: #ffffff;
  width: 100vw;
  min-height: 6vh;
  align-items: center;
  margin-top: 0.5vh;
  display: flex;
`;

const Status = styled.div`
  background-color: #dcdcdc;
  width: 100vw;
  min-height: 6vh;
  align-items: center;
  margin-top: 0.5vh;
  display: flex;
`;

const Privada = styled.div`
  background-color: #ffdede;
  width: 100vw;
  min-height: 6vh;
  align-items: center;
  margin-top: 0.5vh;
  display: flex;
`;

const Texto = styled.div`
  font-size: 14px;
  padding: 10px 10px;
  line-height: 1.4;
  display: flex;
`;

const Horario = styled.p`
  color: #9c9b9b;
`;
const Dequem = styled.p`
  font-weight: 700;
  margin-left: 1vw;
`;

const Paraquem = styled.p`
  font-weight: 700;
  margin-left: 1vw;
`;

const Descricao = styled.p`
  margin-left: 1vw;
  word-break: break-all;
`;

export default Mensagem;

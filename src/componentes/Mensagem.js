import styled from "styled-components";

function Mensagem(props) {
  const { type, time, from, text } = props;

  if (type === "message") {
    return (
      <Publica>
        <Texto>
          <Horario>{time}</Horario>
          <Home>{from}</Home>
          <p>{text}</p>
        </Texto>
      </Publica>
    );
  } else if (type === "status") {
    return (
      <Status>
        <Texto>
          <Horario>{time}</Horario>
          <Home>{from}</Home>
          <p>{text}</p>
        </Texto>
      </Status>
    );
  } else if (type === "private_message") {
    return (
      <Privada>
        <Texto>
          <Horario>{time}</Horario>
          <Home>{from}</Home>
          <p>{text}</p>
        </Texto>
      </Privada>
    );
  }
}

const Publica = styled.div`
  background-color: #ffffff;
`;

const Status = styled.div`
  background-color: #dcdcdc;
`;

const Privada = styled.div`
  background-color: #ffdede;
`;

const Texto = styled.p`
  font-size: 14px;
  padding: 10px 10px;
  text-align: justify;
  line-height: 1.4;
`;

const Horario = styled.p`
  color: #9c9b9b;
`;
const Home = styled.p`
  font-weight: 700;
  margin-left: 1vw;
`;

export default Mensagem;

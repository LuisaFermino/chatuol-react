import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import { IoPeople } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";

import MenuLateral from "./MenuLateral";
import MontarMensagens from "./MontarMensagem";
import Logo from "../assets/img/logo.png";

function TelaChat({ nomeUsuario }) {
  const [menuVisivel, setMenuVisivel] = useState(false);
  const [mensagens, setMensagens] = useState([]);
  const [mensagemDigitada, setMensagemDigitada] = useState("");
  const [visibilidade, setVisibilidade] = useState("message");

  const URL = "http://localhost:5000";

  function MensagensNaTela() {
    const mensagem = axios.get(`${URL}/messages`);
    mensagem.then(({ data }) => setMensagens(data));
    mensagem.catch((err) => alert("deu erro"));
  }

  function EstruturaMensagemDigitada() {
    const objetoMensagem = {
      from: nomeUsuario,
      to: "Todos",
      text: mensagemDigitada,
      type: visibilidade,
    };
    axios.post(`${URL}/messages`, objetoMensagem).then(MensagensNaTela);
  }

  function EnviaMensagem() {
    EstruturaMensagemDigitada(mensagemDigitada);
    setMensagemDigitada("");
  }

  function ManterConexao() {
    axios.post(`${URL}/status`, {
      name: nomeUsuario,
    });
  }

  useEffect(() => {
    MensagensNaTela();
    const atualizaMensagens = setInterval(MensagensNaTela, 3000);
    const conexao = setInterval(ManterConexao, 3000);
    return () => {
      clearInterval(atualizaMensagens);
      clearInterval(conexao);
    };
  }, []);

  return (
    <Chat>
      <Menu>
        <img src={Logo} alt="logo" />
        <IconeUsuario onClick={() => setMenuVisivel(true)} />
      </Menu>
      {menuVisivel ? (
        <MenuLateral
          setMenuVisivel={setMenuVisivel}
          visibilidade={visibilidade}
          setVisibilidade={setVisibilidade}
        />
      ) : (
        <></>
      )}
      <Mensagens>
        <MontarMensagens mensagens={mensagens} />
      </Mensagens>
      <Rodape>
        <input
          type="text"
          placeholder="Escreva aqui..."
          onChange={(e) => setMensagemDigitada(e.target.value)}
          value={mensagemDigitada}
        />
        <IconeEnviar onClick={EnviaMensagem} />
      </Rodape>
    </Chat>
  );
}

const Chat = styled.div`
  z-index: 0;
  background-color: #f3f3f3;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
`;

const Menu = styled.div`
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  min-height: 8vh;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.116);

  img {
    max-width: 20vw;
    max-height: 6vh;
    position: relative;
    left: 20px;
    top: 10px;
  }
`;

const IconeUsuario = styled(IoPeople)`
  font-size: 32px;
  position: fixed;
  right: 20px;
  top: 10px;
  cursor: pointer;
`;

const IconeEnviar = styled(IoPaperPlaneOutline)`
  font-size: 26px;
  position: fixed;
  bottom: 3vh;
  right: 4vw;
`;

const Rodape = styled.div`
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  height: 10vh;
  bottom: 0;
  left: 0;
  display: flex;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.116);

  input {
    background-color: white;
    border: 1px solid white;
    font-size: 16px;
    width: 70vw;
    margin-left: 20px;
    outline: none;
  }
`;

const Mensagens = styled.div`
  width: 100vw;
  height: 75vh;
  position: relative;
  left: 0;
  top: 12vh;
  min-height: 50vh;
  overflow-y: scroll;
`;

export default TelaChat;

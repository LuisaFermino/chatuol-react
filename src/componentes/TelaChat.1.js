import { useState, useEffect } from "react";
import axios from "axios";
import MenuLateral from "./MenuLateral";
import MontarMensagens from "./MontarMensagem";
import Logo from "../assets/img/logo.png";
import {
  Chat,
  Menu,
  IconeUsuario,
  Mensagens,
  Rodape,
  IconeEnviar,
} from "./TelaChat";

export function TelaChat() {
  const [menuVisivel, setMenuVisivel] = useState(false);
  const [mensagens, setMensagens] = useState([]);

  function MensagensNaTela() {
    const URL = "http://localhost:5000/messages";
    const mensagem = axios.get(URL);
    mensagem.then(({ data }) => setMensagens(data));
    mensagem.catch((err) => alert("deu erro"));
  }

  useEffect(() => {
    MensagensNaTela();
  }, []);

  setInterval(MensagensNaTela, 3000);

  return (
    <Chat>
      <Menu>
        <img src={Logo} alt="logo" />
        <IconeUsuario onClick={() => setMenuVisivel(true)} />
      </Menu>
      {menuVisivel ? <MenuLateral setMenuVisivel={setMenuVisivel} /> : <></>}
      <ScrollView />
      <Mensagens>
        <MontarMensagens mensagens={mensagens} setMensagens={setMensagens} />
      </Mensagens>
      <Rodape>
        <input type="text" placeholder="Escreva aqui..." />
        <IconeEnviar />
      </Rodape>
    </Chat>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";

import Mensagem from "./Mensagem";

function MontarMensagens() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:5000/messages";
    const promise = axios.get(URL);
    promise.then(({ data }) => setMensagens(data));
    promise.catch((err) => alert("deu erro"));
  }, []);

  if (mensagens.length > 0) {
    return mensagens.map(({ id, type, time, from, text }) => (
      <Mensagem key={id} type={type} time={time} from={from} text={text} />
    ));
  } else {
    return <p> Carregando mensagens...</p>;
  }
}

export default MontarMensagens;

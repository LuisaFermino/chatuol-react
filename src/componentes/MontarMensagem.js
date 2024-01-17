import Mensagem from "./Mensagem";

function MontarMensagens({ mensagens }) {
  return mensagens[0] ? (
    mensagens.map(({ indice, type, time, from, text, to }) => (
      <Mensagem
        key={indice}
        type={type}
        time={time}
        from={from}
        text={text}
        to={to}
      />
    ))
  ) : (
    <p> Carregando mensagens...</p>
  );
}

export default MontarMensagens;

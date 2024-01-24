import Mensagem from "./Mensagem";

function MontarMensagens({ mensagens }) {
  return mensagens[0] ? (
    mensagens.map(({ type, time, from, text, to }, indice) => (
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

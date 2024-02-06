import Usuarios from "./Usuarios";

function ListaUsuarios({ usuario, nomeUsuario, contato, setContato }) {
  return usuario[0] ? (
    usuario.map(({ name }, indice) => (
      <Usuarios
        key={indice}
        name={name}
        nomeUsuario={nomeUsuario}
        contato={contato}
        setContato={setContato}
      />
    ))
  ) : (
    <p> Carregando Usuarios...</p>
  );
}

export default ListaUsuarios;

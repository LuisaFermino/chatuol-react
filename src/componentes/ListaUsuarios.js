import Usuarios from "./Usuarios";

function ListaUsuarios({ usuario, nomeUsuario }) {
  return usuario[0] ? (
    usuario.map(({ name }, indice) => (
      <Usuarios key={indice} name={name} nomeUsuario={nomeUsuario} />
    ))
  ) : (
    <p> Carregando Usuarios...</p>
  );
}

export default ListaUsuarios;

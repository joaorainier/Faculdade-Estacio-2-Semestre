import Link  from 'next/link'//existe uma funcionalidade para isso em next

export default function Menu() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid d-flex justify-content-start">
        <Link className="navbar-brand ms-3 text-light" href={"/LivroLista"}>
          Catálogo
        </Link>
        <Link className="navbar-brand ms-3 text-light" href={"/LivroDados"}>
          Novo
        </Link>
      </div>
    </nav>
  );
}

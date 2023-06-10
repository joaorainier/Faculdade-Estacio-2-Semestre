import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid d-flex justify-content-start">
        <Link className="navbar-brand ms-3 text-light" to={"/"}>
          Catálogo
        </Link>
        <Link className="navbar-brand ms-3 text-light" to={"/dados"}>
          Novo
        </Link>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary
      justify-content-between"
    >
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light text-decoration:none">
            Usuarios
          </Link>
        </h1>
      </div>

      <Link
        to={"/persona/nuevo"}
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >
        Agregar persona &#43;
      </Link>

      <Link
        to={"/"}
        className="btn btn-danger nuevo-post d-block d-md-inline-block ml-3"
      >
        Inicio 
      </Link>
    </nav>
  );
};

export default Header;

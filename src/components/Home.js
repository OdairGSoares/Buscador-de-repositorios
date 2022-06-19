import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Home(props) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState("");

  function handlePesquisa(e) {
    e.preventDefault();
    localStorage.clear();
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        if (response != []) {
          const repositories = response.data;
          const repositories_names = [];
          repositories.map((repository) => {
            repositories_names.push(repository.name);
          });

          localStorage.setItem(
            "repositories_names",
            JSON.stringify(repositories_names)
          );
          navigate("/repositories");
          setErro("");
        } else {
        }
      })
      .catch((err) => {
        setErro("usuario não encontrado!");
      });
  }

  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Git Search
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Coloque o nome do usuário"
                aria-label="Search"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit" onClick={(e)=>{handlePesquisa(e)}}>
                Pesquisar repositórios
              </button>
            </form>
          </div>
        </div>
      </nav>
      <p id="resultado"></p>
      <p>{erro}</p>
    </section>
  );
}

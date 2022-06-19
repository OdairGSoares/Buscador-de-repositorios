import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Repositories() {
  const [repositories, set_repositories] = useState([]);

  useEffect(() => {
    let repositories_names = localStorage.getItem("repositories_names");
    repositories_names = JSON.parse(repositories_names);
    set_repositories(repositories_names);
  }, []);

  return (
    <div className="row text-center">
      <ul>
        {repositories.map((repository) => {
          return (
            <h6 className="text-center mt-5">
              <i className="fa-solid fa-circle-dot fa-2xs"></i> {repository}
            </h6>
          );
        })}
      </ul>
      <div className="row ms-1 text-center">
        <Link to="/">
          <button type="button" className="btn btn-outline-primary">
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}

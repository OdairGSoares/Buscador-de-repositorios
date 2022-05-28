import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Repositories() {

  const [repositories, set_repositories] = useState([]);

  useEffect(() => {
    let repositories_names = localStorage.getItem('repositories_names');
    repositories_names = JSON.parse(repositories_names);
    set_repositories(repositories_names);
    }, []);
  
  return (
    <>
      <ul>
          {repositories.map(repository => {
            return (
              <li>{repository}</li>
            )
          })}
        <Link to='/'>Voltar</Link>
      </ul>
    </>
  );


}

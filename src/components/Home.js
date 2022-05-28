import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
export default function Home(props){

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [erro, setErro] = useState('');
  
    function handlePesquisa(){
      localStorage.clear();
      axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        
        if(response!=[]){
        const repositories = response.data;
        const repositories_names = [];
        repositories.map((repository)=>{
          repositories_names.push(repository.name);
        })

        
        localStorage.setItem('repositories_names', JSON.stringify(repositories_names));
        navigate('/repositories')
        setErro('')
        }else{
          
        } 
      }).catch((err) => {

        setErro('usuario não encontrado!')
      });
    }
  
    return(
        <section>
            <p className="texto">{usuario}</p>
            <input placeholder='usuario' className="usuario_input" value={usuario} onChange={e => setUsuario(e.target.value)} />
            <button type="button" onClick={handlePesquisa} >Pesquisar</button>
            <p id="resultado"></p>
            <p >{erro}</p>
        </section>
    )
  }